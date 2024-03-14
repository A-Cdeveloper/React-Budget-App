import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// eslint-disable-next-line react/prop-types
const ViewExpensesModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>EXPENSE</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewExpensesModal;
