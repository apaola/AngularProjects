import { Category } from "./category";

export interface Transaction {
    amount: number,
    date: Date,
    category: Category
}