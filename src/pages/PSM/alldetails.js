import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout';
import { Container } from '@mui/system';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Card, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
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
import note from '../../assets/note.svg';
import bulb from '../../assets/bulb.svg';

import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import man from '../../assets/man.png';
import PersonIcon from '@mui/icons-material/Person';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BlockIcon from '@mui/icons-material/Block';
import settings from '../../assets/settings.png';
import InputLabel from '@mui/material/InputLabel';
import men from '../../assets/men.png';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import axios from "axios";
import { Oval } from 'react-loader-spinner'
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PopupState, { bindToggle, bindPopper, bindTrigger, bindMenu } from 'material-ui-popup-state';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import { makeStyles } from '@mui/styles';
import Menu from '@mui/material/Menu'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
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
  indicators: false,
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
const style1 = {
  position: 'absolute',
  top: '50%',
  left: '80%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  //border: '2px solid #000',
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
const useMenuStyles = makeStyles({
  paper: {
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  },
  list: {
    outline: 0
  }
});
function Alldetails() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [ratingopened, ratingOpen] = React.useState(false);

  const [reasonopen, setReasonopen] = React.useState(false);
  const [loader, setloader] = React.useState(false);
  const [warrentyStatus, setwarrentyStatus] = React.useState([]);
  const [skilllevel, setskilllevel] = React.useState('');
  const navigate = useNavigate();

  // const modelClose = () => { setmodelopen(false) }





  const handleOpen = () => {
    setOpen(true);



  }


  const handleChangeskilllevel = (event) => {
    setskilllevel(event.target.value);

  };

  const handleClose = () => setOpen(false);
  const [feedback, setfeedback] = React.useState([]);
  const [RegDate, setRegDate] = React.useState([]);
  const [ResolvedDate, setResolvedDate] = React.useState([]);
  const ratingmodOpen = (cid) => {
    ratingOpen(true);
    try {
      axios({
        method: 'get',
        url: `https://${backEndDomain}/webapi/webuserInput/Feedback?cid=${cid}&TenantId=${localStorage.getItem('TenantId')}`,
        //data: Data,
        headers: {
          'Content-type': 'application/json',
          'token': jwt,
        }
      })
        .then(function (response) {

          setfeedback(response.data.data)
          var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          var reg = new Date(response.data.data.RegDate);
          const RegDated = reg.getDate() + " " + months[reg.getMonth()] + " " + reg.getFullYear()
          setRegDate(RegDated)
          var res = new Date(response.data.data.ResolvedDate);
          const ResolvedDated = res.getDate() + " " + months[res.getMonth()] + " " + res.getFullYear()
          setResolvedDate(ResolvedDated)
        }).catch(function (response) {
          //   if(response.response.status == 422){
          //  // console.log(response.response.status);
          //   }
        });
    } catch (err) {
      console.log(err);

    }
  }
  const ratingClose = () => ratingOpen(false);

  const handlereasonopen = () => setReasonopen(true);
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
  const [Assignedon, setAssignedon] = React.useState([]);
  const [Registeredon, setRegisteredon] = React.useState([]);
  const [closedon, setclosedon] = React.useState([]);
  const [Resolvedon, setResolvedon] = React.useState([]);
  const [Declinedon, setdecline] = React.useState([]);
  const [Acceptedon, setAcceptedon] = React.useState([]);
  const [Reason, setreason] = React.useState([]);
  const [audiopath, setaudiopath] = React.useState();
  const [videopathlink, setvideopath] = React.useState();
  const [attachmentdetailsvideo, setattachmentdetailsvideo] = React.useState([]);
  const [attachmentdetailsaudio, setattachmentdetailsaudio] = React.useState([]);
  const [attachmentdetailsimg, setattachmentdetailsimg] = React.useState([]);
  const [videopath, setVideopath] = React.useState('');




  const reasonClose = () => { setReasonopen(false) }

  const reasondecline = () => {
    setReasonopen(true)
  }
  useEffect(() => {
    setloader(true)

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
          console.log('sr', response.data.data.attachmentdetails)
          setassignmentdetails(response.data.data.assignmentdetails)
          setattachmentdetails(response.data.data.attachmentdetails)
          setcustomerdetails(response.data.data.customerdetails)
          setequipmentdetails(response.data.data.equipmentdetails)
          setmachinelocationdetails(response.data.data.machinelocationdetails)
          setservicedetails(response.data.data.servicedetails)
          setsiteoperatordetails(response.data.data.siteoperatordetails)
          setusertypedata(response.data.data.usertypedata)
          setreason(response.data.data.datedetails.Reason)
          setVideopath(response.data.data.attachmentdetails.VideoPath)
          // setvideopath(response.data.data.attachmentdetails.VideoPath)
          //console.log(response.data.data.assignmentdetails.Assignedon.toLocaleDateString())
          //const assignon = new Date(response.data.data.assignmentdetails.Assignedon).toString().split(" ")

          //  console.log(assignon,new Date(response.data.data.assignmentdetails.Assignedon).getHours(),new Date(response.data.data.assignmentdetails.Assignedon).getMinutes() )

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

          var re = new Date(response.data.data.datedetails.Resolvedon);
          var hr = re.getHours();
          var min = re.getMinutes();
          if (min < 10) {
            min = "0" + min;
          }
          var ampm = "AM";
          if (hr > 12) {
            hr -= 12;
            ampm = "PM";
          }

          const Resolveon = re.getDate() + "th" + " " + months[re.getMonth()] + "," + re.getFullYear() + " " + "|" + " " + re.getHours() + "." + min + " " + ampm
          setResolvedon(Resolveon)
          var r = new Date(response.data.data.datedetails.Registeredon);
          const regon = r.getDate() + "th" + " " + months[r.getMonth()] + "," + " " + r.getFullYear()
          setRegisteredon(regon)
          var a = new Date(response.data.data.datedetails.Acceptedon);
          var hr = a.getHours();
          var min = a.getMinutes();
          if (min < 10) {
            min = "0" + min;
          }
          var ampm = "AM";
          if (hr > 12) {
            hr -= 12;
            ampm = "PM";
          }
          const accept = a.getDate() + "th" + " " + months[a.getMonth()] + "," + a.getFullYear() + " " + "|" + " " + a.getHours() + "." + min + " " + ampm
          setAcceptedon(accept)
          var c = new Date(response.data.data.datedetails.Closedon);
          var hr = c.getHours();
          var min = c.getMinutes();
          if (min < 10) {
            min = "0" + min;
          }
          var ampm = "AM";
          if (hr > 12) {
            hr -= 12;
            ampm = "PM";
          }
          const closeon = c.getDate() + "th" + " " + months[c.getMonth()] + "," + c.getFullYear() + " " + "|" + " " + c.getHours() + "." + min + " " + ampm
          setclosedon(closeon)
          // console.log(closeon)
          var dl = new Date(response.data.data.datedetails.Declinedon);

          const decline = dl.getDate() + "th" + " " + months[dl.getMonth()] + "," + dl.getFullYear()
          setdecline(decline)
          setloader(false)

        }).catch(function (response) {
          //   if(response.response.status == 422){
          //  // console.log(response.response.status);
          //   }
        });
    } catch (err) {
      console.log(err);

    }
    try {
      axios({
        method: 'get',
        url: `https://${backEndDomain}/webapi/webuserInput/webwarrentyStatus`,
        headers: {
          'Content-type': 'application/json',
          'token': jwt,
        }
      })
        .then(function (response) {
          // console.log(response.data.warrentyStatus)
          setwarrentyStatus(response.data.warrentyStatus)

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
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const musicTracks = attachmentdetails.Audiopath

    // const musicTracks = [
    //   {
    //     name: "Sample audio.mp3",
    //     src: "https://mobilebgmringtones.com/wp-content/uploads/2022/05/Once-Upon-a-Time-Ringtone.mp3"
    //   },
    //   {
    //     name: "Creative Minds",
    //     src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
    //   },
    //   {
    //     name: "Acoustic Breeze",
    //     src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
    //   },
    //   {
    //     name: "Sunny",
    //     src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
    //   },
    //   {
    //     name: "Tenderness",
    //     src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
    //   },
    //   {
    //     name: "Once Again",
    //     src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3"
    //   },
    //   {
    //     name: "Sweet",
    //     src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3"
    //   },
    //   {
    //     name: "Love",
    //     src: "https://www.bensound.com/bensound-music/bensound-love.mp3"
    //   },
    //   {
    //     name: "Piano Moment",
    //     src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"
    //   },
    //   {
    //     name: "E.R.F",
    //     src: "https://www.bensound.com/bensound-music/bensound-erf.mp3"
    //   },
    //   {
    //     name: "Dreams",
    //     src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
    //   },
    //   {
    //     name: "A Day To Remember",
    //     src:
    //       "https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music"
    //   },
    //   {
    //     name: "Adventure",
    //     src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3"
    //   },
    //   {
    //     name: "Photo Album",
    //     src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3"
    //   },
    //   {
    //     name: "November",
    //     src: "https://www.bensound.com/bensound-music/bensound-november.mp3"
    //   }
    // ];

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
          src: videopath.length !== 0 ? videopath[0] : '',
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
                    {/* <img src={sam} onClick={imagePlayeropen}></img><Typography className='img-name'>road... .jpg</Typography> */}
                  </div>


                  : <div className='no-data'>No Data Available</div>}
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
            <Plyr source={videoSrc} />
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
            {/* <audio controls>
          <source src={attachmentdetails.Audiopath} type="audio/mpeg"></source>
</audio> */}
            {/* <AudioPlayer
          autoPlay
          src="https://mobilebgmringtones.com/wp-content/uploads/2022/05/Once-Upon-a-Time-Ringtone.mp3"
          onPlay={e => console.log("onPlay")}
          // other props here
        /> */}
            {/* {attachmentdetails.Audiopath ?   <> 
        {attachmentdetails.Audiopath.map((value, key) => (
          <audio controls>
          <source src={value} type="audio/mpeg"></source>
</audio>
        ))}
</>
  :""} */}
            {attachmentdetails.Audiopath ?
              <AudioPlayer
                className='audio-p'
                // style={{ width: "300px" }}
                // style={{ borderRadius: "1rem" }}
                autoPlay
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
              /> : ""}
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

  const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <h5>i</h5>
      </div>
    );
  };
  const HoverText = () => {
    return (

      <Box sx={style1}>
        <Typography className='fo-reason' >
          Reason
        </Typography><br />
        <Typography className='fo-reason1'>
          {/* Display the declined reason which was made by CSE */}
          {Reason}
        </Typography>
      </Box>
    );
  };
  const [isHovering, setIsHovering] = React.useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const Assignmodal = () => {
    const [Wstatus, setWstatus] = React.useState('');
    const [employeeData, setemployeeData] = React.useState([]);
    const [employeeSkillLevel, setemployeeSkillLevel] = React.useState([]);
    const [paper, setpaper] = React.useState(false);
    const [searchvalue, setsearchvalue] = React.useState('');

    const handleChangeWStatus = (event) => {
      setWstatus(event.target.value);

    };

    const handleSearch = (event) => {
      setsearchvalue(event.target.value)
      let employeeDetail = {
        "employeeDetail": event.target.value
      }
      try {
        axios({
          method: 'post',
          url: `https://${backEndDomain}/webapi/webuserInput/webemployeeDetail`,
          data: employeeDetail,
          headers: {
            'Content-type': 'application/json',
            'token': jwt,
          }
        })
          .then(function (response) {

            if (response.data.employeeData.length > 0) {
              setemployeeData(response.data.employeeData)
              setpaper(true)
            } else {
              setpaper(false)
            }

          }).catch(function (response) {
            //   if(response.response.status == 422){
            //  // console.log(response.response.status);
            //   }
          });
      } catch (err) {
        console.log(err);

      }


    }
    const chooseitem = (val, value) => {
      setsearchvalue(val)
      setpaper(false)

      try {
        axios({
          method: 'get',
          url: `https://${backEndDomain}/webapi/webuserInput/webskillLevel?employeeid=${value.userid}`,
          headers: {
            'Content-type': 'application/json',
            'token': jwt,
          }
        })
          .then(function (response) {

            setemployeeSkillLevel(response.data.skilldata)


          }).catch(function (response) {
            //   if(response.response.status == 422){
            //  // console.log(response.response.status);
            //   }
          });
      } catch (err) {
        console.log(err);

      }
    }
    const assignfun = () => {
      let assign = {
        "warrentyStatus": Wstatus,
        "employeeDetail": searchvalue,
        "skillLevel": employeeSkillLevel.SkillsDescription,
        "CreatedBy": "admin",
        "ModifiedBy": "admin",
        "requestId": location.state.cid,
        "tenantId": localStorage.getItem('TenantId')
      }
      try {
        axios({
          method: 'post',
          url: `https://${backEndDomain}/webapi/webuserInput/webassign`,
          data: assign,
          headers: {
            'Content-type': 'application/json',
            'token': jwt,
          }
        })
          .then(function (response) {
            if (response.data.message == "Complaint Assigned Successfully") {
              handleClose()
            }


          }).catch(function (response) {
            //   if(response.response.status == 422){
            //  // console.log(response.response.status);
            //   }
          });
      } catch (err) {
        console.log(err);

      }
    }
    return (<>
      <Modal className="assign"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <CloseIcon className="actnSvg" onClick={handleClose}/> */}
          <CloseIcon className="actnSvg" onClick={handleClose} />
          <Box className='pp-content'>
            <img className='pp-img' src={man}></img>
          </Box>
          <Typography className='main-title' variant="h5" component="div" >
            Allocation
          </Typography>
          <Typography className='title-hlp' variant="h6" component="div">
            Complaint ID :{location.state.cid}
          </Typography>
          <Box>
            {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">Warranty Status</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Wstatus}
          onChange={handleChangeWStatus}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl> */}
            <FormControl fullWidth sx={{ mb: 1 }}>




              <InputLabel>Warranty Status</InputLabel>
              <Select
                value={Wstatus}
                onChange={handleChangeWStatus}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {/* <MenuItem value="">
                                  Warranty Status
                                  </MenuItem> */}
                {warrentyStatus.map((value, key) => (
                  <MenuItem value={value.StatusDescription}>{value.StatusDescription}</MenuItem>


                ))}
              </Select>
            </FormControl>

            <InputLabel htmlFor="anrede">Employee Name</InputLabel>
            <FormControl className='filter-show-case1'>

              <TextField
                fullWidth
                // label="Employee Name"
                name="Employee Name"
                value={searchvalue}
                onChange={(event) => handleSearch(event)}
                autoCorrect='off'
                autoComplete='off'
                autoFocus="autofocus"
                placeholder='Type here'
              />
              {paper &&

                <Paper elevation={3} >
                  {employeeData.map((value, key) => (
                    <MenuItem value={value.username} onClick={() => chooseitem(value.username, value)}>{value.username}</MenuItem>


                  ))}

                </Paper>

              }

            </FormControl>

            <InputLabel htmlFor="anrede">Employee Skill Level</InputLabel>

            <FormControl className='filter-show-case1'>
              <TextField
                fullWidth
                value={employeeSkillLevel.SkillsDescription}
                autoCorrect='off'
                autoComplete='off'
                placeholder='Employee Skill Level'
              />
              {/* <Select
                                  value={skilllevel}
                                  onChange={handleChangeskilllevel}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                                >
                                  <MenuItem value="">
                                  Employee Skill Level
                                  </MenuItem>
                                  {employeeSkillLevel.map((value, key) => (
                         <MenuItem value={value.SkillsLevelDesc}>{value.SkillsLevelDesc}</MenuItem>


        ))}
                                </Select> */}
            </FormControl>
          </Box>
          <Button className='assignbtn' variant="contained" onClick={assignfun}>Assign</Button>

        </Box>
      </Modal>
    </>)
  }
  return (
    <>
      <Layout>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
            <Box className="top-rack md">
              <Box className="fo-left">
                <img src={note} className="actnSvg"></img>
                {/* <NoteAltIcon className="actnSvg"/> */}
                <Box className="content">
                  <p>Registered On : {Registeredon}</p>
                  {/* <p>Registered On : 11th May, 2022</p> */}
                  <h3>Complaint ID : {location.state.cid}</h3>
                </Box>
              </Box>

              <Box className='fo-right'>
                <Box className='btn-flx'>
                  <Button variant="contained" className='btn-secondary' onClick={() => { navigate('/knowledgeBase', { state: { cid: location.state.cid, name: "psm", id: location.state.id ? location.state.id : '' } }) }} startIcon={<img src={bulb} ></img>}>Find Solution</Button>
                  {location.state.id == "todayscomplaints" && <Button className='assign' variant="contained" startIcon={<PersonAddAltOutlinedIcon />} sx={{ mr: 2, textTransform: "capitalize" }} onClick={handleOpen}>Assign</Button>}
                  {location.state.id == "InProgress" && <Button className='inprogrss-btn' size="large" sx={{ mr: 2 }}>In Progress</Button>}
                  {location.state.id == "Overdue" && <Button className='mttr-btn' size="large" >MTTR Overdue</Button>}
                  {location.state.id == "Closed" && <Button variant="contained" sx={{ mr: 2 }} onClick={() => ratingmodOpen(location.state.cid)}><StarBorderIcon />View Rating</Button>}
                  {location.state.id == "Yet to accept" && <Button variant="contained" startIcon={<PersonAddAltOutlinedIcon />} sx={{ mr: 2 }} onClick={handleOpen}>Re-Assign</Button>}
                  {location.state.id == "Declined" && <Button variant="contained" startIcon={<PersonAddAltOutlinedIcon />} sx={{ mr: 2 }} onClick={handleOpen}>Re-Assign</Button>}

                </Box>
              </Box>
            </Box>

            <Box className='top-details'>
              {location.state.id == "Yet to accept" &&

                <Box className="fo-details">

                  <Box className="content">
                    <DateRangeIcon className='primary' />
                    <Box>
                      <p>Assigned on</p>
                      {/* <h4>12th May,2022  |  19.00 PM </h4>   */}
                      <h4>{Assignedon} </h4>


                    </Box>
                  </Box>

                  <Box className="content">
                    <PersonIcon className='yellow' />
                    <Box>
                      <p>Assigned to</p>
                      <h4>{assignmentdetails.Assignedto}</h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <ReportGmailerrorredRoundedIcon className='accept' />
                    <Box>
                      <h4>Yet to accept!</h4>
                    </Box>
                  </Box>
                </Box>



              }

              {location.state.id == "Declined" &&


                <Box className="fo-details">

                  <Box className="content">
                    <DateRangeIcon className='primary' />
                    <Box>
                      <p>Assigned on</p>
                      <h4>{Assignedon} </h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <PersonIcon className='yellow' />
                    <Box>
                      <p>Assigned to</p>
                      <h4>{assignmentdetails.Assignedto}</h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <BlockIcon className='red' />
                    <Box>
                      <p>Declined to</p>
                      <h4>{Declinedon}  </h4>
                    </Box>
                    {/* <h5  onMouseOver={reasondecline} onMouseOut={reasonClose}>i</h5> */}

                    <HoverableDiv
                      handleMouseOver={handleMouseOver}
                      handleMouseOut={handleMouseOut}
                    />
                    {isHovering && <HoverText />}
                  </Box>


                </Box>}

              {location.state.id == "Waiting for feedback" &&


                <Box className="fo-details">

                  <Box className="content">
                    <DateRangeIcon className='primary' />
                    <Box>
                      <p>Assigned on</p>
                      <h4>{Assignedon} </h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <PersonIcon className='yellow' />
                    <Box>
                      <p>Assigned to</p>
                      <h4>{assignmentdetails.Assignedto}</h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <DateRangeIcon className='primary' />
                    <Box>
                      <p>Resolved on</p>
                      <h4>{Resolvedon} </h4>
                    </Box>
                  </Box>


                  <Box className="content">
                    <FormatQuoteOutlinedIcon className='green' /> <h4>Waiting for feedback</h4>
                  </Box>



                </Box>

              }

              {location.state.id == "Accepted" &&
                <Box className="fo-details">

                  <Box className="content">
                    <DateRangeIcon className='primary' />
                    <Box>
                      <p>Assigned on</p>
                      <h4>{Assignedon} </h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <PersonIcon className='yellow' />
                    <Box>
                      <p>Assigned to</p>
                      <h4>{assignmentdetails.Assignedto}</h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <CheckCircleOutlineIcon className='green' />
                    <Box>
                      <p>Accepted on</p>
                      <h4>{Acceptedon}</h4>
                    </Box>

                  </Box>


                </Box>}

              {location.state.id == "InProgress" &&

                <Box className="fo-details">

                  <Box className="content">
                    <DateRangeIcon className='primary' />
                    <Box>
                      <p>Assigned on</p>
                      <h4>{Assignedon} </h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <PersonIcon className='yellow' />
                    <Box>
                      <p>Assigned to</p>
                      <h4>{assignmentdetails.Assignedto}</h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <CheckCircleOutlineIcon className='green' />
                    <Box>
                      <p>Accepted on</p>
                      <h4>{Acceptedon}</h4>
                    </Box>

                  </Box>


                </Box>

              }

              {location.state.id == "Overdue" &&

                <Box className="fo-details">

                  <Box className="content">
                    <DateRangeIcon className='primary' />
                    <Box>
                      <p>Assigned on</p>
                      <h4>{Assignedon} </h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <PersonIcon className='yellow' />
                    <Box>
                      <p>Assigned to</p>
                      <h4>{assignmentdetails.Assignedto}</h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <CheckCircleOutlineIcon className='green' />
                    <Box>
                      <p>Accepted on</p>
                      <h4>{Acceptedon} </h4>
                    </Box>

                  </Box>


                </Box>

              }

              {location.state.id == "Closed" &&

                <Box className="fo-details">

                  <Box className="content">
                    <DateRangeIcon className='primary' />
                    <Box>
                      <p>Assigned on</p>
                      <h4>{Assignedon} </h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <PersonIcon className='yellow' />
                    <Box>
                      <p>Assigned to</p>
                      <h4>{assignmentdetails.Assignedto}</h4>
                    </Box>
                  </Box>

                  <Box className="content">
                    <CheckIcon className='green' />
                    <Box>
                      <p>Closed on</p>
                      <h4>{closedon}</h4>
                    </Box>

                  </Box>


                </Box>

              }


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
                        {/* <h2>Ada Lovelace</h2>  
                        <h2>8986465674</h2>   */}
                        <h2>{customerdetails.ContactName}</h2>
                        <h2>{customerdetails.ContactNo}</h2>
                      </Box>
                    </Box>
                    <Box className="fo-right">
                      <img src={profile}></img>
                      <Box className="content">
                        <p>Site Contact Name & Mobile</p>
                        {/* <h2>Rony</h2>  
                        <h2>8986465674</h2>   */}
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
                        {/* CAT 320D KGF02374 MH 37 KS 9022*/}
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
                      <Typography className='detail-text'>{equipmentdetails.PreviousSMU}</Typography>
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
                        <Typography style={{ textTransform: 'capitalize' }} className='detail-text'>{machinelocationdetails.Address},&nbsp;{machinelocationdetails.City},&nbsp;{machinelocationdetails.District},&nbsp;{machinelocationdetails.State},&nbsp;{machinelocationdetails.ZipCode}</Typography>
                        {/* Post Box no 35, Bhubeneshwar - 750199, India */}
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
                        <Typography className='detail-text'>{servicedetails.WarrantyStatus}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Attachmentsfunction />

          </div>
        </Container>
        {/* ____________________Assign modal____________ */}

        <Assignmodal />


        {/* ___________________ reason for decline modal___________________ */}
        <Modal
          open={reasonopen}
          onClose={reasonClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography className='fo-reason' >
              Reason 1
            </Typography><br />
            <Typography className='fo-reason1'>
              Display the declined reason which was made by CSE
            </Typography>
          </Box>
        </Modal>

        {/* __________________Rating modal for Closed item _________________  */}
        <Modal className='rating-modal'
          open={ratingopened}
          onClose={ratingClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className='rating-modal'>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Feedback <CloseIcon onClick={ratingClose} sx={{ marginLeft: 95 }} />
            </Typography>

            <Box className='rcontent'>

              {/* {sam} */}
              <Box className='profile-av-holder'>
                <Avatar alt="Remy Sharp" src={feedback.serviceEngineerImg} className="profile-avatar" />
                <Typography gutterBottom variant="h5" component="div" className="profile-title">{feedback.serviceEngineer}</Typography>
                <Typography gutterBottom variant="subtitle2" component="div">Jr Service Engineer</Typography>

              </Box>

              <Box className='text-section'>

                <box className='top'>
                  <Typography component="div">Reg Date : <strong>{RegDate}</strong></Typography>
                  <Typography component="div" sx={{ ml: 3 }}>Resolved Date : <strong>{ResolvedDate}</strong></Typography>
                </box>

                <box className='crd-flx'>
                  <Card>
                    <CardContent> <img src={settings}></img>
                      <Box>
                        <Typography component="div">Rate the Experience</Typography>
                        <Rating name="read-only" value={feedback.RatetheExperience} readOnly />
                      </Box>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent><img src={men}></img>
                      <Box>
                        <Typography component="div">Rate the Engineer</Typography>
                        <Rating name="read-only" value={feedback.RatetheEngineer} readOnly />
                      </Box>
                    </CardContent>
                  </Card>
                </box>
                <Typography sx={{ mt: 3, mb: 1 }}>Comments</Typography>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Type you comments here"
                  style={{ width: 200 }}
                />
              </Box>
            </Box>
          </Box>
        </Modal>
      </Layout>
    </>
  )
}

export default Alldetails;





