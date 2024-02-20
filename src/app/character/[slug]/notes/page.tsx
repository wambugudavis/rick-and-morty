'use client'

import {addCharacterNote} from '@/app/lib/actions';
import {usePathname} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import dayjs from "dayjs";

export default function CharacterNotesPage() {
    const [loading, setLoading] = useState(false)
    const formRef = useRef<any>()
    const [notes, setNotes] = useState<{
        characterid: string,
        id: string,
        created_at: string,
        note: string
    }[]>([])
    const pathname = usePathname();
    const id = pathname.split('/')[2]

    useEffect(() => {
        fetch('/api/notes?id=' + id)
            .then(response => response.json())
            .then(data => {
                setNotes(data)
            })
    }, [])


    return (
        <div className="flex flex-col">
            <form ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                setLoading(true)
                const data = new FormData(formRef.current);
                addCharacterNote(data).then((res) => {
                    console.log(res);
                    const updatedNotes = [...notes]
                    updatedNotes.unshift({
                        characterid: id,
                        id: dayjs(new Date()).format(),
                        created_at: dayjs(new Date()).format(),
                        note: data.get('note') as string
                    })
                    setNotes(updatedNotes)
                    setLoading(false)
                    formRef.current.reset()
                })
            }
            } className="relative">
                <label htmlFor="note" className="font-medium text-primary text-sm">Add Note</label>
                <input type="hidden" value={id} name="characterId"/>
                <textarea
                    id="note"
                    name="note"
                    rows={5}
                    placeholder="Type something..."
                    className="appearance-none outline-none border rounded py-2 px-3 w-full"
                />
                <div className="flex justify-between">
                    <p className="opacity-50 text-xs">You are signed in as <span className="underline">Admin</span></p>
                    <span className="opacity-50 text-xs">0/50</span>
                </div>
                <button type="submit"
                        disabled={loading}
                        className={`mt-4 text-sm bg-primary text-white px-4 py-1.5 rounded font-medium ${loading ? 'bg-accent-4': ''}`}>
                    {
                        loading ? <span>Saving...</span>
                            : <span>Save</span>
                    }
                </button>
            </form>
            <div className="flex flex-col gap-3 py-12">
                {
                    notes.length === 0 && <span className="opacity-50 w-full">No saved notes available.</span>
                }
                {
                    notes.map((note) => {
                        return (
                            <div key={note.id.toString()} className="py-2 flex flex-col">
                                <span
                                    className="text-slate-400 text-xs px-2 font-medium">{dayjs(note.created_at).format('DD/MM/YYYY  HH:mm a')}</span>
                                <div className="bg-white shadow-lg w-full p-4 border rounded-lg">
                                    <p className="">{note.note}</p>
                                    <p className="text-right text-sm opacity-70">By Admin</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
