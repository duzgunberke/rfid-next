export const GET = async ()=>{
    try {
        return new Response(JSON.stringify("Kart verisi alındı"),{status: 200})
    } catch (error) {
        return new Response("Yarrraaaaaa",{status: 500})

    }
}