export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const ids = searchParams.get('ids')
    const res = await fetch(`https://rickandmortyapi.com/api/character/${ids}`)
    const characters = await res.json()

    return Response.json(characters)
}
