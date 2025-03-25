import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading, setLocations, setError } from "../reducers/locationsSlice";
import { fetchLocations } from "../../Api/backend";

// Fetch all locations and store in Redux
export const getLocations = createAsyncThunk(
  "locations/fetchLocations",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const data = await fetchLocations();
      dispatch(setLocations(data));
    } catch (error: any) {
      dispatch(setError(error.message || "Failed to fetch locations"));
      console.error("Error fetching locations:", error);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
