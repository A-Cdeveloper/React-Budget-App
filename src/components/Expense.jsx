/* eslint-disable react/prop-types */

import Stack from "react-bootstrap/Stack";
import { currencyFormater } from "../utils/formaters";
import { Button } from "react-bootstrap";

const Expense = ({ expense }) => {
  const { description, amount } = expense;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="my-2 d-flex justify-content-between align-items-center"
    >
      <h5>{description}</h5>
      <div>
        {currencyFormater(amount)}
        <Button
          type="button"
          variant="outline-danger"
          size="sm"
          className="ms-3 align-self-end"
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
};

export default Expense;
