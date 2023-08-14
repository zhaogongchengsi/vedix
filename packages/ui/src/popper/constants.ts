import type { InjectionKey, Ref } from 'vue'

export type Measurable = {
	getBoundingClientRect: () => DOMRect
}

export type Strategy = 'absolute' | 'fixed';
export type Placement = 'auto'
	| 'auto-start'
	| 'auto-end'
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'right'
	| 'right-start'
	| 'right-end'
	| 'left'
	| 'left-start'
	| 'left-end';

export type PopperInjectionContext = {
	triggerRef: Ref<HTMLElement | undefined>
	contentRef: Ref<HTMLElement | undefined>
	arrowRef: Ref<HTMLElement | undefined>
	strategy: Ref<Strategy | undefined>
	placement: Ref<Placement | undefined>
}


export const POPPER_INJECTION_KEY: InjectionKey<PopperInjectionContext> = Symbol('popper')
export const POPPER_CONTENT_INJECTION_KEY: InjectionKey<string> = Symbol('popperContent')