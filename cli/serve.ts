import { serve } from "https://deno.land/std@0.156.0/http/server.ts"
import { renderToString } from "https://esm.sh/react-dom@18.2.0/server"
import View from "./view.jsx"

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

    if (req.url.endsWith(".jsx")) {
        const { default: Component } = await import(
            getBaseDir() + "/" + dir + url.pathname + "?" + Math.random()
        )
        const body = renderToString(
            View({Component})
        )
        return new Response(body, {
            headers: {
                "Content-Type": "text/html"
            }
        })    
    }
}

function getBaseDir() {
    return Deno.cwd().replace("C:\\", "/")
}