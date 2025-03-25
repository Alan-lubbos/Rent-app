import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css"; // Keep other styles here
import { RootState, AppDispatch } from "../../State/Store/store";
import PropertyListing from "./Property listing/propertylisting";
import Awards from "./Awards/awards";
import Location from "./Location/location";
import Teams from "./Teams/team";
import Packages from "./Packages/packages";
import Footer from "../Footer/footer";
import { getPropertyTypes } from "../../State/Action/actions";
import PropertyTypes from "./Propert-types/properttypes";
import Banner from "./Banner/banner"; 

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const propertyTypes = useSelector((state: RootState) => state.properties.propertyTypes);
  const loading = useSelector((state: RootState) => state.properties.loading);

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
      <Footer />
    </div>
  );
};

export default Home;
