import button from './components/button'

export interface ComponentMate {
    name: string
    content: string
    file: string
    deps?: string[]
}

export const components = new Map<string, ComponentMate>([
    ['button', { name: 'button', content: button, file: 'button.vue' }]
])

