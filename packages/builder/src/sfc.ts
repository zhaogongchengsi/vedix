

export  interface Block {
    content: string
    attrs: Record<string, string | boolean | number>
}

export interface ScriptBlock extends Block {
    attrs:{
        lang: "ts",
        setup: boolean
    }
}

export interface StyleBlock extends Block {
    attrs: {
        lang: string
        scoped: boolean
    }
}

export interface VueSfC {
    template: string
    script: ScriptBlock
    style: StyleBlock
}

export  function  createSpace (length: number) :string{
    return Array.from({ length: length }).fill((" ")).join('')
}

export  function  createVueTemplate (template: string) {
    return `<template>\n${createSpace(2)}${template}\n</template>`
}

export  function  createVueScript ({ content, attrs }: ScriptBlock) :string {
    return `<script ${attrs.lang === 'ts' ? 'lang=\'ts\'' : ''} ${attrs.setup ? 'setup' : ''} >\n${content}\n</script>`
}

export  function  createVueStyle ({ content, attrs }: StyleBlock) :string {
    return `<style ${attrs.scoped ? 'scoped' : ''} ${attrs.lang === 'ts' ? 'lang=ts' : ''} >\n ${content}</style>`
}

export function createVueSfc (opt: VueSfC):string {
    return [
        createVueScript(opt.script),
        createVueTemplate(opt.template),
        createVueStyle(opt.style)
    ].join(',\n\n')
}