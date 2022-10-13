import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

const rootReducer = combineReducers({
  taskSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 348 },
      serializableCheck: { warnAfter: 348 },
    }),
});
