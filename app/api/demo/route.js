export const GET = async ()=>{
    try {
        return new Response(JSON.stringify("Başarılı bir istek attın"),{status: 200})
    } catch (error) {
        return new Response("Failed to fetch all prompt",{status: 500})

    }
}