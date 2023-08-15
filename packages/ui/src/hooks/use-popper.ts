import {computed, onMounted, unref, ref, watch} from 'vue'
import {createPopper, OptionsGeneric} from '@popperjs/core'
import {isClient} from '@vueuse/core'
import type {ShallowReactive, Ref} from 'vue'
import type {Instance, Options, Modifier} from '@popperjs/core'

export interface IUsePopperOptions {
    reference: Ref<HTMLElement | undefined>,
    floating: Ref<HTMLElement | undefined>,
    placement: Options["placement"]
    strategy: Options["strategy"]
}

export type UsePopperOptions = ShallowReactive<IUsePopperOptions>

export type Middlewares = Ref<Modifier<string, any>[]>

export type OffsetValue =
    | number
    | Partial<{
    /**
     * The axis that runs along the side of the floating element. Represents
     * the distance (gutter or margin) between the reference and floating
     * element.
     * @default 0
     */
    y: number;
    /**
     * The axis that runs along the alignment of the floating element.
     * Represents the skidding between the reference and floating element.
     * @default 0
     */
    x: number;
}>;

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
export type OffsetOptions = Ref<OffsetValue>

export type OffsetModifier = Modifier<"offset", { offset: [number, number] }>

export type Middleware = Partial<OffsetModifier>

export const usePopper = (options: UsePopperOptions, modifiers: Middleware[] = []) => {
    const placement = computed(() => unref(options.placement) ?? 'bottom');
    const strategy = computed(() => unref(options.strategy) ?? 'absolute');
    const popperInstance = ref<Instance | null>(null)

    const init = (options: UsePopperOptions) => {
        const ref = unref(options.reference)
        const float = unref(options.floating)

        if (ref && float && isClient) {
            popperInstance.value = createPopper(ref, float, {
                placement: placement.value,
                strategy: strategy.value,
                modifiers: modifiers
            })
        }
    }

    onMounted(() => init(options))
    watch(options, (options) => init(options))

    const setOption = (opt: Partial<OptionsGeneric<any>>) => {
        if (!unref(popperInstance) || !isClient) {
            return
        }

        unref(popperInstance)?.setOptions(options => {
            const ms = options.modifiers?.concat(opt.modifiers)
            return {
                ...options,
                ...opt,
                modifiers: ms
            }
        })
    }

    const floatingStyles = computed(() => {
        const initialStyles = {
            position: strategy.value,
            left: '0',
            top: '0',
        };

        if (!popperInstance.value || !isClient) {
            return initialStyles;
        }

        return unref(popperInstance)?.state.styles
    });

    return {
        popperInstance,
        placement,
        strategy,
        floatingStyles,
        setOption
    }
}

export  type UsePopperResult = ReturnType<typeof usePopper>
