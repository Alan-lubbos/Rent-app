import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { AppDispatch } from "../../../State/Store/store";
import { getProperties } from "../../../State/Action/actions";
import Loading from "../../Loading/loading"; 
import { selectProperties, selectIsLoading, selectError } from "../../../State/Selectors/property-listingSelectors"; 
import PropertyListingCard from "./propertlistingcard";
const PropertyListing: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Select properties and request status
  const properties = useSelector(selectProperties);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getProperties()); // Fetch properties on mount
  }, [dispatch]);

  return (
    <div className="property-listing">
      <h2>Available Properties</h2>

      {isLoading && <Loading />}
      {error && <p className="error-message">Error: {error}</p>}

      {!isLoading && !error && (
        <div className="property-grid">
          {properties.length > 0 ? (
            properties.map((property) => (
              <PropertyListingCard key={property.id} property={property} />
            ))
          ) : (
            <p>No properties available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyListing;
