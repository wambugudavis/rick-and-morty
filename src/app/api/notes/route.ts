import {sql} from '@vercel/postgres';

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get('id')

    const data = await sql`
        SELECT *
        FROM character_notes
        WHERE characterId = ${id}
        ORDER BY created_at DESC;
    `;

    return Response.json(data.rows)
}
