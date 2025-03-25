import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define Location type
interface Location {
  id: number;
  name: string;
  image_url: string;
  villas: number;
  offices: number;
  apartments: number;
}

// Define State Shape
interface LocationState {
  locations: Location[];
  loading: boolean;
  error: string | null;
}

const initialState: LocationState = {
  locations: [],
  loading: false,
  error: null,
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<Location[]>) => {
      state.locations = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLocations, setLoading, setError } = locationsSlice.actions;
export default locationsSlice.reducer;
