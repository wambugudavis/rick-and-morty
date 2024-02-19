'use client'

import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {Location} from "rickmortyapi";

export default function LeftPane({locations}: {
    locations: Location[]
}){
    const leftPane= useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (leftPane.current) {
                gsap.to(leftPane.current, {
                    scrollTrigger: {
                        trigger: leftPane.current,
                        id: 'p1',
                        // markers: true,
                        scrub: 1,
                        start: 'top top',
                        pin: true,
                        pinSpacing: false
                    }
                })
            }
        });
        return () => ctx.revert();
    }, [])

    return (
        <div ref={leftPane} className="h-screen py-8 border-r flex flex-col gap-y-6">
            <p className="font-medium opacity-70 text-sm">Locations:</p>
            <div className="mr-6 relative">
                <input
                    type="search"
                    placeholder="Find a location"
                    className="appearance-none outline-none border rounded py-2 px-3 w-full"
                />
                <span className="opacity-50 text-xs absolute left-1 -bottom-5">Showing 1-10 of 56</span>
                <div className="absolute right-0 top-0 flex items-center h-full pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4 text-slate-400">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col divide-y overflow-y-scroll inner-scroller">
                {
                    locations.map((location) => {
                        return (
                            <div key={location.id}
                                 className="group flex justify-between items-center py-4 cursor-pointer">
                                <div className="flex flex-col">
                                    <p className="font-semibold group-hover:text-primary transition ease-in-out">{location.name}</p>
                                    <p className="text-xs opacity-50">{location.type}</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor"
                                     className="w-4 h-4 mr-6 group-hover:text-primary transition ease-in-out">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>

                            </div>
                        )
                    })
                }
            </div>
            <div className="py-4 flex justify-center">
                <div className="pagination flex items-center justify-center rounded-l-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                    </svg>
                </div>
                {
                    Array.from(Array(3).keys()).map((page) => {
                        return (
                            <div className="pagination" key={page}>
                                <span className="font-medium text-sm">{page}</span>
                            </div>
                        )
                    })
                }
                <div className="pagination flex items-center justify-center rounded-r-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
