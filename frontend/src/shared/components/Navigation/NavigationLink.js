import React from "react";
import { NavLink as NavigationLink } from "react-router-dom";
import "./NavigationLink.css";

function NavigationLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavigationLink to="/" exact>
          Acceuil
        </NavigationLink>
      </li>
      <li>
        <NavigationLink to="/Pages/Stage/Stage" exact>
          Stage
        </NavigationLink>
      </li>
      <li>
      <NavigationLink to="/Pages/Employeur/Employeur" exact>
          Employeur
        </NavigationLink>
      </li>
      <li>
      <NavigationLink to="/Pages/Etudiant/Etudiant" exact>
          Etudiant
        </NavigationLink>
      </li>
      <li>
        <NavigationLink to="/Pages/FAQ" exact>
          FAQ
        </NavigationLink>
      </li>
      <li>
        <NavigationLink to="/Pages/Competence" exact>
          Competence
        </NavigationLink>
      </li>

      <li>
        <NavigationLink to="/Pages/Deroulement" exact>
          Deroulement
        </NavigationLink>
      </li>
    </ul>
  );
}

export default NavigationLinks;
