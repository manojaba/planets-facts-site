import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu({ toggleMenu }) {
    return (
        <div className='font-spartan text-white font-bold text-[15px] leading-[25px] tracking-[1.36px]   divide-white divide-opacity-20  divide-y-2 h-svh mt-[22px] bg-[#070724]'>
            <div className='flex items-center justify-between mx-[24px] py-[20px]' onClick={toggleMenu}>
                <NavLink to='/'>
                    <div className='space-x-[25px] flex items-center'>
                        <div className='w-[20px] h-[20px] rounded-full bg-[#DEF4FC]'></div>
                        <p>MERCURY</p>

                    </div>
                </NavLink>
                <img className='h-[8px] w-[6px]' src='/assets/icon-chevron.svg'></img>

            </div>

            <div className='flex items-center justify-between mx-[24px] py-[20px]' onClick={toggleMenu}>
                <NavLink to='/venus'>
                    <div className='space-x-[25px] flex items-center'>
                        <div className='w-[20px] h-[20px] rounded-full bg-[#F7CC7F]'></div>
                        <p>VENUS</p>

                    </div>
                </NavLink>
                <img className='h-[8px] w-[6px]' src='/assets/icon-chevron.svg'></img>

            </div>


            <div className='flex items-center justify-between mx-[24px] py-[20px]' onClick={toggleMenu}>
                <NavLink to='/earth'>
                    <div className='space-x-[25px] flex items-center'>
                        <div className='w-[20px] h-[20px] rounded-full bg-[#545BFE]'></div>
                        <p>EARTH</p>

                    </div>
                </NavLink>
                <img className='h-[8px] w-[6px]' src='/assets/icon-chevron.svg'></img>

            </div>


            <div className='flex items-center justify-between mx-[24px] py-[20px]' onClick={toggleMenu}>
                <NavLink to='/mars'>
                    <div className='space-x-[25px] flex items-center'>
                        <div className='w-[20px] h-[20px] rounded-full bg-[#FF6A45]'></div>
                        <p>MARS</p>

                    </div>
                </NavLink>
                <img className='h-[8px] w-[6px]' src='/assets/icon-chevron.svg'></img>

            </div>


            <div className='flex items-center justify-between mx-[24px] py-[20px]' onClick={toggleMenu}>
                <NavLink to='/jupiter'>
                    <div className='space-x-[25px] flex items-center'>
                        <div className='w-[20px] h-[20px] rounded-full bg-[#ECAD7A]'></div>
                        <p>JUPITER</p>

                    </div>
                </NavLink>
                <img className='h-[8px] w-[6px]' src='/assets/icon-chevron.svg'></img>

            </div>


            <div className='flex items-center justify-between mx-[24px] py-[20px]' onClick={toggleMenu}>
                <NavLink to='/saturn'>
                    <div className='space-x-[25px] flex items-center'>
                        <div className='w-[20px] h-[20px] rounded-full bg-[#FCCB6B]'></div>
                        <p>SATURN</p>

                    </div>
                </NavLink>
                <img className='h-[8px] w-[6px]' src='/assets/icon-chevron.svg'></img>

            </div>

            <div className='flex items-center justify-between mx-[24px] py-[20px]' onClick={toggleMenu}>
                <NavLink to='/uranus'>
                    <div className='space-x-[25px] flex items-center'>
                        <div className='w-[20px] h-[20px] rounded-full bg-[#65F0D5]'></div>
                        <p>URANUS</p>

                    </div>
                </NavLink>
                <img className='h-[8px] w-[6px]' src='/assets/icon-chevron.svg'></img>

            </div>
            <div className='flex items-center justify-between mx-[24px] py-[20px]' onClick={toggleMenu}>
                <NavLink to='/neptune'>
                    <div className='space-x-[25px] flex items-center'>
                        <div className='w-[20px] h-[20px] rounded-full bg-[#497EFA]'></div>
                        <p>NEPTUNE</p>

                    </div>
                </NavLink>
                <img className='h-[8px] w-[6px]' src='/assets/icon-chevron.svg'></img>

            </div>




        </div >
    )
}

export default Menu