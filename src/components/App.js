import React from "react";
import {Route,Switch,BrowserRouter} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
  <BrowserRouter>

    <div className="app">
   <NavBar/>
   <Switch>
  
        
        <Route exact path="/movies">
          <Movies/>
        </Route>

        <Route exact path="/directors">
          <Directors/>
        </Route>

        <Route exact path="/actors">
          <Actors/>
        </Route>
     
       
        <Route exact path="/">
          <Home/>
        </Route>
        
</Switch>
    </div>

</BrowserRouter>
    
  );

  }


export default App;
