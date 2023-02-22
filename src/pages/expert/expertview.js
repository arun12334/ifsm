import React, { useState, useEffect } from 'react'
import Explayout from '../../components/expert/explayout';
import { Container } from '@mui/system';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Card, Grid, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import profile from '../../assets/profile-info.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CheckIcon from '@mui/icons-material/Check';
import Avatar from '@mui/material/Avatar';
import sam from '../../assets/sam.png';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import man from '../../assets/man.png';
import note from '../../assets/note.svg';
import bulb from '../../assets/bulb.svg';
import PersonIcon from '@mui/icons-material/Person';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import settings from '../../assets/settings.png';
import men from '../../assets/men.png';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import { styled } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import DoneIcon from '@mui/icons-material/Done';
import LockIcon from '@mui/icons-material/Lock';
import GridViewIcon from '@mui/icons-material/GridView';
import { FamilyRestroomTwoTone } from '@mui/icons-material';
import axios from "axios";
import { Oval } from 'react-loader-spinner'
import SearchIcon from '@mui/icons-material/Search';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import * as Icon from 'react-bootstrap-icons';
import { backEndDomain } from '../../service/apiserver';

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const feature_slide = {
  autoplay: false,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  indicators: FamilyRestroomTwoTone,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        indicators: false,
        speed: 3000
      }
    },

  ]
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const steps = [
  'Open',
  'Attended',
  'Resolved',
  'Closed'
];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};
function Expertview() {
  const location = useLocation();
  const navigate = useNavigate();

  const [value1, setValue1] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const jwt = localStorage.getItem('UserToken')
  const [detailsdata, setdetailsdata] = React.useState({});
  const [assignmentdetails, setassignmentdetails] = React.useState({});
  const [attachmentdetails, setattachmentdetails] = React.useState({});
  const [customerdetails, setcustomerdetails] = React.useState({});
  const [equipmentdetails, setequipmentdetails] = React.useState({});
  const [machinelocationdetails, setmachinelocationdetails] = React.useState({});
  const [servicedetails, setservicedetails] = React.useState({});
  const [siteoperatordetails, setsiteoperatordetails] = React.useState({});
  const [usertypedata, setusertypedata] = React.useState({});
  const [IssueDiagnoseddetails, setIssueDiagnoseddetails] = React.useState({});
  const [Actiontakendetails, setActiontakendetails] = React.useState({});

  const [Attendedon, setAttendedon] = React.useState([]);
  const [workcompletedOn, setworkcompletedOn] = React.useState([]);
  const [Registeredon, setRegisteredon] = React.useState([]);
  const [closedon, setclosedon] = React.useState([]);
  const [loader, setloader] = React.useState(false);
  const [Assignedon, setAssignedon] = React.useState([]);
  const [audiopath, setaudiopath] = React.useState();
  const [videopathlink, setvideopath] = React.useState();
  const [statusdetails, setstatusdetails] = React.useState();
  const [attachmentdetailsvideo, setattachmentdetailsvideo] = React.useState([]);
  const [attachmentdetailsaudio, setattachmentdetailsaudio] = React.useState([]);
  const [attachmentdetailsimg, setattachmentdetailsimg] = React.useState([]);

  useEffect(() => {
    //fetch(`http://buildingsAPI:111/api/buildings/?myparam1=${abc_energyprogramid}`)
    setloader(true)
    let Data = {
      "cid": "R06",// localStorage.getItem('Login'),
      "TenantId": "GAINWELL_01"//localStorage.getItem('TenantId')

    }
    try {
      axios({
        method: 'get',
        url: `https://${backEndDomain}/webapi/webexpert/viewcomplaints?cid=${location.state.cid}&TenantId=${localStorage.getItem('TenantId')}`,
        //data: Data,
        headers: {
          'Content-type': 'application/json',
          'token': jwt,
        }
      })
        .then(function (response) {
          console.log(response, response.data.data)
          setassignmentdetails(response.data.data.assignmentdetails)
          setattachmentdetails(response.data.data.attachmentdetails)
          setcustomerdetails(response.data.data.customerdetails)
          setequipmentdetails(response.data.data.equipmentdetails)
          setmachinelocationdetails(response.data.data.machinelocationdetails)
          setservicedetails(response.data.data.servicedetails)
          setsiteoperatordetails(response.data.data.siteoperatordetails)
          setusertypedata(response.data.data.usertypedata)
          setIssueDiagnoseddetails(response.data.data.IssueDiagnoseddeatils)
          setActiontakendetails(response.data.data.Actiondetails)
          if (response.data.data.statusdetails.statusdescription == "Registered") {
            setstatusdetails(0)

          } else if (response.data.data.statusdetails.statusdescription == "Accepted") {
            setstatusdetails(1)

          } else if (response.data.data.statusdetails.statusdescription == "Job Initiated") {
            setstatusdetails(1)

          } else {
            setstatusdetails(0)

          }
          // setaudiopath(response.data.data.attachmentdetails.Audiopath[0].split("/")[3].split("?")[0])
          // setvideopath(response.data.data.attachmentdetails.VideoPath[0].split("/")[3].split("?")[0])
          setattachmentdetailsvideo(response.data.data.attachmentdetails.VideoPath)
          setattachmentdetailsaudio(response.data.data.attachmentdetails.Audiopath)
          setattachmentdetailsimg(response.data.data.attachmentdetails.ImgPath)
          var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          var d = new Date(response.data.data.datedetails.Assignedon);
          var hr = d.getHours();
          var min = d.getMinutes();
          if (min < 10) {
            min = "0" + min;
          }
          var ampm = "AM";
          if (hr > 12) {
            hr -= 12;
            ampm = "PM";
          }

          const assignon = d.getDate() + "th" + " " + months[d.getMonth()] + "," + d.getFullYear() + " " + "|" + " " + d.getHours() + "." + min + " " + ampm
          setAssignedon(assignon)
          var a = new Date(response.data.data.servicedetails.Attendedon);
          //9th may 2022
          const attendon = a.getDate() + "th" + " " + months[a.getMonth()] + " " + a.getFullYear()
          setAttendedon(attendon)
          var w = new Date(response.data.data.servicedetails.workcompletedOn);

          const workcomplete = w.getDate() + "th" + " " + months[w.getMonth()] + " " + w.getFullYear()
          console.log(workcomplete)
          setworkcompletedOn(workcomplete)
          var r = new Date(response.data.data.datedetails.Registeredon);
          // 11th May, 2022
          const regon = r.getDate() + "th" + " " + months[r.getMonth()] + "," + " " + r.getFullYear()
          setRegisteredon(regon)


          setloader(false)

        }).catch(function (response) {
          //   if(response.response.status == 422){
          //  // console.log(response.response.status);
          //   }
        });
    } catch (err) {
      console.log(err);

    }

  }, [])


  const Attachmentsfunction = () => {
    const [value, setValue] = React.useState(0);
    const [musicopen, setMusicopen] = React.useState(false);
    const [videoopen, setVideoopen] = React.useState(false);
    const [imageopen, setImageopen] = React.useState(false);
    // const [videopath,setvideopath] = React.useState(attachmentdetails.VideoPath);
    //console.log(videopath)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    //   const [musicTracks,setmusicTracks] = React.useState(attachmentdetails.VideoPath);

    //   setTimeout(() => {
    //     setmusicTracks(attachmentdetails.Audiopath)
    //     console.log(musicTracks)

    //  }, 3000)
    const musicTracks = attachmentdetails.Audiopath

    const videopath = attachmentdetails.VideoPath

    const [trackIndex, setTrackIndex] = React.useState(0);
    const handleClickPrevious = () => {
      setTrackIndex((currentTrack) =>
        currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
      );
    };

    const handleClickNext = () => {
      setTrackIndex((currentTrack) =>
        currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
      );
    };

    const audioPlayeropen = () => { setMusicopen(true) }
    const videoPlayeropen = () => { setVideoopen(true) }
    const imagePlayeropen = () => { setImageopen(true) }



    const musicClose = () => { setMusicopen(false) }
    const videoClose = () => { setVideoopen(false) }
    const imageClose = () => { setImageopen(false) }

    const videoSrc = {
      type: "video",
      sources: [
        {
          src: videopath,
          // provider: "youtube"
        }
      ]
    };
    return (
      <>
        <Box className='detail-tab'>
          <Card>
            <CardContent>
              <Typography className='card-heading'>Attachments</Typography>

              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs aria-label="basic tabs example" variant="fullWidth" value={value} onChange={handleChange}>
                  <Tab label="Image" {...a11yProps(0)} />
                  <Tab label="Audio" {...a11yProps(1)} />
                  <Tab label="Video" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel index={0} value={value}>
                {attachmentdetailsimg.length > 0 ?
                  <div className="row">
                    {attachmentdetailsimg.map((value, key) => (
                      <div className="column">
                        <img src={value} className="tap-img" onClick={imagePlayeropen}></img>
                      </div>
                    ))}
                  </div>


                  : <div className='no-data'>No Data Available</div>}
                {/* <img src={sam} onClick={imagePlayeropen}></img><Typography className='img-name'>road... .jpg</Typography> */}

                {/* <div className="column">
     <img src={sam} onClick={imagePlayeropen}></img><Typography className='img-name'>road... .jpg</Typography>
</div> */}

                {/* <img src={sam} onClick={imagePlayeropen}></img><h5>road... .jpg</h5> */}
              </TabPanel>
              <TabPanel index={1} value={value}>
                {attachmentdetailsaudio.length > 0 ?
                  <Button onClick={audioPlayeropen} className="audio-btn">{attachmentdetailsaudio[0].split("/")[3].split("?")[0]}</Button>
                  : <div className='no-data'>No Data Available</div>}
              </TabPanel>
              <TabPanel index={2} value={value}>
                {attachmentdetailsvideo.length > 0 ?
                  <Button onClick={videoPlayeropen}>{attachmentdetailsvideo[0].split("/")[3].split("?")[0]}</Button>
                  : <div className='no-data'>No Data Available</div>}
              </TabPanel>

            </CardContent>
          </Card>
        </Box>
        {/* ____________________video player model____________ */}
        <Modal
          open={videoopen}
          onClose={videoClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style2}>
            <div className='close-btn-modal'>
              <Typography id="modal-modal-title1" variant="h6" component="h2">
                Preview Video
              </Typography><CloseIcon className='civ' onClick={videoClose} /></div>
            {attachmentdetails.VideoPath ? <Plyr src={videopath[trackIndex]} /> : ""}
            {/* <Plyr source={attachmentdetails.VideoPath}  type="video"/> */}
          </Box>
        </Modal>

        {/* ____________________music player model____________ */}
        <Modal
          open={musicopen}
          onClose={musicClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='close-btn-modal'>

              <Typography id="modal-modal-title1" variant="h6" component="h2">
                Preview Audio
              </Typography><CloseIcon className='civ' onClick={musicClose} />
            </div>
            {/* <audio controls>
          <source src="https://mobilebgmringtones.com/wp-content/uploads/2022/05/Once-Upon-a-Time-Ringtone.mp3" type="audio/mpeg"></source>
</audio> */}

            {/* {attachmentdetails.Audiopath ?   <> 
        {attachmentdetails.Audiopath.map((value, key) => (
          <audio controls>
          <source src={value} type="audio/mpeg"></source>
</audio>
        ))}
</>
  :""} */}

            {attachmentdetails.Audiopath ? <AudioPlayer
              className='audio-p'
              // style={{ width: "300px" }}
              // style={{ borderRadius: "1rem" }}
              //autoPlay
              // layout="horizontal"
              src={musicTracks[trackIndex]}
              onPlay={(e) => console.log(e, "onPlay")}
              showSkipControls={true}
              showJumpControls={false}
              //header={`${musicTracks[trackIndex].name}`}
              // footer="All music from: www.bensound.com"
              onClickPrevious={handleClickPrevious}
              onClickNext={handleClickNext}
              onEnded={handleClickNext}
            // other props here
            />
              : ""}
          </Box>
        </Modal>

        {/* ____________________view image model____________ */}
        <Modal
          open={imageopen}
          onClose={imageClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='close-btn-modal'>

              <Typography id="modal-modal-title1" variant="h6" component="h2">
                Preview Image
              </Typography> <CloseIcon className='civ' onClick={imageClose} />
            </div>

            {/* <Slide {...feature_slide}><img src={sam}></img><img src={sam}></img><img src={sam}></img> </Slide> */}
            {attachmentdetails.ImgPath ? <div className="slide-container">
              <Slide {...feature_slide} className="slide-bg">
                {attachmentdetails.ImgPath.map((value, key) => (
                  <div className="each-fade">
                    <img src={value}></img>
                  </div>
                ))}
                {/* <img src={sam}></img> */}
                {/* <Typography className='img-name'>Road with nice sunset.jpg</Typography> */}
                {/* <div className="each-fade">
        <img src={sam}></img>
        <Typography className='img-name'>Road with nice sunset.jpg</Typography>
        </div>
        <div className="each-fade">
        <img src={sam}></img>
        <Typography className='img-name'>Road with nice sunset.jpg</Typography>
        </div> */}
              </Slide>
            </div> : ""}
          </Box>
        </Modal>
      </>
    )
  }


  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#27b117',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#27b117',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',//#c2f5cd
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundColor: '#27b117',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundColor: '#27b117',
      // backgroundImage:
      //   'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <DoneIcon />,
      2: <DoneIcon />,
      3: <LockIcon />,
      4: <GridViewIcon />
    };

    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };
  //   const Complaintattachment=()=>{
  //     const [value, setValue] = React.useState(0);

  //     const handleChange = (event, newValue) => {
  //       setValue(newValue);
  //     };
  //     const videoSrc = {
  //       type: "video",
  //       sources: [
  //         {
  //           src: "LXb3EKWsInQ",
  //           provider: "youtube"
  //         }
  //       ]
  //     };
  //     const [musicopen, setMusicopen] = React.useState(false);
  //   const [videoopen, setVideoopen] = React.useState(false);
  //   const [imageopen, setImageopen] = React.useState(false);
  //     const audioPlayeropen = ()=> {setMusicopen(true)}
  //     const videoPlayeropen = ()=> {setVideoopen(true)}
  //     const imagePlayeropen = ()=> {setImageopen(true)}



  //      const musicClose = ()=> { setMusicopen(false) }
  //      const videoClose = ()=> { setVideoopen(false) }
  //      const imageClose = ()=> { setImageopen(false) }

  //     return(<>
  //           <Box className='detail-tab'>
  //           <Card>
  //             <CardContent>          
  //               <Typography className='card-heading'>Attachments</Typography>

  //               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //         <Tabs  aria-label="basic tabs example"  variant="fullWidth" value={value} onChange={handleChange}>
  //           <Tab label="Image" {...a11yProps(0)} />
  //           <Tab label="Audio" {...a11yProps(1)} />
  //           <Tab label="Video" {...a11yProps(2)} />
  //         </Tabs>
  //       </Box>
  //       <TabPanel  index={0} value={value}>
  //       <div className="row">
  //   <div className="column">
  //       <img src={sam} onClick={imagePlayeropen}></img><Typography className='img-name'>road... .jpg</Typography>
  //       </div>
  //       <div className="column">
  //       <img src={sam} onClick={imagePlayeropen}></img><Typography className='img-name'>road... .jpg</Typography>
  // </div></div>      </TabPanel>
  //       <TabPanel  index={1} value={value}>
  //       <Button onClick={audioPlayeropen} className="audio-btn">Once_Upon_a_Time.mp3</Button>
  //       </TabPanel>
  //       <TabPanel index={2} value={value}>
  //         <Button onClick={videoPlayeropen}>costarica4k.mp4</Button>
  //       </TabPanel>

  //             </CardContent>  
  //           </Card>
  //         </Box>
  //         {/* ____________________video player model____________ */}
  //       <Modal
  //         open={videoopen}
  //         onClose={videoClose}
  //         aria-labelledby="modal-modal-title"
  //         aria-describedby="modal-modal-description"
  //       >
  //         <Box sx={style}>
  //         <div className='close-btn-modal'>
  //           <Typography id="modal-modal-title1" variant="h6" component="h2">
  //             Big Buck Bunny 
  //           </Typography><CloseIcon className='civ' onClick={videoClose}/></div>
  //           <Plyr source={videoSrc} />
  //         </Box>
  //       </Modal>

  //       {/* ____________________music player model____________ */}
  //       <Modal
  //         open={musicopen}
  //         onClose={musicClose}
  //         aria-labelledby="modal-modal-title"
  //         aria-describedby="modal-modal-description"
  //       >
  //         <Box sx={style}>
  //         <div className='close-btn-modal'>

  //           <Typography id="modal-modal-title1" variant="h6" component="h2">
  //            Preview Audio 
  //           </Typography><CloseIcon className='civ' onClick={musicClose}/>
  //           </div>
  //           <audio controls>
  //           <source src="https://mobilebgmringtones.com/wp-content/uploads/2022/05/Once-Upon-a-Time-Ringtone.mp3" type="audio/mpeg"></source>
  // </audio>
  //         </Box>
  //       </Modal>

  //        {/* ____________________view image model____________ */}
  //        <Modal
  //         open={imageopen}
  //         onClose={imageClose}
  //         aria-labelledby="modal-modal-title"
  //         aria-describedby="modal-modal-description"
  //       >
  //         <Box sx={style}>
  //         <div className='close-btn-modal'>

  //           <Typography id="modal-modal-title1" variant="h6" component="h2">
  //           Preview Image  
  //           </Typography> <CloseIcon className='civ' onClick={imageClose}/>
  //           </div>
  //           <div className="slide-container">
  //       <Slide {...feature_slide} className="slide-bg">
  //         <div className="each-fade">
  //         <img src={sam}></img>
  //         <Typography className='img-name'>Road with nice sunset.jpg</Typography>
  //         </div>
  //         <div className="each-fade">
  //         <img src={sam}></img>
  //         <Typography className='img-name'>Road with nice sunset.jpg</Typography>
  //         </div>
  //         <div className="each-fade">
  //         <img src={sam}></img>
  //         <Typography className='img-name'>Road with nice sunset.jpg</Typography>
  //         </div>
  //       </Slide>
  //     </div>
  //           {/* <Slide {...feature_slide}><img src={sam}></img><img src={sam}></img><img src={sam}></img> </Slide> */}
  //         </Box>
  //       </Modal>  
  //     </>)
  //   }

  return (
    <>
      <Explayout>

        <Paper className='tb-pd' sx={{ mt: 4, }} >
          <div className={loader == true ? 'parentDisable' : ''} width="100%">

            {loader == true && <Oval
              height={80}
              width={80}
              color="#4b61ff"
              wrapperStyle={{
                position: 'absolute',
                top: '45%',
                left: '50%',
              }}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#2c79ff"
              strokeWidth={4}
              strokeWidthSecondary={4}

            />}
            <Tabs aria-label="basic tabs example" variant="fullWidth" value={value1} onChange={handleChange1} >
              <Tab label="Complaint Information" className='tab-btn' />
              <Tab label="Service Information" className='tab-btn' />

            </Tabs>
            <TabPanel index={0} value={value1}>
              <Box >

                <Box className='contact-info'>
                  <Card>
                    <CardContent>
                      <Box className="fo-left rack">
                        <Box className='fo-left'>
                          <img src={note} className="actnSvg"></img>

                          {/* <NoteAltIcon className="actnSvg"/> */}
                          <Box className="content">
                            <p>Registered On : {Registeredon}</p>
                            <h3>Complaint ID : {servicedetails.complaintid}</h3>
                          </Box>
                        </Box>
                        <Box>
                          <Button className='btn-secondary' variant="contained" onClick={() => { navigate('/knowledgeBase', { state: { cid: servicedetails.complaintid } }) }}><SearchIcon className="actnSvg1" />&nbsp; Find Solution
                          </Button>

                          {/* <Button variant="contained">Create Recommendation</Button> */}

                        </Box>
                      </Box>
                      <Box className='stepper'>
                        {/* <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}
                        <Stepper alternativeLabel activeStep={statusdetails} connector={<ColorlibConnector />}>
                          {steps.map((label) => (
                            <Step key={label}>
                              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                            </Step>
                          ))}
                        </Stepper>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>

              </Box>

              <Box className='contact-info'>
                <Card>
                  <CardContent>
                    <Typography className='card-heading'>Contact Information</Typography>
                    <Box className='fo-flx'>
                      <Box className="fo-left">
                        <img src={profile}></img>
                        <Box className="content">
                          <p>Customer Name & Mobile</p>
                          <h2>{customerdetails.ContactName}</h2>
                          <h2>{customerdetails.ContactNo}</h2>
                        </Box>
                      </Box>
                      <Box className="fo-right">
                        <img src={profile}></img>
                        <Box className="content">
                          <p>Site Contact Name & Mobile</p>
                          <h2>{siteoperatordetails.OperatorName}</h2>
                          <h2>{siteoperatordetails.operatorphone}</h2>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              <Box className='equipment-details'>
                <Card>
                  <CardContent>
                    <Typography className='card-heading'>Equipment Details</Typography>
                    <Box className='fo-flx'>
                      <Box className='show-detail'>
                        <Typography className='detail-label'>Make</Typography>
                        <Box className='show-case'>
                          <Typography className='detail-text'>{equipmentdetails.equipmentmake}</Typography>
                        </Box>
                      </Box>
                      <Box className='show-detail'>
                        <Typography className='detail-label'>Model</Typography>
                        <Box className='show-case'>
                          <Typography className='detail-text'>{equipmentdetails.equipmentmodel}</Typography>
                        </Box>
                      </Box>
                      <Box className='show-detail'>
                        <Typography className='detail-label'>Serial No.</Typography>
                        <Box className='show-case'>
                          <Typography className='detail-text'>{equipmentdetails.equipmentserialNo}</Typography>
                        </Box>
                      </Box>
                      {/* <Box className='show-detail'>
                    <Typography className='detail-label'>VID.No</Typography>
                    <Box className='show-case'>
                      <Typography className='detail-text'>MH 37 KS 9022</Typography>
                    </Box>
                  </Box> */}
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              <Box className='MAL'>
                <Card>
                  <CardContent>
                    <Typography className='card-heading'>Machine Available Location</Typography>
                    <Box className='fo-flx'>
                      <Box className='show-detail'>
                        <Typography className='detail-label'>Address</Typography>
                        <Box className='show-case'>
                          <Typography className='detail-text'>{machinelocationdetails.Address},&nbsp;{machinelocationdetails.City},&nbsp;{machinelocationdetails.State},&nbsp;{machinelocationdetails.ZipCode}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              <Box className='SI'>
                <Card>
                  <CardContent>
                    <Typography className='card-heading'>Service Info</Typography>
                    {/* <Typography className='sub-text'>Complaint type : Oil leakeage</Typography> */}
                    {/* <Box className='fo-flx'>
                  <Box className='show-detail'>
                    <Typography className='detail-label'>Complaint Detail</Typography>
                    <Box className='show-case'>
                      <Typography className='detail-text'>{servicedetails.Complaintdetails}</Typography>
                    </Box>
                  </Box>    
                  <Box className='show-detail'>
                    <Typography className='detail-label'>Additional Comments</Typography>
                    <Box className='show-case'>
                      <Typography className='detail-text'>{servicedetails.AdditionalComments}
                      </Typography>
                    </Box>
                  </Box>              
                </Box> */}
                    <Box className='fo-flx'>
                      <Box className='show-detail0'>
                        <Typography className='detail-label'>Complaint Detail</Typography>
                        <Box className='show-case'>
                          <Typography className='detail-text'>{servicedetails.Complaintdetails}</Typography>
                        </Box>
                      </Box>
                      <Box className='show-detail1'>
                        <Typography className='detail-label'>Warranty Status</Typography>
                        <Box className='show-case'>
                          <Typography className='detail-text'>{servicedetails.WarrantyStatus ? servicedetails.WarrantyStatus : ""}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <Attachmentsfunction />
            </TabPanel>
          </div>
        </Paper>

        {/* ____________________service inform____________ */}

        <TabPanel index={1} value={value1}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            <Box className="contact-info">

              <Box className='contact-info'>
                <Card>
                  <CardContent>
                    <Box className="fo-left rack">
                      <Box className='fo-left'>
                        <img src={note} className="actnSvg"></img>

                        {/* <NoteAltIcon className="actnSvg"/> */}
                        <Box className="content">
                          <p>Registered on : {Registeredon}</p>
                          <h3>Complaint ID : {servicedetails.complaintid}</h3>
                        </Box>
                      </Box>
                      {/* <Button className='fo-sep-button' variant="contained"><RemoveRedEye className="actnSvg1"/>View Recommendation</Button> */}
                      {/* <Button variant="contained">Create Recommendation</Button> */}
                      <Button className='btn-secondary' variant="contained" onClick={() => { navigate('/knowledgeBase', { state: { cid: servicedetails.complaintid } }) }}><SearchIcon className="actnSvg1" />&nbsp; Find Solution
                      </Button>

                    </Box>
                    <Box className='stepper'>
                      {/* <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}
                      <Stepper alternativeLabel activeStep={statusdetails} connector={<ColorlibConnector />}>
                        {steps.map((label) => (
                          <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    </Box>
                  </CardContent>
                </Card>
              </Box>

            </Box>

            <Box className='equipment-details'>
              <Card>
                <CardContent>
                  <Box className='fo-flx'>
                    <Box className='show-detail'>
                      <Typography className='detail-label'>Service Engineer</Typography>
                      <Box className='show-case'>
                        <Typography className='detail-text'>{servicedetails.serviceEngineer}</Typography>
                      </Box>
                    </Box>
                    <Box className='show-detail'>
                      <Typography className='detail-label'>Service Type</Typography>
                      <Box className='show-case'>
                        <Typography className='detail-text'>{servicedetails.servicetype}</Typography>
                      </Box>
                    </Box>
                    <Box className='show-detail'>
                      <Typography className='detail-label'>Attended on</Typography>
                      <Box className='show-case'>
                        <Typography className='detail-text'>{Attendedon}</Typography>
                      </Box>
                    </Box>
                    <Box className='show-detail'>
                      <Typography className='detail-label'>Work Completed on</Typography>
                      <Box className='show-case'>
                        <Typography className='detail-text'>{workcompletedOn}</Typography>
                      </Box>
                    </Box>
                    <Box className='show-detail'>
                      <Typography className='detail-label'>Type of complaint</Typography>
                      <Box className='show-case'>
                        <Typography className='detail-text'>{servicedetails.IssueDescription}</Typography>
                      </Box>
                    </Box>
                    <Box className='show-detail'>
                      <Typography className='detail-label'>SMU</Typography>
                      <Box className='show-case'>
                        <Typography className='detail-text'>{servicedetails.SMU}<a className='smu'>Hrs/Kms</a></Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box className='MAL'>
              <Card>
                <CardContent>
                  <Typography className='card-heading'>Issue Diagnosed</Typography>
                  <Box className='fo-flx'>
                    <Box className='show-detail'>
                      <Box className='show-case'>
                        <Typography className='detail-text'>{IssueDiagnoseddetails.IssueDiagnosed}</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Typography className='card-heading'>Action taken in steps</Typography>
                  <Box className='fo-flx'>
                    <Box className='show-detail'>
                      <Box className='show-case'>
                        <Typography className='detail-text'>{Actiontakendetails.Actiontakeninsteps}</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Typography className='card-heading'>SME Notes</Typography>
                  <Box className='fo-flx'>
                    <Box className='show-detail'>
                      <Box className='show-case'>
                        <Typography className='detail-text'>Sample notes goes here</Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Attachmentsfunction />
          </Container>
        </TabPanel>
      </Explayout>
    </>
  )
}

export default Expertview;




