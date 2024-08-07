import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Login.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Userlogin } from './Userlogin';
import AdminRouter from './Admin/AdminRouter/AdminRouter';
import { AdminHome } from './Admin/Home';
import './App.css'
import { Addsecretary } from './Admin/Addsecretary';
import { Addsecr } from './Admin/Addsecr';
import { Viewsec } from './Admin/Viewsec';
import { Viewsecdetail } from './Admin/Viewsecdetail';
import { Editsecretary } from './Admin/Editsecretary';
import { Addstaff } from './Admin/Addstaff';
import { Viewstaff } from './Admin/Viewstaff';
import { Viewstaffdetail } from './Admin/Viewstaffdetail';
import { Editstaff } from './Admin/Editstaff';
import { Addwardmember } from './Admin/Addwardmember';
import { Viewwardmember } from './Admin/Viewwardmember';
import { Viewmemberdetail } from './Admin/Viewmemberdetail';
import { Editmember } from './Admin/Editmember';
import { Userview } from './Admin/Userview';
import { Userviewdetail } from './Admin/Userviewdetail';
import { Addnotification } from './Admin/Addnotification';
import { Viewnot } from './Admin/Viewnot';
import { Addmeeting } from './Admin/Addmeeting';
import { Viewmeeting } from './Admin/Viewmeeting';
import { Editmeeting } from './Admin/Editmeeting';
import { Viewcomplaint } from './Admin/Viewcomplaint';
import { Replycomplaint } from './Admin/Replycomplaint';
import { Presidentnav } from './President/Presidentnav';
import { Sechome } from './President/Sechome';
import { Secservices } from './President/Secservices';
import { Secviewapplisn } from './President/Secviewapplisn';
import { Secviewaplsndetail } from './President/Secviewaplsndetail';
import { Secviewmeet } from './President/Secviewmeet';
import { Secviewnot } from './President/Secviewnot';
import { Usernav } from './User/Usernav';
import { Userhome } from './User/Userhome';
import { Userviewservice } from './User/Userviewservice';
import { Userapplication } from './User/Userapplication';
import { Postcomplaint } from './User/Postcomplaint';
import { Userviewreply } from './User/Userviewreply';
import { Useviewnot } from './User/Useviewnot';
import { Userviewmeet } from './User/Userviewmeet';
import { Userviewapplicatin } from './User/Userviewapplicatin';
import { Viewaplcationdetail } from './User/Viewaplcationdetail';
import { Wardnav } from './Wardmember/Wardnav';
import { Wardhome } from './Wardmember/Wardhome';
import { Membernot } from './Wardmember/Membernot';
import { Memberviewnot } from './Wardmember/Memberviewnot';
import { Memberedirnot } from './Wardmember/Memberedirnot';
import { Membermeet } from './Wardmember/Membermeet';
import { Memberviewmeet } from './Wardmember/Memberviewmeet';
import { Membereditmeet } from './Wardmember/Membereditmeet';
import { Memberviewsevice } from './Wardmember/Memberviewsevice';
import { Memberviewcomp } from './Wardmember/Memberviewcomp';
import { Memberreplycomp } from './Wardmember/Memberreplycomp';
import { Staffnav } from './Staff/Staffnav';
import { Staffhome } from './Staff/Staffhome';
import { Staffaddservice } from './Staff/Staffaddservice';
import { Staffviewservice } from './Staff/Staffviewservice';
import { Staffeditservice } from './Staff/Staffeditservice';
import { Staffviewapply } from './Staff/Staffviewapply';
import { Staffviewapplydetail } from './Staff/Staffviewapplydetail';
import { Rejectreason } from './Staff/Rejectreason';
import { Staffviewmeet } from './Staff/Staffviewmeet';
import { Staffviewnot } from './Staff/Staffviewnot';
import { Viewhistory } from './Admin/Viewhistory';
import { Editnot } from './Admin/Editnot';
import { Userpayment } from './User/Userpayment';
import { Presidentreject } from './President/Presidentreject';
import { Forgotpassword } from './Forgotpassword';
import { Userreg } from './Userreg';
import { LanguageContext } from './User/LanguageContext';
import { Viewcategory } from './Admin/Viewcategory';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Addnews } from './Admin/Addnews';
import { Addward } from './Admin/Addward';


