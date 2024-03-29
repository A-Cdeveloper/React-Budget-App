/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { currencyFormater } from "../utils/formaters";

const BudgetCard = ({
  name,
  amount,
  max,
  addDefaultBudgetId,
  viewExpenses,
  hideButtons,
}) => {
  const getProgressBarVariant = (amount, max) => {
    const koefitient = amount / max;
    if (koefitient < 0.5) return "primary";
    if (koefitient >= 0.5 && koefitient < 0.75) return "warning";
    return "danger";
  };

  const isOutOfLimit = amount / max >= 1;

  return (
    <Card
      className={isOutOfLimit && max ? "bg-danger bg-opacity-25" : "bg-light"}
    >
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormater(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                / {currencyFormater(max)}
              </span>
            )}
          </div>
        </Card.Title>

        {max && (
          <ProgressBar
            min={0}
            max={100}
            now={(amount / max) * 100}
            label={`${Math.floor((amount / max) * 100).toFixed(2)}%`}
            variant={getProgressBarVariant(amount, max)}
            className="rounded-pill"
          />
        )}

        {!hideButtons && (
          <Stack
            direction="horizontal"
            gap={2}
            className="mt-4 d-flex justify-content-end"
          >
            <Button
              variant="outline-primary"
              size="sm"
              onClick={addDefaultBudgetId}
            >
              Add Expense
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={viewExpenses}
            >
              View Expenses
            </Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
};

export default BudgetCard;
