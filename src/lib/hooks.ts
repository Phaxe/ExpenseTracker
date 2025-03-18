import { useState, useEffect } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";

interface ExpensesType {
  id: string;
  name: string;
  amount: number;
  type: "income" | "expense";
}

export function useSortableExpenses(expenses: ExpensesType[]) {
  const [sortedExpenses, setSortedExpenses] = useState<ExpensesType[]>(expenses);

  // 🔄 Sync when Redux state updates (like after delete/edit)
  useEffect(() => {
    setSortedExpenses(expenses);
  }, [expenses]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = sortedExpenses.findIndex((exp) => exp.id === active.id);
    const newIndex = sortedExpenses.findIndex((exp) => exp.id === over.id);

    setSortedExpenses(arrayMove(sortedExpenses, oldIndex, newIndex));
  };

  return { sortedExpenses, setSortedExpenses, handleDragEnd };
}
