import React, { useState } from 'react';

function Mercury({ content }) {

    const [activeButton, setActiveButton] = useState('overview');

    const toggleContent = (buttonName) => {
        setActiveButton(buttonName);

    }
    return (
        <div className='text-white'>
            <div className=' flex justify-between   px-[24px] border-white border-b-2 border-opacity-20 font-spartan font-bold text-[9px] tracking-[1.93px] md:hidden '>
                <button style={{ borderBlockColor: `${activeButton === 'overview' ? 'green' : 'black'}` }} className={`opacity-50 pt-[20px] pb-[16px] hover:opacity-100 border-[#070724] border-b-[4px] hover:border-[#419EBB] active:bg-green-500 ${activeButton === 'overview' ? 'border-[#419EBB] ' : 'border-[#070724]'} `} onClick={() => toggleContent('overview')}>
                    OVERVIEW
                </button>
                <button className='opacity-50' onClick={() => toggleContent('structure')}>
                    STRUCTURE
                </button>
                <button className='opacity-50' onClick={() => toggleContent('surface')}>
                    SURFACE
                </button>

            </div>
            <div className='mx-[24px]'>
                <div style={{ display: activeButton === 'overview' ? 'block' : 'none' }} className='flex flex-col  bg-blue-100 w-full text-center  '>
                    <div className=' h-[300px]  w-full flex items-center justify-center bg-green-100 '>
                        <img className=' h-auto max-w-[111px]  md:max-w-[184px] xl:max-w-[290px] object-contain' src={content.images.planet.replace('./assets', '/assets')}></img>
                    </div>
                    <div className='flex flex-col  bg-red-100'>
                        <h1 className='font-antonio font-medium text-[40px]'>{content.name}</h1>
                        <p className='font-spartan font-medium text-[11px] leading-[22px] mt-[16px] mb-[32px]'>{content.overview.content}</p>
                        <p className='opacity-50 flex items-center font-spartan font-medium text-[12px] leading-[25px]' >Source : <a href={content.overview.source} target='blank' className='flex items-center space-x-[4px] '><span className='border-white border-b-2 '> Wikipedia</span><img src='/assets/icon-source.svg'></img></a></p>

                    </div>

                </div>
                <div style={{ display: activeButton === 'structure' ? 'block' : 'none' }} className='flex flex-col  bg-blue-100 w-full text-center  '>
                    <div className=' h-[300px]  w-full flex items-center justify-center bg-green-100 '>
                        <img className=' h-auto max-w-[111px]  md:max-w-[184px] xl:max-w-[290px] object-contain' src={content.images.internal.replace('./assets', '/assets')}></img>
                    </div>
                    <div className='flex flex-col  bg-red-100'>
                        <h1 className='font-antonio font-medium text-[40px]'>{content.name}</h1>
                        <p className='font-spartan font-medium text-[11px] leading-[22px] mt-[16px] mb-[32px]'>{content.structure.content}</p>
                        <p className='opacity-50 flex items-center font-spartan font-medium text-[12px] leading-[25px]' >Source : <a href={content.structure.source} target='blank' className='flex items-center space-x-[4px] '><span className='border-white border-b-2 '> Wikipedia</span><img src='/assets/icon-source.svg'></img></a></p>

                    </div>

                </div>
                <div style={{ display: activeButton === 'surface' ? 'block' : 'none' }} className='flex flex-col  bg-blue-100 w-full text-center  '>
                    <div className=' h-[300px]  w-full flex  items-center justify-center bg-green-100 relative  '>
                        <img className=' h-auto max-w-[111px]  md:max-w-[184px] xl:max-w-[290px] object-contain' src={content.images.planet.replace('./assets', '/assets')}></img>
                        <img className=' h-auto max-w-[111px]  md:max-w-[184px] xl:max-w-[290px] object-contain absolute' src={content.images.geology.replace('./assets', '/assets')}></img>
                    </div>
                    <div className='flex flex-col  bg-red-100'>
                        <h1 className='font-antonio font-medium text-[40px]'>{content.name}</h1>
                        <p className='font-spartan font-medium text-[11px] leading-[22px] mt-[16px] mb-[32px]'>{content.geology.content}</p>
                        <p className='opacity-50 flex items-center font-spartan font-medium text-[12px] leading-[25px]' >Source : <a href={content.geology.source} target='blank' className='flex items-center space-x-[4px] '><span className='border-white border-b-2 '> Wikipedia</span><img src='/assets/icon-source.svg'></img></a></p>

                    </div>

                </div>
                <div className='space-y-[8px] mt-[28px] pb-[48px]'>
                    <div className='py-[16px] px-[24px] flex justify-between items-center border-2 border-white border-opacity-20'>
                        <p className='opacity-50 font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px]'>ROTATION TIME</p>
                        <p className='font-antonio font-medium text-[20px] tracking-[-0.75px]'>{content.rotation}</p>
                    </div>
                    <div className='py-[16px] px-[24px] flex justify-between items-center border-2 border-white border-opacity-20'>
                        <p className='opacity-50 font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px]'>REVOLUTION TIME</p>
                        <p className='font-antonio font-medium text-[20px] tracking-[-0.75px]'>{content.revolution}</p>
                    </div>
                    <div className='py-[16px] px-[24px] flex items-center justify-between border-2 border-white border-opacity-20'>
                        <p className='opacity-50 font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px]'>RADIUS</p>
                        <p className='font-antonio font-medium text-[20px] tracking-[-0.75px]'>{content.radius}</p>
                    </div>
                    <div className='py-[16px] px-[24px] flex items-center justify-between border-2 border-white border-opacity-20'>
                        <p className='opacity-50 font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px]'>AVERAGE TEMP.</p>
                        <p className='font-antonio font-medium text-[20px] tracking-[-0.75px]'>{content.temperature}</p>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Mercury