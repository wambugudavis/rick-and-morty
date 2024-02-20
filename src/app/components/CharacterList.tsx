'use client'

import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {Character} from "rickmortyapi";


export default function CharacterList({characters}: {
    characters: string[]
}) {
    const [residents, setResidents] = useState<Character[]>([])

    useEffect(() => {
        const ids = characters.map((url: string) => {
            return Number(url.replace('https://rickandmortyapi.com/api/character/', ''))
        })
        fetch('https://rickandmortyapi.com/api/character/' + ids.join(','))
            .then(response => response.json())
            .then(data => {
                if (ids.length > 1) {
                    setResidents(data)
                } else {
                    setResidents([data])
                }
            })
    }, [characters])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }, [residents])

    return (
        <div className="grid grid-cols-5 gap-6 py-6">
            {
                residents.map((character: any) => {
                    return (
                        <Link key={character.id} href={'/character/' + character.id + '/episodes'} className="flex flex-col group">
                            <div
                                className="bg-white drop-shadow-lg p-1 rounded-lg group-hover:scale-105 cursor-pointer transition ease-in-out">
                                <div
                                    className="h-[180px] 2xl:h-[200px] w-full relative rounded-lg overflow-hidden">
                                    <Image src={character.image}
                                           alt={character.name} fill
                                           className="object-cover object-center"/>
                                    <div className="absolute top-2 right-2">
                                        {
                                            character.status?.toLowerCase() === 'alive' ?
                                                <span className="badge green">{character.status}</span>
                                                : character.status?.toLowerCase() === 'dead' ?
                                                    <span className="badge red">{character.status}</span>
                                                    :
                                                    <span className="badge gray">unknown</span>

                                        }
                                    </div>
                                </div>
                            </div>
                            <span
                                className="font-semibold text-sm text-center pt-2 group-hover:text-primary">{character.name}</span>
                        </Link>
                    )
                })
            }
        </div>
    )
}
