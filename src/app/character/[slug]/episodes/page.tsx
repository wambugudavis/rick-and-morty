'use client'

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {Episode} from "rickmortyapi";
import {useDebouncedCallback} from "use-debounce";

export default function CharacterEpisodesPage() {

    const [episodes, setEpisodes] = useState<Episode[]>([])
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    useEffect(() => {
        const id = pathname.split('/')[2]
        fetch('https://rickandmortyapi.com/api/character/' + id)
            .then(response => response.json())
            .then(data => {
                const ids = data.episode.map((url: string) => {
                    return Number(url.replace('https://rickandmortyapi.com/api/episode/', ''))
                })
                fetch('https://rickandmortyapi.com/api/episode/' + ids.join(','))
                    .then(response => response.json())
                    .then(data => {
                        if (ids.length > 1) {
                            setEpisodes(data)
                        } else {
                            setEpisodes([data])
                        }
                    })
            })
    }, [])

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('episode', term);
        } else {
            params.delete('episode');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="flex flex-col">
            <div className="text-right relative">
                <input
                    type="search"
                    placeholder="Find an episode"
                    className="appearance-none outline-none border rounded py-2 px-3 w-full"
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('episode')?.toString()}
                />
                <span className="opacity-50 text-xs absolute right-0 -bottom-5">Filter by episode name</span>
                <div className="absolute right-0 top-0 flex items-center h-full pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-slate-400">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col gap-3 py-12 divide-y">
                {
                    episodes
                        .filter((episode) => {
                            const term = searchParams.get('episode')?.toString().toLowerCase()
                            return term === undefined ? episode : episode.name.toLowerCase().includes(term || '');
                        })
                        .map((episode) => {
                        return (
                            <div key={episode.id} className="pt-4">
                                <div className="grid grid-cols-3">
                                    <div className="flex flex-col">
                                        <p className="opacity-80 font-semibold text-sm">{episode.episode}</p>
                                        <p className="text-primary text-xs">{episode.air_date}</p>
                                    </div>
                                    <div className="font-semibold col-span-2">{episode.name}</div>
                                </div>
                            </div>
                        )
                    })                }
            </div>
        </div>
    )
}
