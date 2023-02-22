import './App.css';
// import Layout from './components/layout';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Dashboard from './pages/PSM/dashboard';
import Myprofile from './pages/PSM/myprofile';
import History from './pages/PSM/history';
import Report from './pages/PSM/report';
import Actionitems from './pages/PSM/actionitems';
import Informativeitems from './pages/PSM/informativeitems'
  ;
import Alldetails from './pages/PSM/alldetails';
import Todayscomplaints from './pages/PSM/todayscomplaints';


import Managemeeting from './pages/managemeeting';
import Joinmeeting from './pages/joinmeeting';
import Forgotpassword from './pages/forgotpassword';
import SignInSide from './pages/login';


import ExpertDashboard from './pages/expert/expertDashboard';
import AddKnowledgebase from './pages/expert/addKnowledgebase';
import ExpertProfile from './pages/expert/expertProfile';
import ExpertReport from './pages/expert/expertReport';
import ExpertsTcomplaints from './pages/expert/expertsTcomplaints';
import KnowledgeBase from './pages/expert/knowledgeBase';
import ServiceSummary from './pages/expert/serviceSummary';
import Expertview from './pages/expert/expertview';
import Result from './pages/searchSolution/result';
import Managemeetingexpert from './pages/expert/emanagemeeting';
import View from './pages/expert/view';
import Execute from './pages/expert/execute';
import FindSolution from './pages/expert/findSolution';
import Searchform from './pages/searchSolution/SearchForm';
import Search from './pages/searchSolution/searchResult'
import Viewresult from './pages/searchSolution/viewresult'
import Bom from './pages/searchSolution/bom'
import AiData from '../src/pages/expert/experData'

//🧑🏻‍💼🧑🏻‍💼below imports are related to Management Module🧑🏻‍💼🧑🏻‍💼
import Custommanage from './pages/Managements/User/UserManagement/customManage';
import UserManage from './pages/Managements/User/UserManagement/userManage';
import UsertypeMapping from './pages/Managements/User/UserManagement/usertypeMapping';
import Customer from './pages/Managements/User/UserCreation/customer';
import User from './pages/Managements/User/UserCreation/user';
import Usermaptype from './pages/Managements/User/UserCreation/usermaptype';
import Mapeqcustomer from './pages/Managements/Asset/AssetManagement/mapEqCustomer';
import Equipments from './pages/Managements/Asset/AssetManagement/equipments';
import AddEquips from './pages/Managements/Asset/AssetCreation/addEquips';
import Addcustomer from './pages/Managements/Asset/AssetCreation/addCustomer';
import Assetmanagement from './pages/PSM/assetmanagement';


function App() {
  return (
    <Router>
      <Routes>
        {/* _______________Below Routes are common for EXPERT & PSM____________________ */}
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route index element={<SignInSide />} />
        <Route path="/managemeet" element={<Managemeeting />} />
        <Route path="/joinmeeting" element={<Joinmeeting />} />


        {/* __________________Below Routes belongs to PSM only__________________ */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/history" element={<History />} />
        <Route path="/actionitems" element={<Actionitems />} />
        <Route path="/informationitems" element={<Informativeitems />} />
        <Route path="/alldetails" element={<Alldetails />} />
        <Route path="/todayscomplaints" element={<Todayscomplaints />} />

        {/* _____________Below Routes belongs to expert only________________ */}
        <Route path="/expertDashboard" element={<ExpertDashboard />} />
        <Route path="/addKnowledgebase" element={<AddKnowledgebase />} />
        <Route path='/expertData' element={<AiData />} />
        <Route path="/expertProfile" element={<ExpertProfile />} />
        <Route path="/etodayscomplaints" element={<ExpertsTcomplaints />} />
        <Route path="/knowledgeBase" element={<Searchform />} />
        <Route path='/searchresult' element={<Search />} />

        <Route path="/servicestat" element={<ServiceSummary />} />
        <Route path="/expertview" element={<Expertview />} />
        <Route path="/result" element={<Result />} />
        <Route path="/managemeeting" element={<Managemeetingexpert />} />
        <Route path="/view" element={<View />} />
        <Route path="/execute" element={<Execute />} />
        <Route path="/viewresult" element={<Viewresult />} />
        <Route path="/bom" element={<Bom />} />

       {/* _____________Below Routes belongs to Mangements________________ */}
       <Route path="/managecustomers" element={<Custommanage />} />
       <Route path="/manageusers" element={<UserManage />} />
       <Route path="/usertypemapping" element={<UsertypeMapping />} />
       <Route path="/createcustomer" element={<Customer />} />
       <Route path="/createuser" element={<User />} />
       <Route path="/createmaptype" element={<Usermaptype />} />
       <Route path="/manageEqcustomer" element={<Mapeqcustomer />} />
       <Route path="/manageequips" element={<Equipments />} />
       <Route path="/addequips" element={<AddEquips />} />
       <Route path="/addcustomer" element={<Addcustomer />} />
       <Route path='/Masters' element={<Assetmanagement />}/>
        
      

      </Routes>
    </Router>

  );
}

export default App;
