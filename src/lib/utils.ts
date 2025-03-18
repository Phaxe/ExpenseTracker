import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
interface ExpensesType {
  id: string;
  name: string;
  amount: number;
  type: "income" | "expense";
}

export function calculateTotals(transactions: ExpensesType[] = []) {
  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + Math.abs(item.amount), 0);

  const balance = totalIncome -totalExpenses;

  return { totalIncome, totalExpenses, balance };
}
