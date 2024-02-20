'use client'

import Link from "next/link";
import Image from "next/image";
import TabsHeader from "@/app/components/TabsHeader";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {Character} from "rickmortyapi";

export default function CharacterLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname();
    const [character, setCharacter] = useState<Character>()

    useEffect(() => {
        const id = pathname.split('/')[2]
        fetch('https://rickandmortyapi.com/api/character/' + id)
            .then(response => response.json())
            .then(data => {
                setCharacter(data)
            })
    }, [])

    return (
        <div className="">
            <div className="container grid grid-cols-3 h-screen">
                {
                    character !== undefined ?
                        <div className="h-full px-12 border-r py-6 flex flex-col">
                            <Link href={'/'} className="flex items-center gap-3 opacity-50 hover:opacity-100 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                                </svg>
                                <span>Go back</span>
                            </Link>
                            <div className="py-6 pr-12">
                                <div className="h-[40vh] w-full relative rounded-lg overflow-hidden">
                                    {character.image &&
                                        <Image src={character.image}
                                               alt={''} fill className="object-cover object-center"/>
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-xl">{character.name}</p>
                                <p className="">
                                    {
                                        character.status?.toLowerCase() === 'alive' ?
                                            <span className="badge green text-base">{character.status}</span>
                                            : character.status?.toLowerCase() === 'dead' ?
                                                <span className="badge red text-base">{character.status}</span>
                                                :
                                                <span className="badge gray text-base">unknown</span>

                                    }
                                </p>
                            </div>
                            <div className="py-6 flex flex-col gap-2">
                                <div className="grid grid-cols-2">
                                    <p className="opacity-50">Species:</p>
                                    <p className="">{character.species}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="opacity-50">Type:</p>
                                    <p className="">{character.type}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="opacity-50">Gender:</p>
                                    <p className="">{character.gender}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="opacity-50">Origin:</p>
                                    <p className="">{character.origin.name}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="opacity-50">Location:</p>
                                    <p className="">{character.location.name}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="opacity-50">No. of Episodes:</p>
                                    <p className="">{character.episode.length}</p>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                }
                <div className="h-full px-12 col-span-2 py-6 flex flex-col">
                    <TabsHeader/>
                    <div className="py-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
