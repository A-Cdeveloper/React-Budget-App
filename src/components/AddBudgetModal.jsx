import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import { useBudget } from "../context";

// eslint-disable-next-line react/prop-types
const AddBudgetModal = ({ show, handleClose }) => {
  const { addBudget } = useBudget();
  const nameInputRef = useRef(null);
  const maxInputRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    addBudget({
      name: nameInputRef.current.value,
      max: +maxInputRef.current.value,
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Form onSubmit={handlerSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" ref={nameInputRef} />
          </Form.Group>
          <Form.Group controlId="max" className="mb-3">
            <Form.Label>Maximum spending</Form.Label>
            <Form.Control
              required
              type="number"
              min={0}
              step={0.01}
              ref={maxInputRef}
            />
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

export default AddBudgetModal;
