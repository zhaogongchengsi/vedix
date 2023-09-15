
declare interface Component {
	file: string, code: string, dependence?: string[]
}

declare const Components = new Map<string, Component>()

export default Components