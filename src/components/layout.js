import React, { useState, useEffect } from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ListItemIcon from '@mui/material/ListItemIcon';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Badge, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import CancelIcon from '@mui/icons-material/Cancel';
import Footer from './footer';
import Logo from './../assets/logo.png';
import Logo_icon from './../assets/logo_icon.png';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import userHeader from './../assets/user-header.jpg';
import { backEndDomain } from '../service/apiserver'
import { red } from '@mui/material/colors';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GridOnTwoToneIcon from '@mui/icons-material/GridOnTwoTone';

  
// import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import ListItem, { listItemClasses } from "@mui/material/ListItem";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import axios from "axios";




 
import Drawer from '@mui/material/Drawer';

import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PublicIcon from '@mui/icons-material/Public';
import DescriptionIcon from '@mui/icons-material/Description';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LaptopWindowsRoundedIcon from '@mui/icons-material/LaptopWindowsRounded';
import AnimationIcon from '@mui/icons-material/Animation';


 
 
 




function Layout({ children }) {
  const navigate = useNavigate();
  const [openlog, setlogOpen] = React.useState(false);
  const [activeclass, setClass] = React.useState('');
  const [select, setselect] = React.useState(false);
  const handleClose = () => setlogOpen(false);
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
  var selected = false;
  function MyNavLink(props) {
    return <NavLink {...props} activeClassName="active" />;
  }
  // const [profilepic, setprofilepic] = React.useState( );

  useEffect(() => {

    // try {
    //   axios({
    // if (['/knowledgeBase', '/bom', '/result', '/searchresult'].includes(window.location.pathname)) {
    //   console.log('sss')
    //   require('../searchApp.css');
    // } else {
    //   require('../App.css')
    // }
    //     method: 'get',
    //     url: `http://15.207.50.230:3001/webapi/profile`,
    //     //data: UserId,
    //     headers: {
    //       'Content-type': 'application/json',
    //       'token' : localStorage.getItem('UserToken'),
    //    }
    //   })
    //   .then(function (response) {
    //           console.log(response.data.data)
    //         // setprofileimg(response.data.data.ImgPath)
    //         //  localStorage.setItem('Profilepic',response.data.data.ImgPath);
    //         setprofilepic(response.data.data.ImgPath)

    //     }) .catch(function (response) {
    //       if(response.response.status == 422){
    //       console.log(response.response.status);
    //       }
    //     });
    // }catch (err) {
    //  console.log(err);

    // }

  }, [])


// sidebar
  const [state, setState] = React.useState({
     
   
  });

  const myFunction=()=>{
    console.log("call");

  }

  const toggleDrawer1 = (anchor, open) => (event) => {
    console.log("toggle");
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      
    >
      <List  className='List'>
         
          <ListItem className='List1' >
            <ListItemButton>
               <CollectionsBookmarkIcon />  Asset Management 
            </ListItemButton>
            </ListItem>


            <ListItem className='List1' >
            <ListItemButton> 
            <PublicIcon /> Region Management
            </ListItemButton>

            </ListItem>

            <ListItem className='List1'  >
            
            <ListItemButton> 
            <DescriptionIcon /> Master Code Management
            </ListItemButton>
            </ListItem>

            
            <ListItem  className='List1'  >

            <ListItemButton> 
            <BuildRoundedIcon /> Service Management
            </ListItemButton>
            </ListItem>


            <ListItem  className='List1' >
            <ListItemButton> 
            <GroupsRoundedIcon /> User Management
            </ListItemButton>
            </ListItem>

            <ListItem  className='List2' >
            <ListItemButton component={MyNavLink} to="/managecustomers"  > 
              Manage Customers
            </ListItemButton >
            
            </ListItem>

            <ListItem  className='List2' >
            <ListItemButton component={MyNavLink} to="/manageusers"> 
            Manage Users
            </ListItemButton>
            </ListItem>

            <ListItem  className='List2' >
            <ListItemButton component={MyNavLink} to="/usertypemapping"> 
              User Type Mapping
            </ListItemButton>
            </ListItem>

            <ListItem  className='List1' >
            <ListItemButton> 
            <AnimationIcon /> Configuration Management
            </ListItemButton>
            </ListItem>

            <ListItem className='List1' >
            <ListItemButton> 
            <LaptopWindowsRoundedIcon /> Tenancy Management
            </ListItemButton>
            </ListItem>
          
        
      </List>
      
      
    </Box>
  );






  const mainListItems = (
    // <React.Fragment className='sidebar'>
    //   <ListItem component={Link} to="/dashboard" button className='sb_icon' onClick={() => {setClass('yellow')}} selected={true}>
    //     <ListItemIcon>
    //       <DashboardIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Dashboard" />
    //   </ListItem>
    //   <ListItemButton component={Link} to="/history" className='sb_icon' onClick={() => {setClass('History')}}>
    //     <ListItemIcon>
    //       <TimelineIcon/>
    //     </ListItemIcon>
    //     <ListItemText primary="History" />
    //   </ListItemButton>
    //   <ListItemButton className='sb_icon' onClick={() => { navigate('/managemeet',{state:{id:"psm"}}); setClass('Meet');}}>
    //     <ListItemIcon>
    //       <PeopleIcon/>
    //     </ListItemIcon>
    //     <ListItemText primary="Manage Meeting" />
    //   </ListItemButton>
    //   <ListItemButton component={Link} to="/report"  className='sb_icon' onClick={() => {setClass('Report')}}> 
    //     <ListItemIcon>
    //       <BarChartIcon/>
    //     </ListItemIcon>
    //     <ListItemText primary="Report" />
    //   </ListItemButton>
    //   <ListItemButton component={Link} to="/myprofile"  className='sb_icon' onClick={() => {setClass('Profile')}}>
    //     <ListItemIcon>
    //       <PermIdentityIcon/>
    //     </ListItemIcon>
    //     <ListItemText primary="My Profile" />
    //   </ListItemButton>
    //   <ListItemButton  className='sb_icon' onClick={() => {setlogOpen(true);}}>
    //     <ListItemIcon>
    //       <PowerSettingsNewIcon/>
    //     </ListItemIcon>
    //     <ListItemText primary="Logout" />
    //   </ListItemButton>
    // </React.Fragment>& .${listItemClasses.root}:hover
    //<ListItem   className='sb_icon' button  onClick={() => {setlogOpen(true);setselect(true)}} selected={select}>

    <div className='sidebar'>
      <List
        sx={{
          [`& .active`]: {
            color: "#000",
            fontWeight: "bold",
            "& svg": {
              fill: "#4b61ff"
            }

          }
        }}
      >
        <ListItem component={MyNavLink} to="/dashboard" button className='sb_icon' >
          <ListItemIcon>
            {/* <DashboardIcon /> */}
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={MyNavLink} to="/history" button className='sb_icon' >
          <ListItemIcon>
            <StickyNote2Icon />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <ListItem component={MyNavLink} to="/managemeet" button className='sb_icon'>
          <ListItemIcon>
            {/* <PeopleIcon/> */}
            <EventAvailableIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Meeting" />
        </ListItem>
        {/* <ListItem component={MyNavLink} to="/report" button className='sb_icon'>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Report" />
        </ListItem> */}
        <ListItem component={MyNavLink} to="/myprofile" button className='sb_icon'>
          <ListItemIcon>
            <PermIdentityIcon />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>




        <ListItem component={MyNavLink} to="/Masters" button className='sb_icon'>
           <ListItemIcon>
   
        <React.Fragment key={"left"}>
            <GridOnTwoToneIcon  onClick={toggleDrawer1("left", true)} ></GridOnTwoToneIcon >
            <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer1("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
   
          </ListItemIcon >

          <ListItemText primary="Masters" /> 
        </ListItem>






        <ListItem className='sb_icon' button onClick={() => { setlogOpen(true); }} >
          <ListItemIcon>
            <PowerSettingsNewIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );


  // side bar 
  
//sidebar
  const drawerWidth = 240;
  const mdTheme = createTheme({
    overrides: {
      MuiButton: {
        label: {
          color: "red",
          fontFamily: 'Poppins',
        },
      },
    }
  });
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer1 = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

  const logout = () => {
    const jwt = localStorage.getItem('UserToken')
    let Data = {
      "userid": localStorage.getItem('userid')
    }


    try {
      axios({
        method: 'post',
        url: `https://${backEndDomain}/webapi/webauthentication/logout`,
        //data: Data,
        headers: {
          'Content-type': 'application/json',
          //'Authorization' : `${jwt}`,
          'token': jwt,
        }
      })
        .then(function (response) {
          console.log(response)
          if (response.data.message == "You Are LoggedOut Successfully") {
            navigate('/')
            localStorage.setItem('logout', "logout");
            localStorage.removeItem("Profilepic");

          }
        }).catch(function (response) {
          console.log(response)

        });
    } catch (err) {
      console.log(err);
    }
  }
 
  function HeaderContent() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
      setOpen(!open);
    };
    const usermail = localStorage.getItem('email')
    const profilepic = localStorage.getItem('Profilepic')
    return (
      <><ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', background: 'white'
              }}
            >
              <IconButton onClick={toggleDrawer} sx={{
                marginRight: '36px',
                ...(!open && { display: 'none' }),
              }}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                edge="start"

                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1, color: 'black' }}
              >

              </Typography>
              <Box sx={{
                display: 'flex',
              }}>
                {/* <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsOutlinedIcon color="primary" />
                  </Badge>
                </IconButton> */}
                {/* <IconButton >
                <Badge color="secondary" variant="dot" >
                <NotificationsOutlinedIcon color="primary" />
        </Badge></IconButton> */}
                <Stack className='user-profile-wrapper'>
                  <Box>
                    <Typography color="primary">Welcome</Typography>
                    <Typography color="primary" variant="caption" display="block" gutterBottom>{usermail}</Typography>
                  </Box>
                  <Box className='user-profile-sml' onClick={() => { navigate('/myprofile'); }}>
                    <img className="profilepic" src={profilepic} alt={userHeader}></img>
                  </Box>
                </Stack>

              </Box>
            </Toolbar>
          </AppBar>
          <Drawer1 variant="permanent" open={open} PaperProps={{
            sx: {
              backgroundColor: "#4B61FF",
              color: "red",
            }
          }}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: [1],
                background: "white"
              }}
            >

              <img src={Logo_icon} className="logo_icon"></img>
              <img src={Logo} className="logo_title"></img>


            </Toolbar>
            <Divider />
            <List component="nav">
              {mainListItems}
              <Divider sx={{ my: 1 }} />
            </List>
          </Drawer1>
          
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) => theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            {children}
            <Footer />
          </Box>
        </Box>
      </ThemeProvider><Modal
        open={openlog}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {/* Are you sure want to logout? */}
              Are you sure you want to logout?
            </Typography>
            <Box className='fo-right'>
              <Box className='btn-flx'>
                <Button className='btn-primary mr' variant="contained" startIcon={<LogoutIcon />} onClick={logout}>Okay</Button>
                <Button variant="outlined" startIcon={<CancelIcon />} onClick={() => { setlogOpen(false); }}>Cancel</Button>
              </Box>
            </Box>
          </Box>
        </Modal></>



    );
  }




  return (
    <><HeaderContent /></>
    //_____________
  )

}
export default Layout;