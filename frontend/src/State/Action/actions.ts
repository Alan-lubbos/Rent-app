import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading, setProperties, setPropertyTypes } from "../reducers/propertySlice";
import { fetchProperties, fetchPropertyTypes } from "../../Api/backend";

//  Fetch all property types and store in Redux
export const getPropertyTypes = createAsyncThunk(
  "properties/fetchPropertyTypes",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const data = await fetchPropertyTypes();
      dispatch(setPropertyTypes(data));
    } catch (error) {
      console.error("Error fetching property types:", error);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

//  Fetch all properties and store in Redux
export const getProperties = createAsyncThunk(
  "properties/fetchProperties",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const data = await fetchProperties();
      dispatch(setProperties(data));
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
