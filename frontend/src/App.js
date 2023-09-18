import React from "react";

import "./App.css";
import Acceuil from "./Pages/Acceuil";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Footer from "./shared/components/Footer/Footer";
import Faq from "./Pages/FAQ";
import ProfisEtCompetence from "./Pages/ProflsEtCompetences";
import DeroulementStageEtudiant from "./Pages/DeroulementStageEtudiant";
import Stage from "./Pages/Stage/Stage";
import Etudiant from "./Pages/Etudiant/Etudiant";
import Employeur from "./Pages/Employeur/Employeur";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Acceuil />
          </Route >
          <Route path="/Pages/Stage/Stage" exact>
            <Stage />
          </Route >
          <Route path="/Pages/Etudiant/Etudiant" exact>
            <Etudiant />
          </Route >
          <Route path="/Pages/Employeur/Employeur" exact>
            <Employeur />
          </Route >
          <Route path="/Pages/FAQ" exact>
            <Faq />
          </Route>
          <Route path="/Pages/Competence" exact>
            <ProfisEtCompetence />
          </Route >
          <Route path="/Pages/Deroulement" exact>
            <DeroulementStageEtudiant />
          </Route >
          <Route path="/Pages/Stage" exact>
            <Stage />
          </Route >
          
          <Redirect path="/" />
          
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
