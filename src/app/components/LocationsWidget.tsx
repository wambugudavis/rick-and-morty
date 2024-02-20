'use client'

import {useEffect, useRef, useState} from "react";
import LeftPane from "@/app/components/LeftPane";
import Link from "next/link";
import Image from "next/image";
import {Location} from "rickmortyapi";
import {LocationInfo} from "@/app/types";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import CharacterList from "@/app/components/CharacterList";
import {gsap} from "gsap";

export default function LocationsWidget({
                                            locations, info = {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    }, page
                                        }: {
    locations: Location[],
    info?: LocationInfo,
    page: number
}) {

    const [newPage, setNewPage] = useState(page)
    const [location, setLocation] = useState<Location>(locations[0])
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const leftPane = useRef<any>(null)
    const rightPane = useRef<any>(null)

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage.toString());
        router.push(`${pathname}?${params.toString()}`, {scroll: false});
    }, [newPage])

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (leftPane.current) {
                gsap.to(leftPane.current, {
                    scrollTrigger: {
                        trigger: leftPane.current,
                        id: 'p1',
                        // markers: true,
                        anticipatePin: 1,
                        scrub: 1,
                        start: 'top top',
                        end: "+=" + rightPane.current.offsetHeight,
                        pin: true,
                        pinSpacing: false
                    }
                })
            }
        });
        return () => ctx.revert();
    }, [location])

    return (
        <div className="h-screen container grid grid-cols-3">
            <div ref={leftPane}>
                <LeftPane locations={locations} info={info} page={newPage} updatePage={setNewPage} setLocation={setLocation} activeLocation={location}/>
            </div>
            <div ref={rightPane} className="bg-slate-100 col-span-2 py-8 px-6 flex flex-col gap-y-6">
                <div className="flex justify-between">
                    <p className="font-medium opacity-70 text-sm">{location.name} Residents:</p>
                    <div className="text-right relative">
                        <input
                            type="search"
                            placeholder="Find a resident"
                            className="appearance-none outline-none border rounded py-2 px-3 w-full"
                        />
                        <span
                            className="opacity-50 text-xs absolute right-0 -bottom-5">Filter by resident&apos;s name</span>
                        <div className="absolute right-0 top-0 flex items-center h-full pr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-slate-400">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <CharacterList characters={location.residents}/>
            </div>
        </div>
    )
}
