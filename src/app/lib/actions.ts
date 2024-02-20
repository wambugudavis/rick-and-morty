'use server';

import {z} from 'zod';
import {sql} from '@vercel/postgres';
import {revalidatePath} from 'next/cache';
import {redirect} from 'next/navigation';

const FormSchema = z.object({
    characterId: z.string(),
    note: z.string(),
});
const AddNote = FormSchema;

export async function addCharacterNote(formData: FormData) {
    const {characterId, note} = AddNote.parse({
        characterId: formData.get('characterId'),
        note: formData.get('note'),
    });

    await sql`
        INSERT INTO character_notes (characterId, note)
        VALUES (${characterId}, ${note})
    `;

    revalidatePath('/character/' + characterId + '/notes');
    redirect('/character/' + characterId + '/notes');
}
