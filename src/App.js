import React  from 'react';
import { Switch,Link,Route} from 'react-router-dom';
import Sign from "./component/Sign";
import Login from "./component/Login";
function App() {
  return (
   <>

      <div>
        <nav>
          <ul>
          
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>  
        </div>
      
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
        
          <Route path="/">
            <Sign/>
          </Route>
        </Switch>
  

   </>
  );
}

export default App;
