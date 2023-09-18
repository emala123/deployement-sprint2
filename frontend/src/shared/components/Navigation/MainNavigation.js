import { Link } from "react-router-dom";
import React from "react";

import MainHeader from "./MainHeader";
import NavigationLink from "./NavigationLink";

import "./MainNavigation.css";

function MainNavigation() {
  return (
    <MainHeader>
      <h1 className="main-navigation__title">
        <Link to="/">StageFinder</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavigationLink />
        
      </nav>
    </MainHeader>
  );
}

export default MainNavigation;
