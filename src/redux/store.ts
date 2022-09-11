import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expense/expenseSlice";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
