import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000";

const backendApi = axios.create({
  baseURL: BASE_URL,
});

// ✅ Fetch properties (title, address, price, image, etc.)
export const fetchProperties = async () => {
  try {
    const response = await backendApi.get("/properties");
    console.log("API Response (Properties):", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching properties:", error);
    throw error.response?.data?.message || "Failed to fetch properties";
  }
};

// ✅ Fetch property types (name, id, count)
export const fetchPropertyTypes = async () => {
  try {
    const response = await backendApi.get("/property-types");
    console.log("API Response (Property Types):", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching property types:", error);
    throw error.response?.data?.message || "Failed to fetch property types";
  }
};

// ✅ Fetch locations (name, villas, offices, apartments, image)
export const fetchLocations = async () => {
  try {
    const response = await backendApi.get("/locations");
    console.log("API Response (Locations):", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching locations:", error);
    throw error.response?.data?.message || "Failed to fetch locations";
  }
};

export default backendApi;
