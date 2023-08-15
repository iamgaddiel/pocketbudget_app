import { TransactionType } from "./transactions"


type BudgetCategory = "urgent" | "needed" | "important" | "whishlist"

export interface Budget{
    title: string
    timestamp: string
    is_complete: boolean
    deadline: string
    initialBudget: string
}

export interface BudgetItem{
    id?: string
    title: string
    amount: string
    category: BudgetCategory
    transactionType: TransactionType
    created: string,
    updated: string
    is_complete: boolean
    aditional_decription: string
}