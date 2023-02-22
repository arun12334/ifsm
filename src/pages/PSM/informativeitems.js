import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Rating from '@mui/material/Rating';
import TablePagination from '@mui/material/TablePagination';
import Avatar from '@mui/material/Avatar';
import profilePhoto from '../../assets/user-profile.png';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from '@mui/material/Modal';
import { CardContent } from '@mui/material';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { alpha, useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import { Card } from '@mui/material';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { makeStyles } from '@mui/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import men from '../../assets/men.png';
import settings from '../../assets/settings.png';
import sam from '../../assets/sam.png';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import InputAdornment from '@mui/material/InputAdornment';
import { Oval } from 'react-loader-spinner'
import axios from "axios";
import meet from './../../assets/meet.png';
import { backEndDomain } from '../../service/apiserver';

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
  position: 'relative',
  width: 330,
  bgcolor: 'background.paper',
  p: 1,
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

// ___________for filter select field _____________________
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function createData(customername, equipstatus, equiploc, contactnum, assignedeng, Prefix, Model, servicetype) {
  return {
    customername, equipstatus, equiploc, contactnum, assignedeng, Prefix, Model, servicetype
  };
}
const rows = [
  createData('Ada Lovelace', 'Breakdown', 'LA', 9878789874, 'John L', '24Z', 'VIK12', 'Out of Warranty'),
  createData('Mike', 'Running', 'Hawkins', 9878789874, 'Demagorgan', '24Z', 'VIK12', 'Out of Warranty'),
  createData('Jonas', 'Breakdown', 'Hawkins', 9878789874, 'John L', '24Z', 'VIK12', 'Out of Warranty'),
  createData('Max', 'Running', 'Hawkins', 9878789874, 'John L', '24Z', 'VIK12', 'Out of Warranty'),
  createData('Wheeler', 'Breakdown', 'Hawkins', 9878789874, 'Demagorgan', '24Z', 'VIK12', 'Out of Warranty'),
  createData('Hopper', 'Breakdown', 'Hawkins', 9878789874, 'Yuri', '24Z', 'VIK12', 'Out of Warranty'),
  createData('Eleven', 'Running', 'Upside Down', 9878789874, 'Vecna', '24Z', 'VIK12', 'Out of Warranty')
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'customername',
    numeric: false,
    disablePadding: true,
    label: 'Customer Name',
  },
  {
    id: 'Equipmentstatus',
    numeric: true,
    disablePadding: false,
    label: 'Equipment Status',
  },
  {
    id: 'City',
    numeric: true,
    disablePadding: false,
    label: 'Equipment Location',
  },
  {
    id: 'customernumber',
    numeric: true,
    disablePadding: false,
    label: 'Contact Number',
  },
  {
    id: 'UserName',
    numeric: true,
    disablePadding: false,
    label: 'Assigned Engineer',
  },
  {
    id: 'EquipmentPrefix',
    numeric: true,
    disablePadding: false,
    label: 'Prefix',
  },
  {
    id: 'EquipmentModel',
    numeric: true,
    disablePadding: false,
    label: 'Model',
  },
  // {
  //   id: 'servicetype',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Service Type',
  // },
  // {
  //   id: 'issue',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Issue Description',
  // },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};




function Informativeitems() {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuClasses = useMenuStyles();
  const [open, setView] = React.useState(false);
  const [opened, setOpen] = React.useState(false);
  const [openf, setOpenf] = React.useState(false);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [anchorElf, setAnchorElfil] = React.useState(null);
  const id = open ? "faked-reference-popper" : undefined;
  const idf = openf ? "faked-reference-popper" : undefined;
  const [loader, setloader] = React.useState(false);
  const jwt = localStorage.getItem('UserToken')
  const [tabledata, settabledata] = React.useState([]);
  const [feedback, setfeedback] = React.useState([]);
  const [RegDate, setRegDate] = React.useState([]);
  const [ResolvedDate, setResolvedDate] = React.useState([]);
  const [nodata, setnodata] = React.useState(false);


  useEffect(() => {
    setloader(true)
    //console.log(location.state.id)
    try {
      axios({
        method: 'get',
        url: `https://${backEndDomain}/webapi/webuserInput/allocationdata?status=${location.state.id}&TenantId=${localStorage.getItem('TenantId')}&Type=${location.state.type}`,
        //data: Data,
        headers: {
          'Content-type': 'application/json',
          'token': jwt,
        }
      })
        .then(function (response) {
          console.log(response.data.data)
          let dataaa1 = []
          response.data.data.map((data) => {
            // console.log(data)
            let hlo = {
              customername: data.customerdetails.customername,
              Equipmentstatus: data.equipmentdata.Equipmentstatus,
              State: data.State,
              City: data.City,
              District: data.District,
              Address: data.Address,
              customernumber: data.customerdetails.customernumber,
              EquipmentPrefix: data.equipmentdata.EquipmentPrefix,
              EquipmentModel: data.equipmentdata.EquipmentModel,
              IssueDescription: data.equipmentdata.IssuDescription,
              UserName: data.AssignedEngineer.UserName,
              RequestId: data.RequestId


            }
            dataaa1.push(hlo)
          });

          settabledata(dataaa1)
          //settabledata(response.data.data)
          setloader(false)


        }).catch(function (response) {
          //   if(response.response.status == 422){
          //  // console.log(response.response.status);
          //   }
          if (response.response.data.message == "Data Not Found") {
            console.log(response.response);
            setnodata(true)
            setloader(false)
          }
        });
    } catch (err) {
      console.log(err);

    }

  }, [])

  const handleOpen = (cid) => {
    setOpen(true);
    console.log(cid)
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
          console.log(response.data.data)
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

  const handleClosef = () => {
    setOpen(false)
    setAnchorEl(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const EnhancedTableToolbar = (props) => {
    const [age, setAge] = React.useState('');
    const [age1, setAge1] = React.useState('');
    const [age2, setAge2] = React.useState('');
    const [age3, setAge3] = React.useState('');
    const [age4, setAge4] = React.useState('');
    const [age5, setAge5] = React.useState('');

    const handlefilterChange = (event) => {
      setAge(event.target.value);
    };
    const handlefilterChange1 = (event) => {
      setAge1(event.target.value);
    };
    const handlefilterChange2 = (event) => {
      setAge2(event.target.value);
    };
    const handlefilterChange3 = (event) => {
      setAge3(event.target.value);
    };
    const handlefilterChange4 = (event) => {
      setAge4(event.target.value);
    };
    const [svalues, setValues] = React.useState({
      search: '',
    });

    const handleChangesearch = (prop) => (event) => {
      setValues({ ...svalues, [prop]: event.target.value });
    };
    return (
      <PopupState variant="popper" popupId="demo-popup-popper" >
        {(popupState) => (
          <div>
            <Box className='box-header'>
              {location.state.id != "Overdue" && <h2 className="page-heding">{location.state.id} <span className='header-count'>{tabledata.length}</span></h2>}
              {location.state.id == "Overdue" && <h2 className="page-heding">MTTR Overdue  <span className='header-count'>{tabledata.length}</span></h2>}
              {/* {nodata==false ?
              <Box className='Srch-fld'>
          
                         <FormControl  className='Srch-fld-color' size='small'> 
          <InputLabel size='small'>Search</InputLabel>
          <OutlinedInput
          size='small'
            type={svalues.search}
            value={svalues.search}
            onChange={handleChangesearch('search')}
              endAdornment={<InputAdornment position="end"> <SearchIcon className='search-icon'/></InputAdornment>}
            label="Search"
          />
        </FormControl>
                <Tooltip title="Filter list">

                  <IconButton >
                    <FilterAltOutlinedIcon {...bindToggle(popupState)} />
                  </IconButton>
                </Tooltip>
                <Popper {...bindPopper(popupState)} transition>
                  {({ TransitionProps }) => (
                    // <ClickAwayListener onClickAway={popupState.close} >

                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                          <MenuList className={menuClasses.list} autoFocus>
                            <Box sx={style1}>

                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                Choose Filter <CloseIcon sx={{ marginLeft: 20 }} onClick={popupState.close} />

                              </Typography>
                              <FormControl className='filter-show-case1'>
                                <Select
                                  value={age}
                                  onChange={handlefilterChange}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                                >
                                  <MenuItem value="">
                                  Accepted
                                  </MenuItem>
                                  <MenuItem value={10}>Declined</MenuItem>
                                  <MenuItem value={20}>Yet to accept</MenuItem>
                                </Select>
                              </FormControl>
                              <FormControl className='filter-show-case1'>
                                <Select
                                  value={age1}
                                  onChange={handlefilterChange1}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                                >
                                  <MenuItem value="">
                                  Breakdown
                                  </MenuItem>
                                  <MenuItem value={10}>Running</MenuItem>
                            
                                </Select>
                              </FormControl>
                              <FormControl className='filter-show-case1'>
                                <Select
                                  value={age2}
                                  onChange={handlefilterChange2}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                                >
                                  <MenuItem value="">
                                  West Bengal
                                  </MenuItem>
                                  <MenuItem value={10}>LA</MenuItem>
                                  <MenuItem value={20}>Hawkins</MenuItem>
                                </Select>
                              </FormControl>
                              <FormControl className='filter-show-case1'>
                                <Select
                                  value={age3}
                                  onChange={handlefilterChange3}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                                >
                                  <MenuItem value="">
                                  Kolkata
                                  </MenuItem>
                                  <MenuItem value={10}>TN</MenuItem>
                                
                                </Select>
                              </FormControl>
                              <FormControl className='filter-show-case1'>
                                <Select
                                  value={age4}
                                  onChange={handlefilterChange4}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                                >
                                  <MenuItem value="">
                                  Pin/Zip Code
                                  </MenuItem>
                                  <MenuItem value={10}>Declined</MenuItem>
                                  <MenuItem value={20}>Yet to accept</MenuItem>
                                </Select>
                              </FormControl>
    
                              <Box textAlign='center'>
                                <Button className='outline-btn'
                                  type="submit"
                                  size="large"
                                  variant="outlined"
                                  sx={{ mt: 3, mb: 2 }}

                                >
                                  Clear
                                </Button>
                                <Button className='apply-btn'
                                  type="submit"
                                  size="large"
                                  variant="contained"
                                  sx={{ mt: 3, mb: 2 }}

                                >
                                  Apply
                                </Button>
                              </Box>
                            </Box>
                          </MenuList>
                        </Paper>
                      </Fade>
                    // </ClickAwayListener>
                  )}
                </Popper>
              </Box>:""} */}
            </Box>
          </div>
        )}
      </PopupState>
    );
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


  return (
    <><Layout>
      <Container sx={{ width: '100%' }}>
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
          <EnhancedTableToolbar />
          <Card sx={{ width: '100%', mb: 2 }}>
            <CardContent>

              {nodata == false ? <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                >
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={tabledata.length}
                  />
                  <TableBody>
                    {stableSort(tabledata, getComparator(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {

                        return (
                          <TableRow
                            hover
                            tabIndex={-1}
                            key={row.name}
                          >
                            <TableCell padding="checkbox">
                            </TableCell>
                            <TableCell
                              component="th"
                              scope="row"
                              padding="none"
                            >
                              {row.customername}
                            </TableCell>
                            <TableCell align="right">{row.Equipmentstatus}</TableCell>
                            <TableCell align="right">{row.City},{row.District},{row.State}</TableCell>
                            <TableCell align="right">{row.customernumber}</TableCell>
                            <TableCell align="right">{row.UserName}</TableCell>
                            <TableCell align="right">{row.EquipmentPrefix}</TableCell>
                            <TableCell align="right">{row.EquipmentModel}</TableCell>
                            {/* <TableCell align="right" className={`status ${row.Status}`}>{row.Status}</TableCell> ,{row.City},{row.State}*/}
                            {/* <TableCell align="right">{row.ServiceTypeId}</TableCell> */}

                            {location.state.id == "Closed" && <TableCell>

                              <PopupState variant="popper" popupId="demo-popup-popper">
                                {(popupState) => (
                                  <div>
                                    <IconButton className='arrow-btn' {...bindToggle(popupState)}>
                                      <ArrowDropDownIcon />
                                    </IconButton>
                                    <Popper {...bindPopper(popupState)} transition>
                                      {({ TransitionProps }) => (
                                        <ClickAwayListener onClickAway={popupState.close} >

                                          <Fade {...TransitionProps} timeout={350}>
                                            <Paper>
                                              <MenuList className={menuClasses.list} autoFocus>
                                                <MenuItem onClick={() => handleOpen(row.RequestId)}><StarOutlineIcon />View Rating</MenuItem>
                                                <MenuItem onClick={() => { navigate('/alldetails', { state: { id: location.state.id, cid: row.RequestId } }) }}><RemoveRedEyeIcon />View</MenuItem>
                                              </MenuList>
                                            </Paper>
                                          </Fade>
                                        </ClickAwayListener>
                                      )}
                                    </Popper>
                                  </div>
                                )}
                              </PopupState>
                            </TableCell>
                            }
                            {location.state.id == "InProgress" && <TableCell><IconButton className='eye-grn-btn' onClick={() => { navigate('/alldetails', { state: { id: location.state.id, cid: row.RequestId } }) }}>
                              <RemoveRedEyeIcon />
                            </IconButton></TableCell>}
                            {location.state.id == "Accepted" && <TableCell><IconButton className='eye-grn-btn' onClick={() => { navigate('/alldetails', { state: { id: location.state.id, cid: row.RequestId } }) }}>
                              <RemoveRedEyeIcon />
                            </IconButton></TableCell>}
                            {location.state.id == "Waiting for feedback" && <TableCell><IconButton className='eye-grn-btn' onClick={() => { navigate('/alldetails', { state: { id: location.state.id, cid: row.RequestId } }) }}>
                              <RemoveRedEyeIcon />
                            </IconButton></TableCell>}
                            {location.state.id == "Yet to accept" && <TableCell><IconButton className='eye-grn-btn' onClick={() => { navigate('/alldetails', { state: { id: location.state.id, cid: row.RequestId } }) }}>
                              <RemoveRedEyeIcon />
                            </IconButton></TableCell>}
                            {location.state.id == "Overdue" && <TableCell><IconButton className='eye-grn-btn' onClick={() => { navigate('/alldetails', { state: { id: location.state.id, cid: row.RequestId } }) }}>
                              <RemoveRedEyeIcon />
                            </IconButton></TableCell>}

                          </TableRow>
                        );
                      })}
                    {/* {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )} */}
                  </TableBody>
                </Table>
              </TableContainer> : <Box className="fo-bg-wrap">
                <img src={meet}></img>
                <Typography className='no-available'>No results available at the moment</Typography>
              </Box>}
              {nodata == false ? <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={tabledata.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                showFirstButton={true}
                showLastButton={true}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> : ""}
            </CardContent>
          </Card>
        </div>
      </Container>
      {/* __________________Rating modal for Closed item _________________  */}
      <Modal className='rating-modal'
        open={opened}
        onClose={handleClosef}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='rating-modal'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Feedback <CloseIcon onClick={handleClosef} sx={{ marginLeft: 95 }} />
          </Typography>

          <Box className='rcontent'>

            {/* {sam} */}
            <Box className='profile-av-holder'>
              <Avatar alt="Remy Sharp" src={feedback.serviceEngineerImg} className="profile-avatar" />
              <Typography gutterBottom variant="h5" component="div" className="profile-title">{feedback.serviceEngineer}</Typography>
              {/* <Typography gutterBottom variant="subtitle2" component="div">Jr Service Engineer</Typography> */}

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
              {/* <TextareaAutosize
  aria-label="empty textarea"
  placeholder="Type you comments here"
  style={{ width: 200 }}
/> */}
              <TextField
                // id="outlined-read-only-input"
                // label="Read Only"
                aria-label="empty textarea"
                value={feedback.comments}
                style={{ width: 550 }}
                multiline
                rows={3}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Modal>

    </Layout>
    </>
  )
}

export default Informativeitems;