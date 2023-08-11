

import { isString } from './is'

class vedixError extends Error {
	constructor(m: string) {
		super(m)
		this.name = 'vedixError'
	}
}

export function throwError(scope: string, m: string): never {
	throw new vedixError(`[${scope}] ${m}`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
	if (process.env.NODE_ENV !== 'production') {
		const error: Error = isString(scope)
			? new vedixError(`[${scope}] ${message}`)
			: scope
		console.warn(error)
	}
}