import {Toaster} from "react-hot-toast"
import { Viewmeetfrompres } from './Wardmember/Viewmeetfrompres';
import { Viewnotpres } from './Wardmember/Viewnotpres';
import { Viewnews } from './Admin/Viewnews';
import { Userprofile } from './User/Userprofile';
import { Usereditprofile } from './User/Usereditprofile';
import { Field } from './Staff/Field';
import { Viewservicedetail } from './User/Viewservicedetail';
import { Vservicedetail } from './Wardmember/Vservicedetail';
import { Secviewservice } from './President/Secviewservice';
import { Vhist } from './President/Vhist';
import { EmailOTP } from './otp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<LanguageContext>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='/Login' element={<Userlogin/>}/>
        <Route path='/otpverify' element={<EmailOTP/>}/>
        <Route path='/forgot/:email' element={<Forgotpassword/>}/>
        <Route path='/userreg' element={<Userreg/>}/>
        <Route path='/viewnews' element={<Viewnews/>}/>
      </Route>


      <Route path='/admin' element={<AdminRouter/>}>
        <Route index element={<AdminHome/>}/>
        <Route path='addsec' element={<Addsecretary/>}/>
        <Route path='addscre' element={<Addsecr/>}/>
        <Route path='viewsecr' element={<Viewsec/>}/>
        <Route path='viewsecdetail' element={<Viewsecdetail/>}/>
        <Route path='editsec/:id' element={<Editsecretary/>}/>
        <Route path='addstaff' element={<Addstaff/>}/>
        <Route path='viewstaff' element={<Viewstaff/>}/>
        <Route path='viewstaffdetail/:id' element={<Viewstaffdetail/>}/>
        <Route path='editstaff/:id' element={<Editstaff/>}/>
        <Route path='addwardmember' element={<Addwardmember/>}/>
        <Route path='viewwardmember' element={<Viewwardmember/>}/>
        <Route path='viewmemberdetail/:id' element={<Viewmemberdetail/>}/>
        <Route path='editmember/:id' element={<Editmember/>}/>
        <Route path='userview' element={<Userview/>}/>
        <Route path='userviewdetail/:id' element={<Userviewdetail/>}/>
        <Route path='addnot' element={<Addnotification/>}/>
        <Route path='viewnot'element={<Viewnot/>}/>
        <Route path='addmeet' element={<Addmeeting/>}/>
        <Route path='viewmeet'element={<Viewmeeting/>}/>
        <Route path='editmeet/:id'element={<Editmeeting/>}/>
        <Route path='viewcomplaint' element={<Viewcomplaint/>}/>
        <Route path='replycomplaint/:id' element={<Replycomplaint/>}/>
        <Route path='viewhistory' element={<Viewhistory/>}/>
        <Route path='editnot/:id' element={<Editnot/>}/>
        <Route path='viewcate' element={<Viewcategory/>}/>
        <Route path='addnews' element={<Addnews/>}/>
        <Route path='addward' element={<Addward/>}/>
        <Route path='viewnews' element={<Viewnews/>}/>
      </Route>
      <Route path='/president' element={<Presidentnav/>}>
        <Route index element={<Sechome/>}/>
        <Route path='secservice' element={<Secservices/>}/>
        <Route path='secviewapllcsn' element={<Secviewapplisn/>}/>
        <Route path='secviewaplsndetail/:id' element={<Secviewaplsndetail/>}/>
        <Route path='secviewmeet' element={<Secviewmeet/>}/>
        <Route path='secviewnot' element={<Secviewnot/>}/>
        <Route path='secreject' element={<Presidentreject/>}/>
        <Route path='secvservicedetail/:id' element={<Secviewservice/>}/>
        <Route path='secvhistory' element={<Vhist/>}/>
      </Route>

      <Route path='/user' element={<Usernav/>}>
        <Route index element={<Userhome/>}/>
        <Route path='userviewservice' element={<Userviewservice/>}/>
        <Route path='userapply/:id' element={<Userapplication/>}/>
        <Route path='postcomplaint' element={<Postcomplaint/>}/>
        <Route path='viewreply' element={<Userviewreply/>}/>
        <Route path='userviewnot' element={<Useviewnot/>}/>
        <Route path='userviewmeet' element={<Userviewmeet/>}/>
        <Route path='userviewapplication' element={<Userviewapplicatin/>}/>
        <Route path='applicationdetail/:id' element={<Viewaplcationdetail/>}/>
        <Route path='userpayment' element={<Userpayment/>}/>
        <Route path='userprofile' element={<Userprofile/>}/>
        <Route path='viewservicedetail/:id' element={<Viewservicedetail/>}/>
        <Route path='usereditprofile' element={<Usereditprofile/>}/>
      </Route>
      <Route path='/member' element={<Wardnav/>}>
        <Route index element={<Wardhome/>}/>
        <Route path='membernot'element={<Membernot/>}/>
        <Route path='memberviewnot' element={<Memberviewnot/>}/>
        <Route path='membereditnot/:id' element={<Memberedirnot/>}/>
        <Route path='membermeet' element={<Membermeet/>}/>
        <Route path='memberviewmeet' element={<Memberviewmeet/>}/>
        <Route path='membereditmeet/:id' element={<Membereditmeet/>}/>
        <Route path='memberviewservice' element={<Memberviewsevice/>}/>
        <Route path='memberviewcomp' element={<Memberviewcomp/>}/>
        <Route path='memberreply/:id' element={<Memberreplycomp/>}/>
        <Route path='meetpresident' element={<Viewmeetfrompres/>}/>
        <Route path='notpresident' element={<Viewnotpres/>}/>
        <Route path='vservicedetail/:id' element={<Vservicedetail/>}/>
      </Route>
      <Route path='/staff' element={<Staffnav/>}>
      <Route index element={<Staffhome/>}/>
      <Route path='staffaddservice' element={<Staffaddservice/>}/>
      <Route path='staffviewservice' element={<Staffviewservice/>}/>
      <Route path='staffeditservice' element={<Staffeditservice/>}/>
      <Route path='staffviewapply' element={<Staffviewapply/>}/>
      <Route path='staffviewapplydetail/:id' element={<Staffviewapplydetail/>}/>
      <Route path='staffreject' element={<Rejectreason/>}/>
      <Route path='staffviewmeet' element={<Staffviewmeet/>}/>
      <Route path='staffviewnot' element={<Staffviewnot/>}/>
      <Route path='Addfield/:id' element={<Field/>}/>
      </Route>

      <Route path='*' element={<div> no routes</div>}/>
    </Routes>
    </BrowserRouter>
    </LanguageContext>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
