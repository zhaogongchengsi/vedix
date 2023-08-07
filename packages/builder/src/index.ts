
import { components } from './map'
import { compile } from 'handlebars'
import { type BuilderOptions } from  './option'

export {
    components,
    type BuilderOptions
}


export  function  createComponent (temp : string , options: BuilderOptions = {vsr: false, ts: true}) {
    return compile(temp)(options)
}

