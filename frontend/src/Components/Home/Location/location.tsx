import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { AppDispatch } from "../../../State/Store/store";
import { getLocations } from "../../../State/Action/getLocations";
import Loading from "../../Loading/loading"; 
import { selectLocations, selectIsLoading, selectError } from "../../../State/Selectors/locationSelectors"; 

const Location = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Use selectors for locations, loading, and error
  const locations = useSelector(selectLocations);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getLocations()); // Fetch locations on mount
  }, [dispatch]);

  return (
    <section className="location-section">
      <h2 className="location-title">Our Locations</h2>
      <p className="location-description">
        Discover our various locations around the world.
      </p>

     
      {isLoading && <Loading />}

     
      {error && <p className="error-message">Error: {error}</p>}

     
      {!isLoading && !error && (
        <div className="location-cards">
          {locations.map((loc) => (
            <div key={loc.id} className="location-card">
              <img src={loc.image_url} alt={loc.name} className="location-image" />
              <div className="location-overlay">
                <h3 className="location-name">{loc.name}</h3>
                <p className="location-details">
                  {loc.villas} Villas • {loc.offices} Offices • {loc.apartments} Apartments
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Location;
