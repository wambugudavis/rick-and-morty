
'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function TabsHeader(){
    const pathname = usePathname().split('/')
    console.log(pathname);
    return (
        <div className="h-12 w-full bg-accent-1 flex text-sm">
            <Link href="/character/1/episodes" className={`tab ${pathname[3] === 'episodes' ? 'active' : ''}`}>Episodes</Link>
            <Link href="/character/1/notes" className={`tab ${pathname[3] === 'notes' ? 'active' : ''}`}>Saved Notes</Link>
        </div>
    )
}
