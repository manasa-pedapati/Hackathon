import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './component/Home.js';
import Pagenotfound from "./component/Pagenotfound.js";
import Hostel from './component/Hostel.js';
import "./component/style.css";
import Srujana from './component/Srujana.js';
import Bed from './component/Bed.js';
import Warden from './component/Warden.js';
import Hotel from './component/Hotel.js';
import Bed2 from './component/Bed2.js';
import Srujana1 from './component/Srujana1.js';
import Form from './component/Form.js';
const App = () => {

    return (
        <div>
           
            <Routes>
            <Route path='*' element={<Pagenotfound />} />
                <Route path='home' element={<Home />} />
                {/* <Route path='login' element={<Login />} /> */}
                <Route path='warden' element={<Warden />} />
                <Route path='home/hostel' element={<Hostel />} />
                <Route path='home/srujana' element={<Srujana />} />
                <Route path='home/hostel/bed' element={<Bed/>}/>
                <Route path='home/srujana/bed' element={<Bed />} />
                <Route path='home/hostel/bed/form' element={<Form />} />
                <Route path='home/srujana/bed/form' element={<Form/>} />
                <Route path='warden/hotel' element={<Hotel/>} />
                <Route path='warden/srujana1' element={<Srujana1/>} />
                <Route path='warden/hotel/bed2' element={<Bed2 />}/>
                <Route path='warden/srujana1/bed2' element={<Bed2 />} />
                <Route path='home/hostel/bed/form/home' element={<Home />} />
                <Route path='home/srujana/bed/form/home' element={<Home />} />
                
            </Routes>

        </div>

    );
};


export default App;





