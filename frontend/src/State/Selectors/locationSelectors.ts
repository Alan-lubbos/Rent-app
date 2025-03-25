import { RootState } from "../Store/store";

// Selector to get locations
export const selectLocations = (state: RootState) => state.locations.locations;

// Selector to check the loading status of getLocations
export const selectGetLocationsStatus = (state: RootState) => state.status["getLocations"]?.status;

// Selector to get the error message for getLocations
export const selectGetLocationsError = (state: RootState) => state.status["getLocations"]?.error;

// Selector to check if the request is pending
export const selectIsLoading = (state: RootState) => selectGetLocationsStatus(state) === "pending";

// Selector to check for any errors in fetching locations
export const selectError = (state: RootState) => selectGetLocationsError(state);
