import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./style.css";
import { RootState } from "../../State/Store/store";

const Loading = () => {
  const status = useSelector((state: RootState) => state.status);
  
  // Check if any request is still pending
  const isLoading = Object.values(status).some(item => item.status === "pending");

  if (!isLoading) return null; // Don't render if nothing is loading

  return (
    <Box className="loading-container">
      <CircularProgress />
    </Box>
  );
};

export default Loading;
