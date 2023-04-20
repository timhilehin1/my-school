import { React, useState, useEffect, useRef } from 'react'
import { HistoryData } from './HistoryData'
import CountUp  from 'react-countup';



function HistoryCounter() {
    const targetRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting)
    );

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);


    return (
        <>
        <section className='bg-[#5AAF4B]  py-4 md:py-0 md:h-36  md:flex items-center px-4 justify-around'>

            {
                HistoryData.map(hist => {
                    return (
                        <div key={hist.id} className='mt-5 md:mt-0 flex flex-row gap-8 text-white'>
                            <p>{hist.logo}</p>

                            <div ref={targetRef} className='flex flex-col'>
                                { isVisible && <CountUp
                                    separator=""
                                    className='text-2xl font-medium' end={hist.No} />}
                             {/* <p className='text-2xl font-medium'>{hist.No}</p> */}
                                <p>{hist.text }</p>
                            </div>
                        </div>
                    )
                })
            }

            </section>
            </>
    )
}

export default HistoryCounter
