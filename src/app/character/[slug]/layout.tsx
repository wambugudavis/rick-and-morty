import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import TabsHeader from "@/app/components/TabsHeader";

export const metadata: Metadata = {
    title: "Character",
    description: "Wubba lubba dub dub",
};

export default function CharacterLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            <div className="container grid grid-cols-3 h-screen">
                <div className="h-full px-12 border-r py-6 flex flex-col">
                    <Link href={'/'} className="flex items-center gap-3 opacity-50 hover:opacity-100 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                        </svg>
                        <span>Go back</span>
                    </Link>
                    <div className="py-6 pr-12">
                        <div className="h-[40vh] w-full relative rounded-lg overflow-hidden">
                            <Image src={'https://rickandmortyapi.com/api/character/avatar/38.jpeg'}
                                   alt={''} fill className="object-cover object-center"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-xl">Alan Rails</p>
                        <p><span className="badge green">Alive</span></p>
                    </div>
                    <div className="py-6 flex flex-col gap-2">
                        <div className="grid grid-cols-2">
                            <p className="opacity-50">Species:</p>
                            <p className="">Human</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="opacity-50">Type:</p>
                            <p className="">Superhuman (Ghost trains summoner)</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="opacity-50">Gender:</p>
                            <p className="">Human</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="opacity-50">Origin:</p>
                            <p className="">Human</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="opacity-50">Location:</p>
                            <p className="">Human</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="opacity-50">No. of Episodes:</p>
                            <p className="">Human</p>
                        </div>
                    </div>
                </div>
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
