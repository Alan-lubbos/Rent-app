import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define property type
interface PropertyType {
  id: number;
  name: string;
  count: number;
}

// Define property details
interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  property_type: string;
  image_url: string;
}

// Define state shape
interface PropertyState {
  propertyTypes: PropertyType[];
  properties: Property[];
  loading: boolean;
}

const initialState: PropertyState = {
  propertyTypes: [],
  properties: [],
  loading: false,
};

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setPropertyTypes: (state, action: PayloadAction<PropertyType[]>) => {
      state.propertyTypes = action.payload;
    },
    setProperties: (state, action: PayloadAction<Property[]>) => {
      state.properties = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setPropertyTypes, setProperties, setLoading } = propertySlice.actions;
export default propertySlice.reducer;
