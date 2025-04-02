
import React from "react";
import TextField from "@mui/material/TextField";
import "./style.css"
interface CustomTextFieldProps {
  label: string;
  placeholder: string;
  fullWidth?: boolean;
  className?: string;
  type?: string;
}
const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  placeholder,
  fullWidth = true,
  className,
  type = "text",
}) => {
  return (
    <TextField
      variant="outlined"
      fullWidth={fullWidth}
      className={className}
      label={label}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default CustomTextField;
