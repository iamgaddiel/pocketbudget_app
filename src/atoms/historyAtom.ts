import { atom } from "recoil";
import { Transaction } from "../@types/transactions";


export const historyAtom = atom<Transaction[]>({
    key: 'history',
    default: []
})
