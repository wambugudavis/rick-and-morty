import Image from "next/image";

export default function Home() {
    return (
        <main className="h-screen">
            <div className="h-1/3 flex items-center  bg-accent-1">
                <div className="container grid grid-cols-2 ">
                    <div className="h-24 my-auto relative">
                        <Image src={'logo.svg'} alt={'Logo'} fill className="object-contain"/>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem, beatae consequuntur
                        eius eveniet fuga hic illo ipsa iste molestiae, odit, quasi sint soluta tempore vel voluptate
                        voluptates voluptatum. Iure.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem, beatae consequuntur
                        eius eveniet fuga hic illo ipsa iste molestiae, odit, quasi sint soluta tempore vel voluptate
                        voluptates voluptatum. Iure.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem, beatae consequuntur
                        eius eveniet fuga hic illo ipsa iste molestiae, odit, quasi sint soluta tempore vel voluptate
                        voluptates voluptatum. Iure.
                    </div>
                </div>
            </div>
            <div className="h-screen container grid grid-cols-3">
                <div className="py-8 border-r flex flex-col gap-y-6 overflow-y-scroll inner-scroller">
                    <p className="font-medium opacity-70 text-sm">Locations:</p>
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
                </div>
            </div>
        </main>
    );
}
