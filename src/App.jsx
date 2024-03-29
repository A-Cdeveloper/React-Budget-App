import { useState } from "react";
import { useBudget } from "./context";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import BudgetCard from "./components/BudgetCard";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";
import ViewExpensesModal from "./components/ViewExpensesModal";
import { UNCATEGORIZER_BUDZET_ID } from "./context/BudgetContext";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [showViewxpensesModal, setViewExpensesModal] = useState(false);
  const [defaultBudgetId, setDefaultBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudget();

  const addDefaultBudgetIdHandler = (budgetId) => {
    setShowAddExpenseModal(true);
    setDefaultBudgetId(budgetId);
  };

  const openViewExpensesHandler = (budgetId) => {
    setViewExpensesModal(true);
    setDefaultBudgetId(budgetId);
  };

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap={2} className="mb-4">
          <h1 className="me-auto fs-2">Budgets</h1>
          <ButtonGroup aria-label="Buttons">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowAddBudgetModal(true)}
            >
              Add Budget
            </Button>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => addDefaultBudgetIdHandler(UNCATEGORIZER_BUDZET_ID)}
            >
              Add Expense
            </Button>
          </ButtonGroup>
        </Stack>
        <div className="cardBox">
          {budgets.map((budget) => {
            const amount = getBudgetExpenses(budget.id).reduce((acc, cur) => {
              return acc + cur.amount;
            }, 0);
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                addDefaultBudgetId={() => addDefaultBudgetIdHandler(budget.id)}
                viewExpenses={() => openViewExpensesHandler(budget.id)}
              />
            );
          })}
          <UncategorizedBudgetCard
            addDefaultBudgetId={addDefaultBudgetIdHandler}
            viewExpenses={() =>
              openViewExpensesHandler(UNCATEGORIZER_BUDZET_ID)
            }
          />
          <TotalBudgetCard />
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        handleClose={() => setShowAddExpenseModal(false)}
        defaultBudgetId={defaultBudgetId}
      />
      <ViewExpensesModal
        show={showViewxpensesModal}
        handleClose={() => setViewExpensesModal(false)}
        defaultBudgetId={defaultBudgetId}
      />
    </>
  );
}

export default App;
