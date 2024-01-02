import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import IncomeType from "./pages/Income/IncomeType";
import IncomeLog from "./pages/Income/IncomeLog";


import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/IncomeLog" element={<IncomeLog/>} />
        <Route path="/IncomeType" element={<IncomeType/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
