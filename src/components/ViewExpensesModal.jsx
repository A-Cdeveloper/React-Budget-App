import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";

import { useBudget } from "../context";
import Expense from "./Expense";
import Button from "react-bootstrap/Button";

// eslint-disable-next-line react/prop-types
const ViewExpensesModal = ({ show, handleClose, defaultBudgetId }) => {
  const { getBudgetExpenses, budgets } = useBudget();

  const budgetName =
    defaultBudgetId === "Uncategorized"
      ? "Uncategorized"
      : budgets.filter((el) => el.id === defaultBudgetId)[0]?.name;

  const expenses = getBudgetExpenses(defaultBudgetId);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          Expenses - {budgetName}{" "}
          <Button type="button" variant="outline-danger" className="ms-2">
            Delete
          </Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack>
          {expenses.map((expense) => {
            return <Expense key={expense.id} expense={expense} />;
          })}
        </Stack>
      </Modal.Body>
    </Modal>
  );
};

export default ViewExpensesModal;
