import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ toggleMenu, data }) {

    const [activeButton, setActiveButton] = useState('mercury');

    const toggleButton = (buttonName) => {
        setActiveButton(buttonName)

    }



    return (
        <nav className='flex md:flex-col xl:flex-row items-center  justify-between  px-[24px] md:px-[50px] py-[16px] md:pt-[32px]  md:pb-0 xl:pl-[32px] xl:pr-[40px] xl:py-0 border-b-2 border-white border-opacity-20  '>
            <button className='font-antonio font-medium text-white text-[28px] tracking-[-1.05px] ' onClick={() => toggleButton('mercury')}><Link to='/'>THE PLANETS</Link></button>


            <div className='font-spartan font-bold text-[11px] leading-[25px] tracking-[1px] hidden md:flex text-white text-opacity-75  w-full xl:w-fit xl:gap-[32px] justify-between   '>
                {/* <button className={classNames('md:pt-[32px] md:pb-[23px] xl:pt-[29px] xl:pb-[27px] opacity-75 md:border-b-[4px] xl:border-t-[4px] xl:border-b-0 border-[#070724] hover:border-[#419EBB] hover:opacity-100 transition duration-300 ', {
                    'md:border-[#419EBB]': activeButton === 'mercury',
                    'md:opacity-100': activeButton === 'mercury',
                })} onClick={() => toggleButton('mercury')}><Link to='/'>MERCURY</Link></button>
                <button className={classNames('md:pt-[32px] md:pb-[23px] xl:pt-[29px] xl:pb-[27px] opacity-75 md:border-b-[4px] xl:border-t-[4px] xl:border-b-0 border-[#070724] hover:border-[#419EBB] hover:opacity-100 transition duration-300', {
                    'md:border-[#419EBB]': activeButton === 'venus',
                    'md:opacity-100': activeButton === 'venus',
                })} onClick={() => toggleButton('venus')}
                ><Link to='/venus'>VENUS</Link></button>
                <button><Link to='/earth'>EARTH</Link></button>
                <button><Link to='/mars'>MARS</Link></button>
                <button><Link to='/jupiter'>JUPITER</Link></button>
                <button><Link to='/saturn'>SATURN</Link></button>
                <button><Link to='/uranus'>URANUS</Link></button>
                <button><Link to='/neptune'>NEPTUNE</Link></button> */}
                {
                    data.map((each, index) => {
                        return (
                            <button className={classNames(`md:pt-[32px] md:pb-[23px] xl:pt-[29px] xl:pb-[27px] opacity-75 md:border-b-[4px] xl:border-t-[4px] xl:border-b-0 border-[#070724] md:hover-border-b-[4px] xl:hover-border-t-[4px] hover:opacity-100 transition duration-300`, {

                                [`md:border-[${each.color}]`]: activeButton === each.name.toLowerCase(),
                                'md:opacity-100': activeButton === each.name.toLowerCase(),
                            })} style={{ borderColor: activeButton === each.name.toLowerCase() ? each.color : '', hover: { borderColor: each.color }, }} onClick={() => toggleButton(each.name.toLowerCase())}
                            ><Link to={`/${each.name !== 'Mercury' ? each.name.toLowerCase() : ''}`}>{each.name.toUpperCase()}</Link></button>
                        )
                    })
                }



            </div>
            <img className='md:hidden' src='./assets/icon-hamburger.svg' alt='hamburger' onClick={toggleMenu}></img>







        </nav>
    )
}

export default Nav