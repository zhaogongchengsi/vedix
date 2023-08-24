import { isClient } from '@vueuse/core'

export function seditious (initName: string = '') {

	const element = isClient ? document.documentElement : null

	if (isClient) {
		initName != '' && element && element.classList.add(initName)
	}

	const setName = (name: string) => {
			element && element.classList.add(name)
	}

	const trigger  = (name: string) => {
			element && element.classList.toggle(name)
	}

	const removeName = (name: string) => {
			element && element.classList.remove(name)
	}

	return {
		trigger,
		setName,
		removeName
	}
}