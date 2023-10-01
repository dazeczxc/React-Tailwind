import Sidebar from "../components/Sidebar";
import { Routes, Route } from 'react-router-dom';
import Orgs from "../pages/Orgs";
import Employee from "../pages/Employee";

function Admin() {
    return (
        <div>
            
            <div className='flex gap-6 '>

                <Sidebar />
                
                <div className=' text-2xl font-semibold flex-1 h-screen'>
                    <h1>Different Components must switch here</h1>
                    <Routes>
                        <Route path="/orgs" component={Orgs} />
                        <Route path="/employee" component={Employee} />  
                    </Routes>                      
                </div>
            </div>
        </div>    
    );
}

export default Admin;
