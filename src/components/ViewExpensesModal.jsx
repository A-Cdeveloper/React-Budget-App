import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";

import { useBudget } from "../context";

// eslint-disable-next-line react/prop-types
const ViewExpensesModal = ({ show, handleClose, defaultBudgetId }) => {
  const { getBudgetExpenses, budgets } = useBudget();

  const budgetName =
    defaultBudgetId === "Uncategorized"
      ? "Uncategorized"
      : budgets.filter((el) => el.id === defaultBudgetId)[0].name;

  const expenses = getBudgetExpenses(defaultBudgetId);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Expenses - {budgetName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack>
          {expenses.map((expense) => {
            return (
              <div key={expense.id}>
                {expense.description} - {expense.amount}
              </div>
            );
          })}
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewExpensesModal;
