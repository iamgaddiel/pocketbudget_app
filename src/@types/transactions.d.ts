export type TransactionType = "income" | "expense";

export type TransactionCaegory =
  | "transportation"
  | "food"
  | "gift"
  | "savings"
  | "health"
  | "utility"
  | "education"
  | "travel"
  | "shopping"
  | "personal"
  | "telecomes";

export interface Transaction {
  id: string | number;
  category: TransactionCaegory;
  type: TransactionType;
  timestamp: string;
  title: string;
  description?: string;
  amount: number
}


export interface TrasctionDetailParam{
    transactionType : TransactionType
    trasactionId: string
}

