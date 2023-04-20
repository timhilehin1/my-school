import { React, useState } from 'react'
import { HistoryData } from './HistoryData'
import CountUp from 'react-countup';



function HistoryCounter() {
    return (
        <section className='bg-[#5AAF4B] py-4 md:py-0 md:h-36  md:flex items-center px-4 justify-around'>

            {
                HistoryData.map(hist => {
                    return (
                        <div key={hist.id} className='mt-5 md:mt-0 flex flex-row gap-8 text-white'>
                            <p>{hist.logo}</p>

                            <div className='flex flex-col'>
                                <CountUp className='text-2xl font-medium' end={hist.No}/>
                             {/* <p className='text-2xl font-medium'>{hist.No}</p> */}
                                <p>{hist.text }</p>
                            </div>
                        </div>
                    )
                })
            }

        </section>
    )
}

export default HistoryCounter
