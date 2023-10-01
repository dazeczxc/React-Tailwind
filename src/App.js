import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/Tailwind.css';
import Home from "./pages/Home";
import Admin from "./pages/Admin";


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Home />

        <div className="">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />

          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}


export default App;
