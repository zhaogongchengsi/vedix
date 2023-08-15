import { outputFile } from  'fs-extra'
import {join} from "path";

export interface ComponentMate {
    name: string,
    content: string
}

export  function createComponent (path: string ,mate: ComponentMate) {
    return outputFile(join(path, mate.name), mate.content, {
        encoding: "utf-8",
    })
}

