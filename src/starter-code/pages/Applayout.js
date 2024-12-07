import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import Nav from '../components/Nav';
import planetdata from './data.json';
import Earth from './Earth';
import Jupiter from './Jupiter';
import Mars from './Mars';
import Mercury from './Mercury';
import Neptune from './Neptune';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Venus from './Venus';



function Applayout() {

    const data = planetdata;




    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };



    if (!data) {
        return <p>error data not found</p>
    }

    return (
        <div style={{ backgroundImage: `url(/assets/background-stars.svg)` }} className='  bg-[#070724]'>
            <HashRouter   >
                <Nav toggleMenu={toggleMenu}></Nav>
                {menuOpen ? (
                    <Menu toggleMenu={toggleMenu} />
                ) : (
                    <Routes>
                        <Route path='/' element={<Mercury content={data[0]} />}></Route>
                        <Route path='/venus' element={<Venus content={data[1]} />}></Route>
                        <Route path='/earth' element={<Earth />}></Route>
                        <Route path='/mars' element={<Mars />}></Route>
                        <Route path='/jupiter' element={<Jupiter />}></Route>
                        <Route path='/saturn' element={<Saturn />}></Route>
                        <Route path='/uranus' element={<Uranus />}></Route>
                        <Route path='/neptune' element={<Neptune />}></Route>


                    </Routes>
                )}


            </HashRouter >

        </div >

    )
}

export default Applayout