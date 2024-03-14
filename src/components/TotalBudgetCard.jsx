import { useBudget } from "../context";
import BudgetCard from "./BudgetCard";

// eslint-disable-next-line react/prop-types
const TotalBudgetCard = () => {
  const { expenses, budgets } = useBudget();

  const amount = expenses.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  const max = budgets.reduce((acc, cur) => {
    return acc + cur.max;
  }, 0);

  return (
    <BudgetCard name="Total" amount={amount} max={max} hideButtons={true} />
  );
};

export default TotalBudgetCard;
