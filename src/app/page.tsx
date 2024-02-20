import Image from "next/image";
import {getLocations} from "rickmortyapi";
import LocationsWidget from "@/app/components/LocationsWidget";

export default async function Home({searchParams,}: {
    searchParams?: {
        location?: string
        page?: string
    }
}) {
    const page = Number(searchParams?.page) || 1
    const locations = await getLocations({
        page,
        name: searchParams?.location || ''
    })

    return (
        <main className="h-screen">
            <div className="h-40 flex items-center bg-accent-1">
                <div className="container">
                    <div className="h-24 my-auto relative">
                        <Image src={'logo.svg'} alt={'Logo'} fill className="object-contain"/>
                    </div>
                </div>
            </div>
            <LocationsWidget
                locations={locations.data.results || []}
                info={locations.data.info}
                page={page}
            />
        </main>
    );
}
