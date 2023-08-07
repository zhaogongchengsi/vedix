import { describe, it, expect } from 'vitest'
import {createVueTemplate, createVueScript, createVueStyle, createVueSfc} from './sfc'

describe('sfc', () => {

    it('create template', () => {

        const str = createVueTemplate('<h1>hello world</h1>')

        expect(str).toMatchInlineSnapshot(`
          "<template>
            <h1>hello world</h1>
          </template>"
        `)

    })

    it('create script', () => {
        const str = createVueScript({
            content: `console.log('hello wold')`,
            attrs:{
                setup: true,
                lang: 'ts'
            }
        })
        
        expect(str).toMatchInlineSnapshot(`
          "<script lang='ts' setup >
          console.log('hello wold')
          </script>"
        `)

    })

    it('create style', () => {

        const str = createVueStyle({
            content: `.container 
            {
                font-size: 10px;
            }
            `,
            attrs:{
                lang: 'scss',
                scoped: true
            }
        })
        
        expect(str).toMatchInlineSnapshot(`
          "<style scoped  >
           .container 
                      {
                          font-size: 10px;
                      }
                      </style>"
        `)

    });

    it('create vue', () => {

        const str = createVueSfc({
            style: {
                content: `.container 
            {
                font-size: 10px;
            }
            `,
                attrs:{
                    lang: 'scss',
                    scoped: true
                }
            },
            script:{
                content: `console.log('hello wold')`,
                attrs:{
                    setup: true,
                    lang: 'ts'
                }
            },
            template: `<h1>hello world</h1>`
        })

        expect(str).toMatchInlineSnapshot(`
          "<script lang='ts' setup >
          console.log('hello wold')
          </script>,

          <template>
            <h1>hello world</h1>
          </template>,

          <style scoped  >
           .container 
                      {
                          font-size: 10px;
                      }
                      </style>"
        `)

    })


})

