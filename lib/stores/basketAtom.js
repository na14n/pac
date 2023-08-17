import { atom } from "jotai";
import {atomWithStorage} from "jotai/utils"

export const BasketAtom = atomWithStorage('basket', []);