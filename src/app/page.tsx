import Image from "next/image";
import LeftPane from "@/app/components/LeftPane";
import Link from "next/link";

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
                <LeftPane/>
                <div className="col-span-2 py-8 px-6 flex flex-col gap-y-6">
                    <div className="flex justify-between">
                        <p className="font-medium opacity-70 text-sm">Residents:</p>
                        <div className="text-right relative">
                            <input
                                type="search"
                                placeholder="Find a resident"
                                className="appearance-none outline-none border rounded py-2 px-3 w-full"
                            />
                            <span className="opacity-50 text-xs absolute right-0 -bottom-5">Showing characters at location</span>
                            <div className="absolute right-0 top-0 flex items-center h-full pr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-6 py-6">
                        {
                            Array.from(Array(25).keys()).map((character: any) => {
                                return (
                                    <Link href={'/character/1'} className="flex flex-col group" key={character}>
                                        <div className="bg-white drop-shadow-lg p-1 rounded-lg group-hover:scale-105 cursor-pointer transition ease-in-out">
                                            <div className="h-[180px] 2xl:h-[200px] w-full relative rounded-lg overflow-hidden">
                                                <Image src={'https://rickandmortyapi.com/api/character/avatar/38.jpeg'}
                                                       alt={character.name} fill className="object-cover object-center"/>
                                                <span className="badge green absolute bottom-2 right-2 text-sm">Alive</span>
                                            </div>
                                        </div>
                                        <span className="font-semibold text-sm text-center pt-2 group-hover:text-primary">Rick Morty</span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
