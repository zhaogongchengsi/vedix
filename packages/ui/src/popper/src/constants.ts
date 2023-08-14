import type { CSSProperties, ComputedRef, InjectionKey, Ref } from 'vue'
import type { Instance } from '@popperjs/core'

export type Measurable = {
  getBoundingClientRect: () => DOMRect
}

/**
 * triggerRef indicates the element that triggers popper
 * contentRef indicates the element of popper content
 * referenceRef indicates the element that popper content relative with
 */
export type PopperInjectionContext = {
  triggerRef: Ref<Measurable | undefined>
  contentRef: Ref<HTMLElement | undefined>
  popperInstanceRef: Ref<Instance | undefined>
  referenceRef: Ref<Measurable | undefined>
  role: ComputedRef<string>
}

export type PopperContentInjectionContext = {
  arrowRef: Ref<HTMLElement | undefined>
  arrowOffset: Ref<number | undefined>
  arrowStyle: ComputedRef<CSSProperties>
}

// Injection key for context
export const POPPER_INJECTION_KEY: InjectionKey<PopperInjectionContext> =
  Symbol('popper')

// Injection key for content
export const POPPER_CONTENT_INJECTION_KEY: InjectionKey<PopperContentInjectionContext> =
  Symbol('popperContent')
