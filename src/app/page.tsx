import Image from "next/image";

export default function Home() {
    return (
        <main className="h-screen">
            <div className="h-40 flex items-center bg-accent-1">
                <div className="container">
                    <div className="h-24 my-auto relative">
                        <Image src={'logo.svg'} alt={'Logo'} fill className="object-contain"/>
                    </div>
                </div>
            </div>
            <div className="h-screen container grid grid-cols-3">
                <div className="py-8 border-r flex flex-col gap-y-6 overflow-y-scroll inner-scroller">
                    <p className="font-medium opacity-70 text-sm">Locations:</p>
                    <div className="mr-6">
                        <input
                            type="search"
                            placeholder="Find a location"
                            className="appearance-none outline-none border rounded py-2 px-3 w-full"
                        />
                        <span className="opacity-50 text-xs">Showing 1-10 of 56</span>
                    </div>
                    <div className="flex flex-col divide-y">
                        {
                            Array.from(Array(10).keys()).map((location) => {
                                return (
                                    <div key={location} className="group flex justify-between items-center py-4 cursor-pointer">
                                        <div className="flex flex-col">
                                            <p className="font-semibold group-hover:text-primary transition ease-in-out">Citadel of Ricks</p>
                                            <p className="text-xs opacity-50">Space Station</p>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-6 group-hover:text-primary transition ease-in-out">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="py-4 flex justify-center">
                        <div className="pagination flex items-center justify-center rounded-l-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
