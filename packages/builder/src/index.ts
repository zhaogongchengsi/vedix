
import { components } from './map'
import { compile } from 'handlebars'
import { type BuilderOptions } from  './option'
import { zinc, colors, generateColor, neutral, slate, stone, transform } from './colors'


function  createComponent (temp : string , options: BuilderOptions = {vsr: false, ts: true}) {
    return compile(temp)(options)
}

export {
    components,
    createComponent,
    zinc, colors, generateColor, neutral, slate, stone, transform,
    type BuilderOptions
}

