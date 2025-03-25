// src/State/Selectors/propertySelectors.ts
import { getPropertyTypes } from "../Action/actions";
import { RootState } from "../Store/store";

// Selector to get property types
export const selectPropertyTypes = (state: RootState) => state.properties.propertyTypes;

// Selector to get the request status of property types
export const selectPropertyStatus = (state: RootState) => state.status[getPropertyTypes.pending.type]?.status;
