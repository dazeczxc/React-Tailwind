import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard } from 'react-icons/md';
import { Link, Routes, Route} from "react-router-dom";
import Orgs from "../pages/Orgs";
import Employee from "../pages/Employee";

function Admin() {
    const [open, setOpen] = useState(false);
    const menus = [
        {name: "Org Chart", link: "/orgs", icon: MdOutlineDashboard},
        {name: "Employee", link: "/employee", icon: MdOutlineDashboard},
        {name: "Settings", link: "/", icon: MdOutlineDashboard},
      ];

    return (
        <div>
            
            <div className='flex gap-6 '>

                <div className= {`${open? "w-72": "w-16"} px-4 duration-300 h-screen bg-black`}>   

                    <div className='py-3 flex justify-end' onClick={()=>setOpen(!open)}>
                        <HiMenuAlt3 size={26} className={`cursor-pointer text-white ${!open && "rotate-180"}`} />
                    </div>

                    <div className='mt-4 flex flex-col gap-4 relative text-white'>
                        {menus?.map((menu, i)=>(
                                <Link to={menu?.link} key={i} className='group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-600 rounded-md'>
                                    <div>{React.createElement(menu?.icon, {size: "20"})}</div>

                                    <h2 style={{transitionDelay: `${i + 2}00ms`}} className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{menu?.name}</h2>
                                
                                    <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                                    group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu?.name}</h2>
                                </Link>
                            ))}
                    </div>    

                </div>

                

                <div className=' text-2xl font-semibold flex-1 h-screen'>
                    <h1>Test</h1>
                        
                    {/* <Routes>
                        <Route path="/" element={<Admin />} />
                        <Route path="/orgs" element={<Orgs />} />
                        <Route path="/employee" element={<Employee />} />

                    </Routes> */}
                        
                </div>
            </div>
        </div>
        
    );
}

export default Admin;
