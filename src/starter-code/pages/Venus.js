import React, { useState } from 'react';

export default function Venus({ content }) {

    const [overview, setOverview] = useState(true);
    const [structure, setStructure] = useState(false);
    const [surface, setSurface] = useState(false);

    const toggleContent = (topic) => {
        if (topic === 'overview') {
            setOverview(true);
            setStructure(false);
            setSurface(false);

        }
        if (topic === 'structure') {
            setOverview(false);
            setStructure(true);
            setSurface(false);

        }
        if (topic === 'surface') {
            setOverview(false);
            setStructure(false);
            setSurface(true);
        }
    }
    return (
        <div className='text-white'>
            <div className=' flex justify-between py-[20px] px-[24px] border-white border-b-2 border-opacity-20 font-spartan font-bold text-[9px] tracking-[1.93px] '>
                <button className='opacity-50' onClick={() => toggleContent('overview')}>
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
                <div style={{ display: overview ? 'block' : 'none' }} className='flex flex-col  bg-blue-100 w-full  '>
                    <div className=' h-[300px]  w-full flex items-center justify-center bg-green-100 '>
                        <img className='h-auto max-w-[154px] md:max-w-[200px] xl:max-w-[400px] object-contain' src={content.images.planet.replace('./assets', '/assets')}></img>
                    </div>
                    <div className='flex-1 bg-red-100'>
                        <h1 className='font-antonio font-medium text-[40px]'>{content.name}</h1>
                        <p className='font-spartan font-medium text-[11px] leading-[22px] mt-[16px] mb-[32px]'>{content.overview.content}</p>
                        <p className='opacity-50 flex items-center font-spartan font-medium text-[12px] leading-[25px]' >Source : <a href={content.overview.source} target='blank' className='flex items-center space-x-[4px] '><span className='border-white border-b-2 '> Wikipedia</span><img src='/assets/icon-source.svg'></img></a></p>

                    </div>

                </div>
                <div style={{ display: structure ? 'block' : 'none' }} className=' flex flex-col items-center justify-center text-center'>
                    <div className='w-full h-[300px] flex items-center justify-center'><img className='w-1/3 ' src={content.images.internal.replace('./assets', '/assets')}></img></div>

                    <h1 className='font-antonio font-medium text-[40px]'>{content.name}</h1>
                    <p className='font-spartan font-medium text-[11px] leading-[22px] mt-[16px] mb-[32px]'>{content.structure.content}</p>
                    <p className='opacity-50 flex items-center font-spartan font-medium text-[12px] leading-[25px]' >Source : <a href={content.structure.source} target='blank' className='flex items-center space-x-[4px] '><span className='border-white border-b-2 '> Wikipedia</span><img src='/assets/icon-source.svg'></img></a></p>
                </div>
                <div style={{ display: surface ? 'block' : 'none' }} className=' flex flex-col items-center justify-center text-center'>
                    <div className='w-full h-[300px]  flex flex-col items-center justify-center relative '>
                        <img className='w-1/3 mb-[-10%] ' src={content.images.planet.replace('./assets', '/assets')}></img>
                        <img className='w-1/5   ' src={content.images.geology.replace('./assets', '/assets')}></img>
                    </div>

                    <h1 className='font-antonio font-medium text-[40px]'>{content.name}</h1>
                    <p className='font-spartan font-medium text-[11px] leading-[22px] mt-[16px] mb-[32px]'>{content.geology.content}</p>
                    <p className='opacity-50 flex items-center font-spartan font-medium text-[12px] leading-[25px]' >Source : <a href={content.geology.source} target='blank' className='flex items-center space-x-[4px] '><span className='border-white border-b-2 '> Wikipedia</span><img src='/assets/icon-source.svg'></img></a></p>
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
        </div>
    )
}

