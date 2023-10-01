import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/Tailwind.css';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Orgs from "./pages/Orgs";
import Employee from "./pages/Employee";


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Home />

        <div className="">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/orgs" element={<Orgs />} />
            <Route path="/employee" element={<Orgs />} />

          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}


export default App;
