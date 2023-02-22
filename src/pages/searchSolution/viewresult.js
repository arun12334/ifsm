import React, { useEffect } from 'react'
import Layout from '../../components/searchLayout';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import 'react-slideshow-image/dist/styles.css';
import "plyr-react/plyr.css"
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CardData from '../../pages/searchSolution/carddata'
import LayersIcon from '@mui/icons-material/Layers';
import * as Icon from 'react-bootstrap-icons';



function Viewresult() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchdata, setsearchdata] = React.useState({});
    const [faultdes, setfaultdes] = React.useState("");


    useEffect(() => {
        // console.log(location.state.results, location.state.solutionpathvalue, location.state.faultDesc, location.state.ai, location.state)
        const modelprefix = location.state.modelprefix.split("/");
        const smcs = location.state.smcs.split("-")
        const pd = location.state.problemcode.split("-")
        let fData = {
            "modelprefix": modelprefix[0].trim(),
            "serialno": modelprefix[1],
            "serialnoRange": location.state.range,
            "problemdes": pd[0].replace(/^0+/, ''),
            "smcs": smcs[0],
            "faultcode": location.state.faultcode,
            "CommonResolutionnumber": location.state.CommonResolutionnumber
        }
        setsearchdata(fData)
        // console.log(fData,searchdata)
    }, [])

    return (
        <><Layout>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Box className='box-header'>
                    <h2 className="page-heding">Result <span className='header-count'>{location.state.CommonResolutionnumber < 10 ? `0${location.state.CommonResolutionnumber}` : location.state.CommonResolutionnumber}</span>
                    </h2>
                    <div>
                        <Button

                            type="submit"
                            // size="small"
                            variant="contained"
                            className='btn-secondary fo-rig'
                            onClick={() => { navigate('/result', { state: { comdes: location.state.comdes ? location.state.comdes : '', serialno: location.state.serialno, modelprefix: location.state.modelprefix, range: location.state.range, smcs: location.state.smcs, faultcode: location.state.faultcode, problemcode: location.state.problemcode, length: location.state.length, results: location.state.results, CommonResolutionnumber: location.state.CommonResolutionnumber, viewall: location.state.viewall, ai: location.state.ai, altFaultCode: location.state.altFaultCode, complaintDesc: location.state.complaintDesc } }) }}

                        >
                            Back
                        </Button>
                        {location.state.viewall === true &&
                            <Button
                                type="submit"
                                // size="large"
                                variant="contained"
                                className='btn-primary'
                                onClick={() => { navigate('/searchresult', { state: { serialno: location.state.serialno, complaintDesc: location.state.complaintDesc, modelprefix: location.state.modelprefix, range: location.state.range, smcs: location.state.smcs, faultcode: location.state.faultcode, problemcode: location.state.problemcode, length: location.state.length, viewall: location.state.viewall, ai: location.state.ai, altFaultCode: location.state.altFaultCode, } }) }}

                            >
                                View All Results
                            </Button>}
                    </div>
                </Box>

                <Box className='contact-info'>
                    <Card className='model-cart'>
                        <CardContent sx={{ overflow: 'overlay', height: '100%' }}>

                            <div className="rowdata">
                                <ul>
                                    {location.state.serialno !== "" && <li>


                                        <div className='iconwrap'><Icon.DatabaseFill className='icon' /> </div>
                                        <div className='det_right'><Typography className='font-14'>Serial No :</Typography>

                                            <Typography className='text-bold'> {location.state.serialno ? location.state.serialno : "-"}</Typography></div></li>}

                                    {location.state.modelprefix !== "" && <li>
                                        <div className='iconwrap'><Icon.GearFill className='icon' /> </div>

                                        <div className='det_right'>
                                            <Typography className='font-14'>Model/Prefix :</Typography >
                                            <Typography className='text-bold'>{location.state.modelprefix ? location.state.modelprefix : "-"}</Typography>

                                        </div>

                                    </li>}

                                    {location.state.range !== "" && <li>

                                        <div className='iconwrap'><Icon.CollectionFill className='icon' /> </div>

                                        <div className='det_right'>
                                            <Typography className='font-14'>Issue Description :</Typography>
                                            <Typography className='text-bold'>{location.state.range ? location.state.range : "-"}</Typography>
                                        </div>
                                    </li>}

                                    {location.state.faultcode !== "" && <li>

                                        <div className='iconwrap'><Icon.ExclamationCircleFill className='icon' /> </div>
                                        <div className='det_right'>
                                            <Typography className='font-14'>Fault Code :</Typography>
                                            <Typography className='text-bold'>{location.state.faultcode ? location.state.faultcode : "-"}</Typography>
                                            <b></b> </div>
                                    </li>}
                                    {/* <li><div className='det_right'>{ location.state.problemcode &&<br/> }</div></li> */}

                                    {location.state.problemcode !== "" && <li>

                                        <div className='iconwrap'><Icon.ChatRightTextFill className='icon' /> </div>

                                        <div className='det_right'><Typography className='font-14'>Problem Code / Description :</Typography>
                                            <Typography className='text-bold'>{location.state.problemcode ? location.state.problemcode : "-"}</Typography>
                                        </div>
                                    </li>}

                                    {location.state.smcs !== "" && <li>

                                        <div className='iconwrap'><Icon.BoxSeamFill className='icon' /> </div>
                                        <div className='det_right'>
                                            <Typography className='font-14'>SMCS Component :</Typography>
                                            <Typography className='text-bold'>{location.state.smcs ? location.state.smcs : "-"}</Typography>

                                        </div>
                                    </li>}

                                    {/* {altFaultCode !== "" && <li>
                    <div className='iconwrap'><Icon.LayersFill className='icon' /> </div>
                    <div className='det_right'><Typography className='font-14'>Alternate Fault Code:</Typography>

                      <Typography className='text-bold'>{altFaultCode.length > 0 ? altFaultCode.map((val, i, last) => {
                        return (
                          <div >
                            {val}{i + 1 !== last.length && ','}
                          </div>
                        )
                      }
                      ) : "-"}</Typography>

                    </div></li>} */}

                                    {location.state.faultdesc !== "" && <li>
                                        <div className='iconwrap'><Icon.ChatRightTextFill className='icon' /> </div>

                                        <div className='det_right'><Typography className='font-14'>Fault Code Description:</Typography>

                                            <Typography className='text-bold'>{location.state.faultdesc ? location.state.faultdesc : "-"}</Typography>
                                        </div></li>}


                                    {(location.state.comdes && location.state.faultcode === "") && <li>

                                        <div className='iconwrap'><Icon.ChatRightTextFill className='icon' /> </div>
                                        <div className='det_right'><Typography className='font-14'>Complaint Description:</Typography>

                                            <Typography className='text-bold'>{location.state.comdes ? location.state.comdes : "-"}</Typography>
                                        </div></li>}

                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='solutionpath-box'>
                        <CardContent>

                            <div className='bom-align'>
                                <Typography className='fo-border'><span className='solution-count'>{location.state.solutionpath}</span>Solution Path

                                </Typography>
                                {location.state.solutionpathvalue.Bom.length != 0 &&
                                    //  <img src={bom} onClick={() => { navigate('/bom',{state:{solutionpathvalue:location.state.solutionpathvalue,serialno:location.state.serialno,modelprefix: location.state.modelprefix,range: location.state.range,smcs: location.state.smcs,faultcode: location.state.faultcode,problemcode: location.state.problemcode,length:location.state.length,results:location.state.results,CommonResolutionnumber:location.state.CommonResolutionnumber}}) }}
                                    //  ></img>
                                    <IconButton className='btn-outlined bom' onClick={() => { navigate('/bom', { state: { comdes: location.state.comdes ? location.state.comdes : '', solutionpathvalue: location.state.solutionpathvalue, serialno: location.state.serialno, modelprefix: location.state.modelprefix, range: location.state.range, smcs: location.state.smcs, faultcode: location.state.faultcode, problemcode: location.state.problemcode, length: location.state.length, results: location.state.results, CommonResolutionnumber: location.state.CommonResolutionnumber, Viewresult: "true", solutionpathvalue: location.state.solutionpathvalue, solutionpath: location.state.solutionpath, faultDesc: location.state.faultdesc, ai: location.state.ai, altFaultCode: location.state.altFaultCode, complaintDesc: location.state.complaintDesc } }) }}><LayersIcon />BOM</IconButton>}
                            </div>

                            {/* ___________________Info____________ */}


                            {location.state.solutionpathvalue.Info.length != 0 && location.state.solutionpathvalue.Info.map((elem, ids) => {
                                // console.log(elem?.Resolution.length, ids)
                                return (<>
                                    {ids != 0 && <Typography className='continues-txt'><ArrowDownwardIcon sx={{ color: "#56a9fc" }} />Continues...</Typography>}
                                    <CardData Resolution={elem?.Resolution} ids={ids} info={true} searchedval={searchdata} pathName={location.state.solutionpath} ai={location.state.ai} />
                                </>
                                )
                            })}

                            {/* ___________________Step____________ */}


                            {
                                location.state.solutionpathvalue.steps.length != 0 &&
                                location.state.solutionpathvalue.steps.map((elem, ids) => {
                                    return (
                                        <>

                                            <h2 className='border'>{elem.Step_name}</h2>

                                            <CardData Resolution={elem?.Resolution} ids={elem.Step_name.split(':')[1]} steps={true} searchedval={searchdata} pathName={location.state.solutionpath} ai={location.state.ai} />
                                            {/* ___________________sub-Step____________ */}
                                            {
                                                elem.substeps.length != 0 &&
                                                elem.substeps.map((elements, id) => {
                                                    return (<>
                                                        <Typography className='continues-txt'><ArrowDownwardIcon sx={{ color: "#56a9fc" }} />Continues...</Typography>
                                                        <CardData Resolution={elements?.Resolution} ids={id} stepsIndex={ids} substeps={true} searchedval={searchdata} pathName={location.state.solutionpath} ai={location.state.ai} />

                                                    </>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                })
                            }
                        </CardContent></Card>

                </Box>
            </Container>
        </Layout></>
    )
}
export default Viewresult;
