import { RootState } from "../Store/store";

// Selector to get properties
export const selectProperties = (state: RootState) => state.properties.properties;

// Selector to check the loading status of getProperties
export const selectGetPropertiesStatus = (state: RootState) => state.status["getProperties"]?.status;

// Selector to get the error message for getProperties
export const selectGetPropertiesError = (state: RootState) => state.status["getProperties"]?.error;

// Selector to check if the request is pending
export const selectIsLoading = (state: RootState) => selectGetPropertiesStatus(state) === "pending";

// Selector to check for any errors in fetching properties
export const selectError = (state: RootState) => selectGetPropertiesError(state);
