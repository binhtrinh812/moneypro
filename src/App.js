import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import IncomeType from "./pages/Income/IncomeTypee";
import IncomeLog from "./pages/Income/IncomeLog";
import SubIncomeType from "./pages/SubIncome/SubIncomeTypee";
import SubIncomeLog from "./pages/SubIncome/SubIncomeLog";
import BaseSpendingCoS from "./pages/BaseSpending/BaseSpendingCoS";
import BaseSpendingEx from "./pages/BaseSpending/BaseSpendingEx";
import ExtraSpendingCoS from "./pages/ExtraSpending/ExtraSpendingCoS";
import ExtraSpendingEx from "./pages/ExtraSpending/ExtraSpendingEx";
import SavingET from "./pages/Saving/SavingET";
import SavingS from "./pages/Saving/SavingS";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";

function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/IncomeLog" element={<IncomeLog />} />
        <Route path="/IncomeType" element={<IncomeType />} />
        <Route path="/SubIncomeLog" element={<SubIncomeLog />} />
        <Route path="/SubIncomeType" element={<SubIncomeType />} />
        <Route path="/BaseSpendingCoS" element={<BaseSpendingCoS />} />
        <Route path="/BaseSpendingEx" element={<BaseSpendingEx />} />
        <Route path="/ExtraSpendingCoS" element={<ExtraSpendingCoS />} />
        <Route path="/ExtraSpendingEx" element={<ExtraSpendingEx />} />
        <Route path="/SavingET" element={<SavingET />} />
        <Route path="/SavingS" element={<SavingS />} />
      </Routes>
    </div>
  );
}

export default App;
