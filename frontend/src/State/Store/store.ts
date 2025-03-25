import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "../reducers/propertySlice"; // ✅ Property slice
import locationReducer from "../reducers/locationsSlice"; // ✅ Location slice
import statusReducer from "../reducers/status"; // ✅ Import the status reducer

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    locations: locationReducer, 
    status: statusReducer, // ✅ Add the status reducer here
  },
});

// ✅ TypeScript types for Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
