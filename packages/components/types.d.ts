
declare interface Component {
	content: string | Record<string, string>;
	dependence?: string[]
}

declare const Components = new Map<string, Component>()

export default Components