import { renderToString } from "https://esm.sh/react-dom@18.2.0/server"

export default async function render(input: string, output: string) {
    const { default: Component } = await import(input)
    await Deno.writeTextFile(output, renderToString(Component()))
}