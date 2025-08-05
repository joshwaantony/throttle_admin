import Navbar from "@/components/navBar/Navbar";
import SideBar from "@/components/sideBar/SideBar";
import React from "react";

function layout({children}) {
  return <div>
   <Navbar/>
   <div className="flex bg-white">
    <div className="w-64">
            <SideBar/>

    </div>
       <div className="w-full bg-white">
         {children}
       </div>

   </div>
    
  </div>;
}

export default layout;
