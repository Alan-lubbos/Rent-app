import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { AppDispatch } from "../../../State/Store/store";
import { getPropertyTypes } from "../../../State/Action/actions";
import { selectPropertyTypes, selectPropertyStatus } from "../../../State/Selectors/property-typesSelectors"; 
import Loading from "../../Loading/loading";
import "./style.css";

const PropertyTypes: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  
 
  const propertyTypes = useSelector(selectPropertyTypes);
  const requestStatus = useSelector(selectPropertyStatus);

  useEffect(() => {
    dispatch(getPropertyTypes()); // Fetch property types on mount
  }, [dispatch]);

  return (
    <div className="featured-section">
      <h2 className="featured-title">Featured Property Types</h2>
      <p className="featured-subtitle">Find All Types of Property.</p>

      <Loading /> 

      
      {requestStatus === "rejected" && (
        <p className="error-message">There was an error fetching property types. Please try again later.</p>
      )}

      <div className="home-property-types">
        
        {requestStatus === "pending" ? (
          <p>Loading property types...</p>
        ) : (
          <>
            {propertyTypes.length > 0 ? (
              propertyTypes.slice(0, 5).map((type) => (
                <div className="home-property-card" key={type.id}>
                  <div className="home-icon-container">
                    <HomeOutlinedIcon className="home-property-icon" />
                  </div>
                  <h3 className="home-property-title">{type.name}</h3>
                  <p className="home-property-count">{type.count} Properties</p>
                </div>
              ))
            ) : (
              <p>No property types found.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyTypes;
