import './App.css';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicDetails from './Components/BasicDetails.jsx';
import Bankdetails from './Components/Bankdetails.jsx';
import Taxdetails from './Components/Taxdetails.jsx';
import Navbar from './Components/Navbar.jsx'
import Signup from './Components/Signup.jsx'
import Signin from './Components/Signin.jsx'
import Attachments from './Components/Attachments';
import AddInvoices from './Components/AddInvoices';
import Otherdetails from './Components/Otherdetails';
import Helpdesk from './Components/Helpdesk';
import Invoices from './Components/Invoices.jsx'
import ViewAttachments from './Components/Views/ViewAttachments';
import Profile from './Components/Profile.jsx'
import Helpdeskorg from './Components/Helpdeskorg';
import AdminHelpdesk from './Components/Admin/Helpdesk/AdminHelpdesk';
import HelpQuery from './Components/Admin/Helpdesk/HelpQuery';

function App() {
   axios.defaults.baseURL = "http://192.168.1.40:4000/api/v1";

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/basicdetails" element={<BasicDetails />} />
            <Route path="/bankdetails" element={<Bankdetails />} />
            <Route path="/taxdetails" element={<Taxdetails />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/attachments" element={<Attachments />} />
            <Route path="/allinvoices" element={<Invoices />} />
            <Route path="/addinvoices" element={<AddInvoices />} />
            <Route path="/otherdetails" element={<Otherdetails />} />
            <Route path="/helpdesk" element={<Helpdesk />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/viewattachments" element={<ViewAttachments />} />
            <Route path='/adminhelp' element={<AdminHelpdesk/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/helpquery' element={<HelpQuery/>}/>
            <Route path='/helpdeskorg' element={<Helpdeskorg/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
