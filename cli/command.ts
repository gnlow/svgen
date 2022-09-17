import { Command } from "https://deno.land/x/cliffy@v0.25.1/command/mod.ts"

import serve from "./serve.ts"

await new Command()
    .name("svgen")
    .description("Code your graphic.")

    .arguments("<dir:string>")
    .action(async (_option, dir) => {
        await serve(dir)
    })

    .parse()