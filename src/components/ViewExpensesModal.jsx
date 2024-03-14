import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useBudget } from "../context";

// eslint-disable-next-line react/prop-types
const ViewExpensesModal = ({ show, handleClose, defaultBudgetId }) => {
  const { getBudgetExpenses } = useBudget();

  const expenses = getBudgetExpenses(defaultBudgetId);
  console.log(defaultBudgetId);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {expenses.map((expense) => {
          return (
            <li key={expense.id}>
              {expense.description} - {expense.amount}
            </li>
          );
        })}
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
