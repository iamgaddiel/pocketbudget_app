import { atom } from "recoil";
import { Budget, BudgetItem } from "../@types/budget";
import { BUDGETS, BUDGET_ITEMS } from "../helpers/keys";


export const budgetDemoAtom = atom<BudgetItem[]>({
    key: "demo_budgets",
    default: [
        {
            title: "Buy Car",
            category: "urgent",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            budget: "",
            is_complete: false,
            aditional_decription: '',
            amount: "344,000"
        },
        {
            title: "Buy Car",
            category: "urgent",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            budget: "",
            is_complete: false,
            aditional_decription: '',
            amount: "344,000"
        },
        {
            title: "fill gas",
            category: "urgent",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            budget: "",
            is_complete: false,
            aditional_decription: '',
            amount: "344,000"
        },
        {
            title: "Get Ipad",
            category: "needed",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            budget: "",
            is_complete: false,
            aditional_decription: '',
            amount: "344,000"
        },
        {
            title: "Buy TV",
            category: "whishlist",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            budget: "",
            is_complete: false,
            aditional_decription: '',
            amount: "344,000"
        },
        {
            title: "Buy a Gasoline Generator",
            category: "needed",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            budget: "",
            is_complete: false,
            aditional_decription: '',
            amount: "344,000"
        },
        {
            title: "Go shoping",
            category: "important",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            budget: "",
            is_complete: false,
            aditional_decription: '',
            amount: "344,000"
        },
        {
            title: "Pay Debt",
            category: "needed",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            budget: "",
            is_complete: false,
            aditional_decription: '',
            amount: "344,000"
        },
        {
            title: "Go on a vacation",
            category: "needed",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            budget: "",
            is_complete: false,
            aditional_decription: '',
            amount: "344,000"
        },
        {
            title: "Own a house",
            category: "whishlist",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            budget: "",
            is_complete: false,
            aditional_decription: '',
            amount: "344,000"
        },
        {
            title: "Hmmmmm",
            category: "whishlist",
            created: "12:00pm",
            transactionType: "expense",
            updated: "",
            budget: "",
            is_complete: false,
            aditional_decription: '',
            amount: "344,000"
        },
    ]
})

export const budgetAtom = atom<Budget[]>({
    key: BUDGETS,
    default: []
})

export const budgetItemAtom = atom<BudgetItem[]>({
    key: BUDGET_ITEMS,
    default: []
})
