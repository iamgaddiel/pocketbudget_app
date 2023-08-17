import { atom } from "recoil";
import { Transaction } from "../@types/transactions";
import { TRANSACTIONS } from "../helpers/keys";

export const demoTransactionAtom = atom<Transaction[]>({
    key: "TRANSACTION_DEMO",
    default: [
        {
          id: '1',
          category: "education",
          type: "expense",
          timestamp: 123232,
          title: "Childrens School Fees",
          amount: 233404,
        },
        {
          id: '2',
          category: "food",
          type: "income",
          timestamp: 232323,
          title: "Childrens School Fees",
          amount: 384934,
        },
        {
          id: '3',
          category: "shopping",
          type: "income",
          timestamp: 23323,
          title: "Childrens School Fees",
          amount: 349494,
        },
        {
          id: '4',
          category: "transportation",
          type: "income",
          timestamp: 434343,
          title: "Childrens School Fees",
          amount: 203945,
        },
      ]
})

export const transactionsAtom = atom<Transaction[]>({
    key: TRANSACTIONS,
    default: []
})


