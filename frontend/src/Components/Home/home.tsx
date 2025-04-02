import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../State/Store/store";

import "./style.css"; // Keep other styles here
import PropertyListing from "./Property listing/propertylisting";
import Awards from "./Awards/awards";
import Location from "./Location/location";
import Teams from "./Teams/team";
import Packages from "./Packages/packages";
import { getPropertyTypes } from "../../State/Action/actions";
import PropertyTypes from "./Propert-types/properttypes";
import Banner from "./Banner/banner"; 
import { selectPropertyTypes } from "../../State/Selectors/property-typesSelectors";
import { selectLoading } from "../../State/Selectors/homeSelectors";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const propertyTypes = useSelector(selectPropertyTypes); 
  const loading = useSelector(selectLoading); 

  useEffect(() => {
    dispatch(getPropertyTypes());
  }, [dispatch]);

  return (
    <div className="home-container">
      <Banner />
      <PropertyTypes />
      <PropertyListing />
      <Awards />
      <Location />
      <Teams />
      <Packages />
    </div>
  );
};

export default Home;
