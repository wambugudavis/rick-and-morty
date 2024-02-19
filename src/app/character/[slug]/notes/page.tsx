export default function CharacterNotesPage() {

    return (
        <div className="flex flex-col">
            <div className="relative">
                <label htmlFor="note" className="font-medium text-primary text-sm">Add Note</label>
                <textarea
                    id="note"
                    rows={5}
                    placeholder="Type something..."
                    className="appearance-none outline-none border rounded py-2 px-3 w-full"
                />
                <div className="flex justify-between">
                    <p className="opacity-50 text-xs">You are signed in as <span className="underline">Admin</span></p>
                    <span className="opacity-50 text-xs">0/50</span>
                </div>
                <button className="mt-4 text-sm bg-primary text-white px-4 py-1.5 rounded font-medium">Save</button>
            </div>
            <div className="flex flex-col gap-3 py-12">
                {
                    Array.from(Array(16).keys()).map((note) => {
                        return (
                            <div key={note} className="py-2 flex flex-col">
                                <span className="text-slate-400 text-xs px-2 font-medium">22/06/2024</span>
                                <div className="bg-white shadow-lg w-full p-4 border rounded-lg">
                                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Corporis dolore iste minus
                                        quia tempore. At nemo quas quidem voluptatem. Culpa deleniti doloremque eaque
                                        fuga,
                                        harum illo ipsum quae suscipit totam.</p>
                                    <p className="text-right text-sm opacity-70">By Admin</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
