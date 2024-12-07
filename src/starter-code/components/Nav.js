import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ toggleMenu }) {



    return (
        <nav className='flex items-center justify-between px-[24px] py-[16px] border-b-2 border-white border-opacity-20 '>
            <h1 className='font-antonio font-medium text-white text-[28px] tracking-[-1.05px]'>THE PLANETS</h1>


            <div className='font-antonio font-semibold text-xl hidden md:block'>
                <p><Link to='/'>MERCURY</Link></p>
                <p><Link to='/venus'>VENUS</Link></p>
                <p><Link to='/earth'>EARTH</Link></p>
                <p><Link to='/mars'>MARS</Link></p>
                <p><Link to='/jupiter'>JUPITER</Link></p>
                <p><Link to='/saturn'>SATURN</Link></p>
                <p><Link to='/uranus'>URANUS</Link></p>
                <p><Link to='/neptune'>NEPTUNE</Link></p>



            </div>
            <img className='md:hidden' src='/assets/icon-hamburger.svg' onClick={toggleMenu}></img>







        </nav>
    )
}

export default Nav