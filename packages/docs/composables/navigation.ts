

export type RealNav = {
    text?: string
    link: string
    icon?: string
    redirect?: string
    items?: RealNav[]
}

export type PretendNav = {
    _path: string
    children?: PretendNav[]
    icon?: string
    title?: string
    redirect?: string
}

export function useNav  () :ComputedRef<RealNav[]> {
    const { config } = useDocus()

    return computed<RealNav[]>(() => {
        return  (unref(config).nav || [])
    })
}

export function usePretendNav  () :ComputedRef<PretendNav[]> {
    const links = useNav()

    const buildTree = ({ link, items, icon, text, redirect }: RealNav): PretendNav => {
        const pretendNavy: PretendNav = { _path: link }
        items && (pretendNavy.children = items?.map(item => buildTree(item)))
        icon && (pretendNavy.icon = icon)
        text && (pretendNavy.icon = text)
        redirect && (pretendNavy.redirect = redirect)
        return pretendNavy
    }

    return computed(() => {
        return links.value.map((link: RealNav) => buildTree(link))
    })
}