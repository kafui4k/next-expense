import React from 'react';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
// TODO: import actions from the slice here...........

function ExpenseComponent() {
    const dispatch = useDispatch();
    
  return (
    <div>ExpenseComponent</div>
  )
}

export default ExpenseComponent