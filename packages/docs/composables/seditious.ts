import { isClient } from '@vueuse/core'

export function seditious (initName: string = '') {

	if (isClient) {
		initName != '' && document.body.classList.add(initName)
	}

	const setName = (name: string) => {
		if (isClient) {
			document.body.classList.add(name)
		}
	}

	const trigger  = (name: string) => {
		if (isClient) {
			document.body.classList.toggle(name)
		}
	}

	const removeName = (name: string) => {
		if (isClient) {
			document.body.classList.remove(name)
		}
	}

	return {
		trigger,
		setName,
		removeName
	}
}