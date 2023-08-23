
export function useLinks () :any {
    const { navigation } = useContent()
    const { config } = useDocus()
    const filtered = computed(() => config.value.aside?.exclude || [])
    const included = computed<{path: string, icon: string}[]>(() => config.value.aside?.include || [])
    const routerList = useArrayMap(included, item => {
        return {
            ...item,
            _path: item.path
        }
    })

    return  computed(() => {
        return (navigation.value || []).filter((item: any) => {
            return !filtered.value.includes(item._path);
        }).concat(routerList.value)
    })
}
