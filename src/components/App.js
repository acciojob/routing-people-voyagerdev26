
import React from "react";
import './../styles/App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
const App = () => {
  return (
    <BrowserRouter>
    
      <div>
          
          
          <Switch>
            <Route exact path="/" component={UserList}/>
            <Route path="/users/:id" component={UserDetails}/>
          </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
