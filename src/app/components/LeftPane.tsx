'use client'

import {useEffect, useRef, useState} from "react";
import {Location} from "rickmortyapi";
import {LocationInfo} from "@/app/types";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function LeftPane({locations, activeLocation, info, page, updatePage, setLocation}: {
    locations: Location[],
    activeLocation: Location,
    info: LocationInfo,
    page: number,
    updatePage: Function
    setLocation: Function
}) {
    const locationList = useRef<any>(null)
    const [pages, setPages] = useState<any[]>([])
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    useEffect(() => {
        const prevPage = page > 1 ? page - 1 : null
        const nextPage = page < info.pages ? page + 1 : null

        if (nextPage == null && prevPage == null) {
            setPages([page])
        } else if (prevPage == null && nextPage && nextPage < info.pages) {
            setPages([page, nextPage, nextPage + 1])
        } else if (nextPage == null && prevPage && prevPage > 1) {
            setPages([prevPage - 1, prevPage, page])
        } else {
            setPages([prevPage, page, nextPage])
        }
    }, [info.pages, page])

    useEffect(() => {
        if (locationList.current) {
            locationList.current.scrollTo({top: 0, behavior: 'smooth'});
        }
    }, [page])

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('location', term);
        } else {
            params.delete('location');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="h-screen py-8 border-r flex flex-col gap-y-6">
            <p className="font-medium opacity-70 text-sm pl-4">Locations:</p>
            <div className="mr-6 relative ml-4">
                <input
                    type="search"
                    placeholder="Find a location"
                    className="appearance-none outline-none border rounded py-2 pr-3 pl-10 w-full"
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('location')?.toString()}
                />
                <span className="opacity-50 text-xs absolute left-1 -bottom-5">Showing 1-10 of {info.count}</span>
                <div className="absolute left-0 top-0 flex items-center h-full pl-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4 text-slate-400">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                    </svg>
                </div>
            </div>
            <div ref={locationList} className="flex flex-col divide-y overflow-y-scroll inner-scroller">
                {
                    locations.map((location) => {
                        return (
                            <div key={location.id}
                                 className={`group flex justify-between items-center py-4 cursor-pointer ${location.id === activeLocation.id ? 'text-primary' : ''}`}
                                 onClick={() => {
                                     setLocation(location)
                                 }
                                 }
                            >
                                <div className="flex flex-col pl-4">
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
                <div
                    className={`pagination flex items-center justify-center rounded-l-lg ${page === 1 ? 'pointer-events-none opacity-50' : 'pointer-events-auto'}`}
                    onClick={() => {
                        if (page !== 1) {
                            updatePage(page - 1)
                        }
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                    </svg>
                </div>
                {
                    pages.map((currentPage) => {
                        return (
                            <div className={`pagination ${currentPage === page ? 'active' : ''}`}
                                 key={currentPage}
                                 onClick={() => {
                                     updatePage(currentPage)
                                 }}>
                                <span className="font-medium text-sm">{currentPage}</span>
                            </div>
                        )
                    })
                }
                <div
                    className={`pagination flex items-center justify-center rounded-r-lg ${page === info.pages ? 'pointer-events-none opacity-50' : 'pointer-events-auto'}`}
                    onClick={() => {
                        if (page !== info.pages) {
                            updatePage(page + 1)
                        }
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
