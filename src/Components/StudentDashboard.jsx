import React from "react";
import Sidebar from "./Sidebar";
import Test from "./Test";
import Test1 from "./Test1";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function StudentDashboard({ currentRoute, setCurrentRoute }) {


    return (

        <div className="py-4 px-4 flex gap-8">
            {/* <Sidebar
                       currentRoute={currentRoute}
                      setCurrentRoute={setCurrentRoute } />
            <section>
            {currentRoute === 'test' ? <Test/> : <Test/>}
              {currentRoute === 'test1' ? <Test1/> : <Test/>}
            </section> */}

            </div>
      )


}

export default StudentDashboard
