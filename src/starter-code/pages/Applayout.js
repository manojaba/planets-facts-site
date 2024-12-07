import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav';
import Earth from './Earth';
import Jupiter from './Jupiter';
import Mars from './Mars';
import Mercury from './Mercury';
import Neptune from './Neptune';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Venus from './Venus';
<HashRouter style={{ backgroundImage: `url(${backgroundImage})` }} >

    function Applayout() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log('error loading JSON:', error));
    })

    return (
    <HashRouter style={{ backgroundImage: `url(${backgroundImage})` }} >
        <Nav></Nav>
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

    </HashRouter >
    )
}

    export default Applayout