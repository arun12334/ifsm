import React from 'react'
import Explayout from '../../components/expert/explayout'
import { Card } from '@mui/material';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MenuItem from '@mui/material/MenuItem';
// import '../../App.css'
import cam from '../../assets/cam.svg';
import setting from '../../assets/settingsicon.svg';
import notes from '../../assets/notes.svg';
import file from '../../assets/file.svg';
import toolicon from '../../assets/toolicon.svg';
import document from '../../assets/document.svg';
import AddIcon from '@mui/icons-material/Add';
import LaunchIcon from '@mui/icons-material/Launch';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ShieldIcon from '@mui/icons-material/Shield';

const currencies = [
    {

        label: 'IoT',
    },
    {

        label: 'Non IoT    ',
    },

];

function ExperData() {
    const [iconName, setIconName] = React.useState('resolution')
    const [solIconName, setSolIconName] = React.useState('General')
    const recommentationfunction = (data) => {
        setIconName(data)
    }
    return (
        <Explayout>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                {/* Table Html ---------------------------------------- */}
                <div className='box-header dt-mgmt'>
                    <h2 className="page-heding">AI Data - IoT </h2>

                    <div className='tb-btns'>
                        <div className='dropdown-flex'>
                            <Typography variant="subtitle1" gutterBottom>
                                Equipment Type
                            </Typography>

                            <TextField
                                id="outlined-select-currency-native"
                                select

                                defaultValue="IoT"
                                size="small"
                                SelectProps={{
                                    native: true,
                                }}
                            //   helperText="Please select your currency"
                            >
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </div>

                        <Button variant="contained" size="medium" color="primary" startIcon={<AddIcon />}>
                            Add New
                        </Button>
                        <Button variant="contained" size="medium" color="primary" startIcon={<LaunchIcon />}>
                            Export
                        </Button>
                        <Button className='ic-single' variant="contained" size="medium" color="secondary">
                            <FilterAltIcon />
                        </Button>
                    </div>
                </div>
                <Card>
                    <CardContent>
                        Table details comes here
                    </CardContent>
                </Card>

                {/* Create Parameters ---------------------------------------------- */}

                <div className='crt-parameters'>
                    <div className='box-header dt-mgmt'>
                        <h2 className="page-heding">Create Parameters </h2>

                        <div className='tb-btns'>
                            <div className='dropdown-flex'>
                                <Typography variant="subtitle1" gutterBottom>
                                    Equipment Type
                                </Typography>

                                <TextField
                                    id="outlined-select-currency-native"
                                    select

                                    defaultValue="IoT"
                                    size="small"
                                    SelectProps={{
                                        native: true,
                                    }}
                                //   helperText="Please select your currency"
                                >
                                    {currencies.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </div>

                            <Button className='back-btn' variant="contained" size="medium" startIcon={<ChevronLeftIcon />}>
                                Back
                            </Button>

                        </div>
                    </div>

                    <div className='create-input-section'>
                        <Card>
                            <CardContent>
                                <div className='input-wrapper'>
                                    <TextField id="outlined-basic" label="Model" variant="outlined" />
                                    <TextField id="outlined-basic" label="Serial Prefix" variant="outlined" />
                                    <TextField id="outlined-basic" label="Serial No. Range" variant="outlined" />
                                </div>

                                <div className='divider'></div>

                                <div className='input-wrapper stage2'>
                                    <TextField id="outlined-basic" label="Fault Code" variant="outlined" />
                                    <TextField id="outlined-basic" label="Fault Code Description" variant="outlined" />
                                    <Button className='ic-single' variant="contained" size="medium" color="primary">
                                        <AddIcon />
                                    </Button>

                                </div>

                                <div className='divider'></div>

                                <div className='input-wrapper stage2 f-des'>

                                    <TextField id="outlined-basic" label="SMCS Component Code" variant="outlined" />
                                    <Button className='ic-single' variant="contained" size="medium" color="primary">
                                        <AddIcon />
                                    </Button>

                                </div>
                            </CardContent>
                        </Card>
                        <Box className='card-btns'>
                            <Button variant="contained" size="medium" color="secondary" startIcon={<CloseIcon />}>
                                Clear
                            </Button>
                            <Button variant="contained" size="medium" color="primary" startIcon={<SaveIcon />}>
                                Save & Continue
                            </Button>
                        </Box>
                    </div>
                </div>

                {/* Create General Resolution layout ---------------------------------------------- */}

                <div className='crt-general-resolution'>
                    <div className='box-header dt-mgmt'>
                        <h2 className="page-heding">Create General Resolution </h2>

                        <div className='tb-btns'>
                            <Button className='back-btn' variant="contained" size="medium" startIcon={<ChevronLeftIcon />}>
                                Back
                            </Button>

                            <Button variant="contained" size="medium" color="secondary" startIcon={< ShieldIcon />}>
                                Add Resolution Path
                            </Button>
                            <Button variant="contained" size="medium" color="primary" startIcon={<AddIcon />}>
                                Create General Resolution
                            </Button>

                        </div>
                    </div>


                    <Box className='contact-info'>
                        <Card className='model-cart'>
                            <CardContent sx={{ overflow: 'overlay', height: '100%' }}>

                                <div className="rowdata">
                                    <ul>
                                        <li><div className='iconwrap'></div> <div className='det_right'><Typography className='font-14'>Serial No :</Typography> <Typography className='text-bold'> </Typography></div></li>

                                        <li>
                                            <div className='iconwrap'> </div>

                                            <div className='det_right'>
                                                <Typography className='font-14'>Model/Prefix :</Typography >
                                                <Typography className='text-bold'></Typography>

                                            </div>

                                        </li>

                                        <li>

                                            <div className='iconwrap'> </div>

                                            <div className='det_right'>
                                                <Typography className='font-14'>Issue Description :</Typography>
                                                <Typography className='text-bold'></Typography>
                                            </div>
                                        </li>

                                        <li>

                                            <div className='iconwrap'> </div>
                                            <div className='det_right'>
                                                <Typography className='font-14'>Fault Code :</Typography>
                                                <Typography className='text-bold'></Typography>
                                                <b></b> </div>
                                        </li>


                                        <li>

                                            <div className='iconwrap'> </div>

                                            <div className='det_right'><Typography className='font-14'>Problem Code / Description :</Typography>
                                                <Typography className='text-bold'></Typography>
                                            </div>
                                        </li>

                                        <li>

                                            <div className='iconwrap'> </div>
                                            <div className='det_right'>
                                                <Typography className='font-14'>SMCS Component :</Typography>
                                                <Typography className='text-bold'></Typography>

                                            </div>
                                        </li>

                                        <li>
                                            <div className='iconwrap'> </div>
                                            <div className='det_right'><Typography className='font-14'>Alternate Fault Code:</Typography>

                                                <Typography className='text-bold'>
                                                </Typography>

                                            </div></li>

                                        <li>
                                            <div className='iconwrap'> </div>

                                            <div className='det_right'><Typography className='font-14'>Fault Code Description:</Typography>

                                                <Typography className='text-bold'></Typography>
                                            </div></li>


                                        <li>

                                            <div className='iconwrap'></div>
                                            <div className='det_right'><Typography className='font-14'>Complaint Description:</Typography>

                                                <Typography className='text-bold'></Typography>
                                            </div></li>

                                    </ul>
                                </div>
                            </CardContent>
                        </Card>


                        <Card className='resolution-path'>
                            <CardContent>
                                <div className='iconNameSol'>{solIconName}</div>
                                <div className='resol_wrap'>
                                    <div className='resol_left'>
                                        {iconName === 'resolution' &&
                                            <div className="line-sp">
                                                resolution
                                            </div>
                                        }
                                        {iconName === 'common_tools' &&
                                            <div className="line-sp">
                                                common_tools
                                            </div>
                                        }
                                        {iconName === 'special_tools' &&
                                            <div className="line-sp">
                                                special_tools
                                            </div>
                                        }
                                        {iconName === 'pdf' &&
                                            <div className="line-sp">
                                                pdf
                                            </div>
                                        }
                                        {iconName === 'note' &&
                                            <div className="line-sp">
                                                note
                                            </div>
                                        }
                                        {iconName === 'camera' &&
                                            <div className="line-sp">
                                                camera
                                            </div>
                                        }
                                        {iconName === 'video' &&
                                            <div className="line-sp">
                                                video
                                            </div>
                                        }
                                    </div>
                                    <div className='resol_right'>
                                        <div className='icon-vertical-alien'>
                                            <IconButton className={iconName === "resolution" ? 'resol_btn_active' : 'resol_btn'} onClick={() => recommentationfunction("resolution")}>  <img src={document} className="res-icon"></img></IconButton><br />
                                            <IconButton className={iconName === "common_tools" ? 'resol_btn_active' : 'resol_btn'} onClick={() => recommentationfunction("common_tools")}> <img src={setting} className="set-icon"></img> </IconButton><br />
                                            <IconButton className={iconName == "special_tools" ? 'resol_btn_active' : 'resol_btn'} onClick={() => recommentationfunction("special_tools")}>  <img src={toolicon} className="stool-icon"></img></IconButton><br />
                                            <IconButton className={iconName == "pdf" ? 'resol_btn_active' : 'resol_btn'} onClick={() => recommentationfunction("pdf")}> <img src={file} className="file-icon"></img></IconButton><br />
                                            <IconButton className={iconName == "note" ? 'resol_btn_active' : 'resol_btn'} onClick={() => recommentationfunction("note")}>    <img src={notes} className="note-icon" ></img></IconButton><br />
                                            <IconButton className={iconName == "camera" ? 'resol_btn_active' : 'resol_btn'} onClick={() => recommentationfunction("camera")}> <img src={cam} className="cam-icon"></img> </IconButton><br />
                                            <IconButton className={iconName == "video" ? 'resol_btn_active' : 'resol_btn'} onClick={() => recommentationfunction("video")}>  <VideocamOutlinedIcon /> </IconButton><br />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                    </Box>
                </div>

            </Container>

        </Explayout>

    )
}

export default ExperData