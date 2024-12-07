import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import Nav from '../components/Nav';
import Earth from './Earth';
import Jupiter from './Jupiter';
import Mars from './Mars';
import Mercury from './Mercury';
import Neptune from './Neptune';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Venus from './Venus';


function Applayout() {

    const [data, setData] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log('error loading JSON:', error));
    })

    return (
        <div style={{ backgroundImage: `url(/assets/background-stars.svg)` }} className='  bg-[#070724]'>
            <HashRouter   >
                <Nav toggleMenu={toggleMenu}></Nav>
                {menuOpen ? (
                    <Menu />
                ) : (
                    <Routes>
                        <Route path='/' element={<Mercury />}></Route>
                        <Route path='/venus' element={<Venus />}></Route>
                        <Route path='/earth' element={<Earth />}></Route>
                        <Route path='/mars' element={<Mars />}></Route>
                        <Route path='/jupiter' element={<Jupiter />}></Route>
                        <Route path='/saturn' element={<Saturn />}></Route>
                        <Route path='/uranus' element={<Uranus />}></Route>
                        <Route path='/neptune' element={<Neptune />}></Route>


                    </Routes>
                )}


            </HashRouter >

        </div>

    )
}

export default Applayout