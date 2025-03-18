Expense Tracker

Overview

This is a feature-rich Expense Tracker built using React (Vite) + TypeScript, with Redux Toolkit (RTK Query) for state management and data fetching. It includes:

Mock API for managing expenses

ShadCN UI components for a sleek, modern design

Drag-and-Drop functionality using dnd-kit to reorder expenses

Real-time updates when adding, editing, or deleting expenses

Features

✅ Add, Edit, Delete Expenses (income & expenses)

✅ Drag & Drop to Reorder (dnd-kit integration)

✅ Redux Toolkit with RTK Query for API calls

✅ Mock API for managing expense data

✅ Modern UI with ShadCN + TailwindCSS

✅ TypeScript for type safety

✅ Persistent State Sync between Redux and Drag & Drop

Tech Stack

Frontend: React (Vite) + TypeScript

State Management: Redux Toolkit + RTK Query

UI Components: ShadCN + Tailwind CSS

Drag & Drop: dnd-kit

Mock API: JSON server or a mock service

Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-repo/expense-tracker.git
cd expense-tracker

2️⃣ Install Dependencies

yarn install  # or npm install

3️⃣ Start the Mock API Server

yarn json-server --watch db.json --port 5000  # If using JSON server

4️⃣ Start the App

yarn dev  # or npm run dev

Project Structure

/src
 ├── components
 │   ├── ExpenseList.tsx  # Expense cards & integration with sortable list
 │   ├── SortableExpenseCard.tsx  # Drag & drop individual cards
 │   ├── EditExpenseModal.tsx  # Modal for editing expenses
 │   └── ui/  # ShadCN UI components
 │
 ├── hooks
 │   ├── useSortableExpenses.ts  # Hook handling drag & drop logic
 │
 ├── Redux
 │   ├── store.ts  # Redux store setup
 │   ├── dataApiSlice.ts  # RTK Query for API calls
 │
 ├── pages
 │   ├── Home.tsx  # Main UI displaying expense list
 │
 ├── App.tsx  # Root component

Key Implementations

1️⃣ Drag & Drop with dnd-kit

We used dnd-kit to make expenses sortable.

const { sortedExpenses, handleDragEnd } = useSortableExpenses(expenses);

2️⃣ RTK Query for API Calls

Fetching expenses from a mock API:

const { data: expenses } = useGetExpensesQuery();

3️⃣ Real-time Updates

Ensuring expenses update properly after CRUD operations:

useEffect(() => {
  setSortedExpenses(expenses);
}, [expenses]);

Future Enhancements

🔹 Dark mode support

🔹 Detailed analytics & charts

🔹 User authentication

🚀 Made with ❤️ by Yahia Eid
