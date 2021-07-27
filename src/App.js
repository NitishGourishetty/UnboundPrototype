import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import MainNavigation from "./NavBar/MainNavigation";
import Journal from "./Journal/Journal";
import PreviousJournals from "./Journal/PreviousJournals";
import Data from "./Data/Data";


const App = () => {
  return <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path="/" exact>

        </Route>

        <Route path="/about" exact>

        </Route>

        <Route path="/journal" exact>
          <Journal/>
        </Route>

        <Route path="/data" exact>
          <Data/>
        </Route>

        <Route path="/journal/previous" exact>
          <PreviousJournals/>
        </Route>

        <Route path="/Meditation" exact>

        </Route>

        <Route path="/Sign Up" exact>

        </Route>

        <Redirect to="/"/>
      </Switch>
    </main>
  </Router>;
}

export default App;
