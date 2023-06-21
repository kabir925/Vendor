import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicDetails from './Components/BasicDetails.jsx';
import Bankdetails from './Components/Bankdetails.jsx';
import Taxdetails from './Components/Taxdetails.jsx';
import Navbar from './Components/Navbar.jsx'
import Signup from './Components/Signup.jsx'
import Signin from './Components/Signin.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signup />} />
          <Route path="/basicdetails" element={<BasicDetails />} />
          <Route path="/bankdetails" element={<Bankdetails/>} />
          <Route path='/taxdetails' element={<Taxdetails/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
          {/* <Route path='/signup' element={<Signup/>}/> */}
          <Route path='/login' element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
