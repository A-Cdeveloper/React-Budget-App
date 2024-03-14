import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

export const BudgetContext = createContext();

// budget
// {
//   id:
//   name:
//   max:
// }
// expense
// {
//   id:
//   budgeid:
//   amount:
//   description:
// }

export const UNCATEGORIZER_BUDZET_ID = "Uncategorized";

// eslint-disable-next-line react/prop-types
export const BudgetContextProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const getBudgetExpenses = (budgetId) => {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  };

  const addExpense = ({ budgetId, amount, description }) => {
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        {
          id: uuidv4(),
          budgetId,
          amount,
          description,
        },
      ];
    });
  };
  const addBudget = ({ name, max }) => {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((el) => el.name === name)) return prevBudgets;
      return [
        ...prevBudgets,
        {
          id: uuidv4(),
          name,
          max,
        },
      ];
    });
  };

  const deleteExpense = (expenseId) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== expenseId);
    });
  };
  const deleteBudget = (budgetId) => {
    //  TODO
    // extra logic for expenses
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== budgetId);
    });
  };

  const value = {
    budgets,
    expenses,
    getBudgetExpenses,
    addExpense,
    addBudget,
    deleteExpense,
    deleteBudget,
  };
  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};
