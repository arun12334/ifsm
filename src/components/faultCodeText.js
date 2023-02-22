import { TextField, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSelector, useDispatch } from 'react-redux';
import { updateForm } from '../store/reducers/knowledgeBaseForm';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { problemCodeApi, smcsCodeApi } from '../service/apiServices/knoledgeBaseService'

function FaultCodeText() {

    let dispatch = useDispatch()
    let formData = useSelector((state) => state.knowledgeForm)
    const [fault, setFault] = React.useState(true);
    const [procodedata, setprocodedata] = React.useState([]);
    const [smcsdata, setsmcsdata] = React.useState([]);
    const [problem, setProblem] = React.useState(true);
    const [smcs, setSmcs] = React.useState(false)
    const [problemCodeModelOpen, setproblemCodeModelOpen] = React.useState(false);
    const [searchvalue, setsearchvalue] = React.useState('');
    const [smcsValue, setSmcsValue] = React.useState('');
    const [modelsmcs, setModelSmcs] = React.useState(false)

    const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
        return (
            <TextField
                {...props}
                InputProps={{
                    ...InputProps,
                    startAdornment: iconStart ? (
                        <InputAdornment position="start">{iconStart}</InputAdornment>
                    ) : null,
                    endAdornment: iconEnd ? (
                        <InputAdornment position="end">{iconEnd}</InputAdornment>
                    ) : null
                }}
            />
        );
    };

    const problemCodeChange = (e) => {
        if (e) {
            setProblem(false);
            setSmcs(true);
            dispatch(updateForm({ field: 'fault_code', value: e }))
        } else {
            setProblem(true);
            setSmcs(false);
            dispatch(updateForm({ field: 'fault_code', value: e }))
        }
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const searchProblemCode = async (value) => {
        setsearchvalue(value)
        if (value) {
            let data = await problemCodeApi(value);
            setprocodedata(data)
        } else {
            setprocodedata([])
            dispatch(updateForm({ field: 'problem_code', value: '' }))
            dispatch(updateForm({ field: 'smcs_code', value: '' }))
            setFault(true)
            setSmcs(false)
        }
    }


    const chooseProblemCode = (value) => {
        let data = value.ProblemCode + '-' + value.ProblemDescription
        dispatch(updateForm({ field: 'problem_code', value: data }))
        setFault(false)
        setproblemCodeModelOpen(false)
        setSmcs(true)
    }
    const searchSmcsValue = async (value) => {
        setSmcsValue(value)
        if (value) {
            let data = await smcsCodeApi(value);
            setsmcsdata(data);
        } else {
            setsmcsdata([])
            dispatch(updateForm({ field: 'smcs_code', value: '' }))
        }

        if (value.length === 0) {
            setsmcsdata([])
        }
    }
    const closeSmcs = () => {
        setModelSmcs(false);
        setsmcsdata([]);
    }

    const chooseSmcs = (value) => {
        dispatch(updateForm({ field: 'smcs_code', value: value }));
        setModelSmcs(false)
    }

    return (
        <>
            <div className={`status ${fault}`}>
                <TextField
                    margin="normal"
                    fullWidth
                    id="faultcode"
                    label="Fault Code"
                    name="faultcode"
                    autoCorrect='off'
                    autoComplete='off'
                    value={formData.faultCode}
                    onChange={(e) => { problemCodeChange(e.target.value) }}
                    disabled={!fault}
                    className="fault-top"
                />
            </div>
            <Typography className='required-btn'>or(<span className='required-textBox'></span>)</Typography>
            <Box className='flx-input'>
                <div className={`status ${problem}`}>
                    <IconTextField
                        label="Select Problem Code / Description"
                        margin="normal"
                        fullWidth
                        id="problemcode"
                        placeholder="Problem Code / Description"
                        name="problemcode"
                        autoCorrect='off'
                        autoComplete='off'
                        value={formData.problemCode}
                        disabled={!problem}
                        onClick={problem ? (() => setproblemCodeModelOpen(true)) : Boolean}
                        iconEnd={problem && (<IconButton className="a-i" onClick={() => setproblemCodeModelOpen(true)}><ArrowForwardIcon /></IconButton>)}

                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    {problem ? (
                        <Typography className='cpc1-txt' onClick={() => setproblemCodeModelOpen(true)}>Change Problem Code / Description</Typography>
                    ) : ""}
                </div>
                <div className={`status ${smcs}`}>
                    <IconTextField
                        label="Select SMCS Component / Description"
                        margin="normal"
                        fullWidth
                        id="smcs"
                        placeholder="SMCS Component"
                        name="smcs"
                        autoCorrect='off'
                        autoComplete='off'
                        value={formData.smcsCode}
                        onClick={smcs ? (() => setModelSmcs(true)) : Boolean}
                        disabled={!smcs}
                        iconEnd={smcs && (<IconButton className="a-i" onClick={() => setModelSmcs(true)}><ArrowForwardIcon /></IconButton>)}

                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    {smcs ? (
                        <Typography className='cpc-txt' onClick={() => setModelSmcs(true)}>Change SMCS Component / Description</Typography>
                    ) : ""}
                </div>
            </Box>

            {/* model Area */}

            <Modal
                className="modal-scroll"
                open={problemCodeModelOpen}
                onClose={() => setproblemCodeModelOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='close-btn-modal'>
                        <Typography id="modal-modal-title1" variant="h6" component="h2">
                            Select Problem Code / Description
                        </Typography><CloseIcon className='civ' onClick={() => setproblemCodeModelOpen(false)} /></div>

                    <IconTextField
                        fullWidth
                        label="Search"
                        name="Search"
                        value={searchvalue}
                        onChange={(event) => searchProblemCode(event.target.value)}
                        iconEnd={<IconButton><CloseIcon onClick={() => setsearchvalue('')} /></IconButton>}
                        autoCorrect='off'
                        autoComplete='off'
                        autoFocus="autofocus"

                    />

                    {procodedata.map((value, key) => (
                        <Typography className='se-txt' onClick={() => chooseProblemCode(value)}  >{value.ProblemCode}-{value.ProblemDescription}</Typography>
                    ))}
                </Box>
            </Modal>

            <Modal
                open={modelsmcs}
                onClose={() => closeSmcs()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='close-btn-modal'>
                        <Typography id="modal-modal-title1" variant="h6" component="h2">
                            Select SMCS Component / Description
                        </Typography><CloseIcon className='civ' onClick={() => setModelSmcs(false)} /></div>

                    <IconTextField
                        fullWidth
                        label="Search"
                        name="Search"
                        value={smcsValue}
                        onChange={(event) => searchSmcsValue(event.target.value)}
                        iconEnd={<IconButton><CloseIcon onClick={() => setSmcsValue('')} /></IconButton>}
                        autoCorrect='off'
                        autoComplete='off'
                        autoFocus="autofocus"

                    />
                    {smcsdata.map((value, key) => (
                        <Typography className='se-txt' onClick={() => chooseSmcs(value)}  >{value}</Typography>

                    ))}
                </Box>
            </Modal>

        </>

    )
}

export default FaultCodeText