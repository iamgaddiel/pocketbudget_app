import { atom } from "recoil";
import { BudgetItem } from "../@types/budget";


export const budgetDemoAtom = atom<BudgetItem[]>({
    key: "demo_budgets",
    default: [
        {
            title: "Buy Car",
            category: "urgent",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            amount: "344,000"
        },
        {
            title: "Buy Car",
            category: "urgent",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            amount: "344,000"
        },
        {
            title: "fill gas",
            category: "urgent",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            amount: "344,000"
        },
        {
            title: "Get Ipad",
            category: "needed",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            amount: "344,000"
        },
        {
            title: "Buy TV",
            category: "whishlist",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            amount: "344,000"
        },
        {
            title: "Buy a Gasoline Generator",
            category: "needed",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            amount: "344,000"
        },
        {
            title: "Go shoping",
            category: "important",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            amount: "344,000"
        },
        {
            title: "Pay Debt",
            category: "needed",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            amount: "344,000"
        },
        {
            title: "Go on a vacation",
            category: "needed",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            amount: "344,000"
        },
        {
            title: "Own a house",
            category: "whishlist",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            amount: "344,000"
        },
        {
            title: "Hmmmmm",
            category: "whishlist",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            amount: "344,000"
        },
    ]
})