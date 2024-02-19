export default function CharacterEpisodesPage() {

    return (
        <div className="flex flex-col">
            <div className="text-right relative">
                <input
                    type="search"
                    placeholder="Find an episode"
                    className="appearance-none outline-none border rounded py-2 px-3 w-full"
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
                    Array.from(Array(16).keys()).map((episode) => {
                        return (
                            <div key={episode} className="py-2">
                                <div className="grid grid-cols-3">
                                    <div className="opacity-50 font-semibold">S01E10</div>
                                    <div className="flex flex-col col-span-2">
                                        <p className="font-semibold">Close Rick-counters of the Rick Kind</p>
                                        <p className="text-primary text-xs">April 7, 2014</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })                }
            </div>
        </div>
    )
}
