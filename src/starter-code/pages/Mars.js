import React, { useState } from 'react';

export default function Mars({ content }) {

    const [activeButton, setActiveButton] = useState('overview');

    const toggleContent = (buttonName) => {
        setActiveButton(buttonName);

    }
    return (
        <div className='text-white'>
            <div className=' flex justify-between   px-[24px] border-white border-b-2 border-opacity-20 font-spartan font-bold text-[9px] tracking-[1.93px] md:hidden '>
                <button style={{ borderBottomColor: `${activeButton === 'overview' ? content.color : ''}`, opacity: `${activeButton === 'overview' ? '1' : ''}` }} className='opacity-50 pt-[20px] pb-[16px] hover:opacity-100 border-[#070724] border-b-[4px] hover:border-[#419EBB]' onClick={() => toggleContent('overview')}>
                    OVERVIEW
                </button>
                <button style={{ borderBottomColor: `${activeButton === 'structure' ? content.color : ''}`, opacity: `${activeButton === 'structure' ? '1' : ''}` }} className='opacity-50 pt-[20px] pb-[16px] hover:opacity-100 border-[#070724] border-b-[4px] hover:border-[#419EBB]' onClick={() => toggleContent('structure')}>
                    STRUCTURE
                </button>
                <button style={{ borderBottomColor: `${activeButton === 'surface' ? content.color : ''}`, opacity: `${activeButton === 'surface' ? '1' : ''}` }} className='opacity-50 pt-[20px] pb-[16px] hover:opacity-100 border-[#070724] border-b-[4px] hover:border-[#419EBB]' onClick={() => toggleContent('surface')}>
                    SURFACE
                </button>

            </div>
            <div className='mx-[24px] md:mx-[40px]'>
                <div className=''>
                    <div className='flex flex-col xl:flex-row  w-full text-center xl:px-[165px] xl:gap-[100px] '>
                        <div className=' h-[300px] md:h-[460px] xl:h-[754px] w-full xl:w-2/3 flex items-center justify-center relative '>
                            <img style={{ display: activeButton === 'overview' ? 'block' : 'none' }} className=' h-auto max-w-[129px]  md:max-w-[213px] xl:max-w-[336px] object-contain' src={content.images.planet} alt={`${content.name} planet `}></img>
                            <img style={{ display: activeButton === 'structure' ? 'block' : 'none' }} className=' h-auto max-w-[129px]  md:max-w-[213px] xl:max-w-[336px] object-contain' src={content.images.internal} alt={`${content.name} internal `}></img>
                            <img style={{ display: activeButton === 'surface' ? 'block' : 'none' }} className=' h-auto max-w-[129px]  md:max-w-[213px] xl:max-w-[336px] object-contain' src={content.images.planet} alt={`${content.name} planet `}></img>
                            <img style={{ display: activeButton === 'surface' ? 'block' : 'none' }} className=' h-auto max-w-[80px]  md:max-w-[120px] xl:max-w-[163px] object-contain absolute bottom-[15%]' src={content.images.geology} alt={`${content.name} geology `}></img>



                        </div>
                        <div className='md:flex xl:flex-col md:gap-[70px] md:text-left   xl:w-1/3 xl:items-center xl:justify-center  '>
                            <div style={{ display: activeButton === 'overview' ? 'block' : 'none' }} className='flex flex-col md:w-1/2 xl:w-full '>
                                <h1 className='font-antonio font-medium text-[40px] md:text-[48px] xl:text-[80px]'>{content.name.toUpperCase()}</h1>
                                <p className='font-spartan font-normal text-[11px] xl:text-[14px] leading-[22px] xl:leading-[25px] mt-[16px] mb-[32px]'>{content.overview.content}</p>
                                <p className='opacity-50 flex items-center font-spartan font-medium text-[12px] leading-[25px] xl:text-[14px]' >Source : <a href={content.overview.source} target='blank' className='flex items-center space-x-[4px] '><span className='border-white border-b-2 font-bold'> Wikipedia</span><img src='/assets/icon-source.svg'></img></a></p>

                            </div>
                            <div style={{ display: activeButton === 'structure' ? 'block' : 'none' }} className='flex flex-col md:w-1/2 xl:w-full  '>
                                <h1 className='font-antonio font-medium text-[40px] md:text-[48px] xl:text-[80px]'>{content.name.toUpperCase()}</h1>
                                <p className='font-spartan font-normal text-[11px] xl:text-[14px] leading-[22px] xl:leading-[25px] mt-[16px] mb-[32px]'>{content.structure.content}</p>
                                <p className='opacity-50 flex items-center font-spartan font-medium text-[12px] leading-[25px] xl:text-[14px]' >Source : <a href={content.structure.source} target='blank' className='flex items-center space-x-[4px] '><span className='border-white border-b-2 font-bold '> Wikipedia</span><img src='/assets/icon-source.svg'></img></a></p>

                            </div>
                            <div style={{ display: activeButton === 'surface' ? 'block' : 'none' }} className='flex flex-col md:w-1/2 xl:w-full  '>
                                <h1 className='font-antonio font-medium text-[40px] md:text-[48px] xl:text-[80px]'>{content.name.toUpperCase()}</h1>
                                <p className='font-spartan font-normal text-[11px] xl:text-[14px] leading-[22px] xl:leading-[25px] mt-[16px] mb-[32px]'>{content.geology.content}</p>
                                <p className='opacity-50 flex items-center font-spartan font-medium text-[12px] leading-[25px] xl:text-[14px]' >Source : <a href={content.geology.source} target='blank' className='flex items-center space-x-[4px] '><span className='border-white border-b-2 font-bold '> Wikipedia</span><img src='/assets/icon-source.svg'></img></a></p>

                            </div>
                            <div className=' hidden md:flex md:flex-col items-center justify-center md:w-1/2 xl:w-full   space-y-[16px]   '>
                                <button style={{ backgroundColor: `${activeButton === 'overview' ? content.color : ''}` }} className='font-spartan font-bold text-[9px] xl:text-[12px] xl:tracking-[2.57px] leading-[25px] tracking-[1.93px] text-white py-[8px] px-[20px] w-full  text-left border-white border-[1px] border-opacity-20 hover:bg-[#D8D8D8] hover:bg-opacity-20 transition duration-300 ' onClick={() => toggleContent('overview')}><span className='opacity-50 ml-[20px] mr-[17px]  xl:mx-[28px]'>01</span> OVERVIEW</button>
                                <button style={{ backgroundColor: `${activeButton === 'structure' ? content.color : ''}` }} className='font-spartan font-bold text-[9px] xl:text-[12px] xl:tracking-[2.57px] leading-[25px] tracking-[1.93px] text-white py-[8px] px-[20px] w-full whitespace-nowrap text-left border-white border-[1px] border-opacity-20 hover:bg-[#D8D8D8] hover:bg-opacity-20 transition duration-300 ' onClick={() => toggleContent('structure')}><span className='opacity-50 ml-[20px] mr-[17px]  xl:mx-[28px]'>02</span> INTERNAL STRUCTURE</button>
                                <button style={{ backgroundColor: `${activeButton === 'surface' ? content.color : ''}` }} className='font-spartan font-bold text-[9px] xl:text-[12px] xl:tracking-[2.57px] leading-[25px] tracking-[1.93px] text-white py-[8px] px-[20px] w-full text-left border-white border-[1px] border-opacity-20 hover:bg-[#D8D8D8] hover:bg-opacity-20 transition duration-300' onClick={() => toggleContent('surface')}><span className='opacity-50 ml-[20px] mr-[17px]  xl:mx-[28px]'>03</span> SURFACE GEOLOGY</button>



                            </div>

                        </div>

                    </div>

                </div>
                <div>

                </div>
                <div className='space-y-[8px] mt-[28px]  pb-[48px] md:flex md:space-y-0 md:space-x-[11px] xl:space-x-[30px] xl:px-[165px] '>
                    <div className='py-[16px] px-[24px] md:pt-[16px] md:pb-[19px] xl:pt-[20px] xl:pb-[27px] md:px-[15px] xl:px-[23px] flex flex-grow basis-0 justify-between items-center border-2 border-white border-opacity-20 md:flex-col md:items-start'>
                        <p className='opacity-50 font-spartan font-bold text-[8px] xl:text-[11px] xl:leading-[25px] xl:tracking-[1px] leading-[16px] tracking-[0.73px]'>ROTATION TIME</p>
                        <p className='font-antonio font-medium text-[20px] tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] xl:text-[40px] xl:tracking-[-1.5px]'>{content.rotation}</p>
                    </div>
                    <div className='py-[16px] px-[24px] md:pt-[16px] md:pb-[19px] xl:pt-[20px] xl:pb-[27px] md:px-[15px] xl:px-[23px] flex flex-grow basis-0 justify-between items-center border-2 border-white border-opacity-20 md:flex-col md:items-start'>
                        <p className='opacity-50 font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] xl:text-[11px] xl:leading-[25px] xl:tracking-[1px]'>REVOLUTION TIME</p>
                        <p className='font-antonio font-medium text-[20px] tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] xl:text-[40px] xl:tracking-[-1.5px]'>{content.revolution}</p>
                    </div>
                    <div className='py-[16px] px-[24px] md:pt-[16px] md:pb-[19px] xl:pt-[20px] xl:pb-[27px] md:px-[15px] xl:px-[23px] flex flex-grow basis-0 justify-between items-center border-2 border-white border-opacity-20 md:flex-col md:items-start'>
                        <p className='opacity-50 font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] xl:text-[11px] xl:leading-[25px] xl:tracking-[1px]'>RADIUS</p>
                        <p className='font-antonio font-medium text-[20px] tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] xl:text-[40px] xl:tracking-[-1.5px]'>{content.radius}</p>
                    </div>
                    <div className='py-[16px] px-[24px] md:pt-[16px] md:pb-[19px] xl:pt-[20px] xl:pb-[27px] md:px-[15px] xl:px-[23px] flex flex-grow basis-0 justify-between items-center border-2 border-white border-opacity-20 md:flex-col md:items-start'>
                        <p className='opacity-50 font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] xl:text-[11px] xl:leading-[25px] xl:tracking-[1px]'>AVERAGE TEMP.</p>
                        <p className='font-antonio font-medium text-[20px] md:text-[24px] md:tracking-[-0.9px] tracking-[-0.75px] xl:text-[40px] xl:tracking-[-1.5px]'>{content.temperature}</p>
                    </div>

                </div>
            </div>
        </div >
    )
}

