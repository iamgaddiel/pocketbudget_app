import { atom } from "recoil";
import { Transaction } from "../@types/transactions";

export const transactionsDemoAtom = atom<Transaction[]>({
    key: "TRANSACTION",
    default: [
        {
          id: 1,
          category: "education",
          type: "expense",
          timestamp: "23:132:23",
          title: "Childrens School Fees",
          amount: "343,232.34",
        },
        {
          id: 2,
          category: "food",
          type: "income",
          timestamp: "23:132:23",
          title: "Childrens School Fees",
          amount: "343,000.34",
        },
        {
          id: 3,
          category: "shopping",
          type: "income",
          timestamp: "23:132:23",
          title: "Childrens School Fees",
          amount: "234,670.34",
        },
        {
          id: 4,
          category: "transportation",
          type: "income",
          timestamp: "23:132:23",
          title: "Childrens School Fees",
          amount: "345,345.34",
        },
      ]
})