// src/State/homeSelectors.ts

import { RootState } from "../Store/store";

// Selector for property types
export const selectPropertyTypes = (state: RootState) => state.properties.propertyTypes;

// Selector for loading status
export const selectLoading = (state: RootState) => state.properties.loading;
