import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';

export interface ExpenseState {
    title: string;
    amount: number;
    description: string;

    balance: number;
    expense: number;
    income: number;
    expenseHistory: {
        expenseName: string,
        amount: number;
    }[]
};

export interface Expense {
    expenseName: string;
    amount: number | string;
}

export interface State {
    allExpense: ExpenseState | undefined;
}

export const initialState: State = {
    allExpense: undefined,
}

const slice = 'expense';

export const expenseSlice = createSlice({
    name: slice,
    initialState,
    reducers: {
        createExpense: (state, action: PayloadAction<Expense>) => { 
            if (typeof action.payload.amount !== "number") {
                state.allExpense?.expenseHistory.push({
                    expenseName: action.payload.expenseName,
                    amount: parseFloat(action.payload.amount),
                })
            }
        },
        calculateBalance: (state, action: PayloadAction<void>) => {
            if (typeof state.allExpense?.balance !== "undefined") {
                state.allExpense.balance = state.allExpense?.expenseHistory.reduce((acc, expense) =>
                    acc + expense.amount,
                    0
                )
            } 
        }, calculateIncome: (state, action: PayloadAction<void>) => {
            if (typeof state.allExpense?.income !== "undefined") {
                state.allExpense.income = state.allExpense.expenseHistory.reduce((acc, expense) => {
                    if (expense.amount > 0) {
                        return Math.abs(acc + expense.amount)
                    }
                    return acc;
                }, 0)
            }
        }
    },
});

export const {
    createExpense,
    calculateBalance,
    calculateIncome
} = expenseSlice.actions;

export default expenseSlice.reducer;