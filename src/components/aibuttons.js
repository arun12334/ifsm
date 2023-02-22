import React from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { aiSearch, aiDatanumber } from '../service/apiServices/knoledgeBaseService';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetForm } from '../store/reducers/knowledgeBaseForm';
import { useDispatch } from 'react-redux';
import { updateToast } from '../store/reducers/toasters'
import { updateResponce } from '../store/reducers/apiResponces'

const AiButtons = () => {
    let dispatch = useDispatch()
    let formData = useSelector((state) => state.knowledgeForm)
    let { serialNumber, modelPrefix, serialNoRange, faultCode, problemCode, smcsCode } = formData;
    let navigate = useNavigate()

    const cleardata = () => {
        dispatch(resetForm())
    }

    const aisearchfun = async () => {

        let response = await aiSearch(formData);
        // console.log('1', response)
        let complaintDescdata = response.data.complaintDesc;

        if (response.data.length !== 0) {
            dispatch(updateResponce({ field: 'aisearchlength', value: complaintDescdata }))
            let lengthdata = response.data.length;
            if (response.data.length === 1) {
                let res = await aiDatanumber(response.data.length, formData);
                let results = res.data.results;
                if (results) {
                    let val = {
                        serialno: serialNumber.length === 8 ? serialNumber.toUpperCase() : '',
                        modelprefix: modelPrefix ? modelPrefix : '',
                        range: serialNoRange ? serialNoRange : '',
                        smcs: smcsCode ? smcsCode : '',
                        faultcode: faultCode ? faultCode.toUpperCase() : '',
                        problemcode: problemCode ? problemCode : '',
                        length: lengthdata,
                        results: results,
                        CommonResolutionnumber: 1,
                        ai: "true",
                        complaintDesc: complaintDescdata.length > 0 ? complaintDescdata[0] : "",
                        comdes: complaintDescdata.length > 0 ? complaintDescdata[0] : "",
                    };
                    navigate('/result', { state: val })
                }
            } else {
                let val = {
                    serialno: serialNumber.length === 8 ? serialNumber.toUpperCase() : '',
                    modelprefix: modelPrefix ? modelPrefix : '',
                    range: serialNoRange ? serialNoRange : '',
                    smcs: smcsCode ? smcsCode : '',
                    faultcode: faultCode ? faultCode.toUpperCase() : '',
                    problemcode: problemCode ? problemCode : '',
                    length: lengthdata,
                    viewall: true,
                    ai: "true",
                    serialnumber: modelPrefix,
                    complaintDesc: complaintDescdata
                };
                navigate('/searchresult', { state: val })
            }
        } else {
            dispatch(updateToast({ field: 'match' }));
            cleardata();
        }
        dispatch(updateToast({ field: 'reasonRevert' }))
        dispatch(updateToast({ field: 'revertLoader' }))

    }
    return (
        <>
            <Box className="ok-btn">
                <Button variant="contained" className='btn-secondary' onClick={cleardata} sx={{ mr: 1 }} ><CloseIcon />No</Button>
                <Button variant="contained" className='btn-primary' onClick={aisearchfun}><CheckIcon />Yes</Button>
            </Box>
        </>
    )
}

export default AiButtons