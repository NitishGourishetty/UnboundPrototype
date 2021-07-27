import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import MainNavigation from "./NavBar/MainNavigation";
import Journal from "./Journal/Journal";
import PreviousJournals from "./Journal/PreviousJournals";
import Data from "./Data/Data";
import Meditation from "./Meditation/Meditation";
import HomePage from "./HomePage/HomePage";



const App = () => {
  return <div>
    <Router>
      <MainNavigation/>
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>

          <Route path="/meditation" exact>
            <Meditation/>
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
  </div>


}

export default App;
