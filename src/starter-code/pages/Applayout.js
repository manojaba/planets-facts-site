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
        <div style={{ backgroundImage: `url(./assets/background-stars.svg)` }} className='  bg-[#070724]'>
            <HashRouter   >
                <Nav toggleMenu={toggleMenu} data={data}></Nav>
                {menuOpen ? (
                    <Menu toggleMenu={toggleMenu} />
                ) : (
                    <Routes>
                        <Route path='/' element={<Mercury content={data[0]} />}></Route>
                        <Route path='/venus' element={<Venus content={data[1]} />}></Route>
                        <Route path='/earth' element={<Earth content={data[2]} />}></Route>
                        <Route path='/mars' element={<Mars content={data[3]} />}></Route>
                        <Route path='/jupiter' element={<Jupiter content={data[4]} />}></Route>
                        <Route path='/saturn' element={<Saturn content={data[5]} />}></Route>
                        <Route path='/uranus' element={<Uranus content={data[6]} />}></Route>
                        <Route path='/neptune' element={<Neptune content={data[7]} />}></Route>


                    </Routes>
                )}


            </HashRouter >

        </div >

    )
}

export default Applayout