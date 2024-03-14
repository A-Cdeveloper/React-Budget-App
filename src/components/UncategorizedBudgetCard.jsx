import { useBudget } from "../context";
import BudgetCard from "./BudgetCard";
import { UNCATEGORIZER_BUDZET_ID } from "../context/BudgetContext";
// eslint-disable-next-line react/prop-types
const UncategorizedBudgetCard = (props) => {
  const { getBudgetExpenses } = useBudget();

  const amount = getBudgetExpenses(UNCATEGORIZER_BUDZET_ID).reduce(
    (acc, cur) => {
      return acc + cur.amount;
    },
    0
  );

  return (
    <BudgetCard
      name="Uncategorized"
      amount={amount}
      {...props}
      //   max={budget.max}
      //   addDefaultBudgetId={() => addDefaultBudgetIdHandler(budget.id)}
    />
  );
};

export default UncategorizedBudgetCard;
