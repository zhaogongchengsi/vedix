import type { InjectionKey } from 'vue'
import {UsePopperOptions} from "../hooks";

export const POPPER_INJECTION_KEY: InjectionKey<UsePopperOptions> = Symbol('popper')