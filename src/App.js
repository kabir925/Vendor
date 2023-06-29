import './App.css';
import { ToastContainer } from 'react-toastify';
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
<<<<<<< HEAD
import Otherdetails from './Components/Otherdetails';
=======
// import Attachment from './Components/Attachment';
import Invoices from './Components/Invoices';
import Profile from './Components/Profile';
>>>>>>> cfc9c87e6f58544c3d4f9895e632d314033baa9f

function App() {
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
            {/* <Route path='/signup' element={<Signup/>}/> */}
            <Route path="/login" element={<Signin />} />
            <Route path="/attachments" element={<Attachments />} />
            <Route path="/allinvoices" element={<Invoices />} />
            <Route path="/addinvoices" element={<AddInvoices />} />
<<<<<<< HEAD
            <Route path='/otherdetails' element={<Otherdetails/>}/>
=======
            <Route path="/profile" element={<Profile />} />
>>>>>>> cfc9c87e6f58544c3d4f9895e632d314033baa9f
            {/* <Route path='/attachment' element={<Attachment/>}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
