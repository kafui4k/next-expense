import React from 'react'
import { useAppSelector } from '../hooks/hooks';

function BalanceComponent() {
  const balance = useAppSelector((state) => state.expense.allExpense?.balance);

  return (
      <div>
          balance <span>${balance && balance > 0 ? balance : 0}</span>
    </div>
  )
}

export default BalanceComponent