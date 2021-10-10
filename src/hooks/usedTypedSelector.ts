import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducer/combinedReducer";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
