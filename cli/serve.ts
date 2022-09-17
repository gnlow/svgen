import { serve } from "https://deno.land/std@0.156.0/http/server.ts"

export default async function (dir: string) {
    await serve(
        handler(dir), 
        {
            onListen({ port, hostname }) {
                console.log(`Server started at http://${hostname}:${port}`)
            }
        })
}

const handler = (dir: string) =>
async function (req: Request): Promise<Response> {
    const url = new URL(req.url)

    const body = await Deno.readTextFile(dir + url.pathname)
    return new Response(body, {
        headers: {
            "Content-Type": "image/svg+xml"
        }
    })
}