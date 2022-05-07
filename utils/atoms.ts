import { atom } from "jotai";
import { Chain } from "../types/moralis";

export const moralisLoginModalAtom = atom(false);

export const moralisChain = atom<Chain>("eth");
