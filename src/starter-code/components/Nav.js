import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ toggleMenu }) {



    return (
        <nav className='flex md:flex-col items-center justify-between  px-[24px] md:px-[50px] py-[16px] md:pt-[32px] md:pb-[27px] border-b-2 border-white border-opacity-20 bg-blue-100 '>
            <h1 className='font-antonio font-medium text-white text-[28px] tracking-[-1.05px]'>THE PLANETS</h1>


            <div className='font-spartan font-bold text-[11px] leading-[25px] tracking-[1px] hidden md:flex text-white text-opacity-75  w-full justify-between md:mt-[32px] bg-yellow-200'>
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