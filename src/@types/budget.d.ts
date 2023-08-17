import { TransactionCaegory } from "./transactions"


type BudgetCategory = "urgent" | "needed" | "important" | "whishlist"

export interface Budget{
    id?: sting
    title: string
    timestamp: string
    is_complete: boolean
    deadline: number
    initialBudget: string
}

export interface BudgetItem{
    id?: string
    title: string
    amount: number
    category: BudgetCategory
    type: TransactionCaegory
    aditional_decription: string
    budget?: string
    created?: number,
    updated?: number
    is_complete?: boolean
}