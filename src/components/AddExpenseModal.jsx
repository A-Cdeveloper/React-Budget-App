import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UNCATEGORIZER_BUDZET_ID } from "../context/BudgetContext";
import { useRef } from "react";
import { useBudget } from "../context";
// import { useBudget } from "../context";

// eslint-disable-next-line react/prop-types
const AddExpenseModal = ({ show, handleClose, defaultBudgetId }) => {
  const { budgets, addExpense } = useBudget();
  const descriptionInputRef = useRef(null);
  const amountInputRef = useRef(null);
  const budgetIdInputRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();

    addExpense({
      description: descriptionInputRef.current.value,
      amount: +amountInputRef.current.value,
      budgetId: budgetIdInputRef.current.value,
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Form onSubmit={handlerSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="description" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control required type="text" ref={descriptionInputRef} />
          </Form.Group>
          <Form.Group controlId="amount" className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              required
              type="number"
              min={0}
              step={0.01}
              ref={amountInputRef}
            />
          </Form.Group>

          <Form.Group controlId="budget" className="mb-3">
            <Form.Select
              aria-label="select budget"
              ref={budgetIdInputRef}
              defaultValue={defaultBudgetId}
              required
            >
              <option id={UNCATEGORIZER_BUDZET_ID}>Uncategorized</option>
              {budgets.map((budget) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddExpenseModal;
