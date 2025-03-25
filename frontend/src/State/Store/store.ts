import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "../reducers/propertySlice"; // ✅ Property slice
import locationReducer from "../reducers/locationsSlice"
export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    locations: locationReducer, // ✅ Added locations reducer
  },
});

// ✅ TypeScript types for Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
