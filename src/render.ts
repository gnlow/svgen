import { renderToString } from "https://esm.sh/react-dom@18.2.0/server"

const { default: Component } = await import(Deno.args[0])

console.log(renderToString(Component()))