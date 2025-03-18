export interface ExpensesType {
  id: string;
  name: string;
  amount: number;
  type: "income" | "expense";
}

export interface ExpenseListProps {
  expenses: ExpensesType[];
}

export interface SortableExpenseCardProps {
  expense: ExpensesType;
  handleEdit: (expense: ExpensesType) => void;
  handleDelete: (id: string) => void;
}

export interface EditExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  expense: ExpensesType | null;
}
