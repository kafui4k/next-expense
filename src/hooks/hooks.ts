import { RootState, AppDispatch } from "../redux/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// used application wide in place of
/**
 * useDispatch &
 * useSelector
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;