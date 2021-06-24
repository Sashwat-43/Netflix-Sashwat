import React,{ useEffect } from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import { auth } from './Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout,login, selectUser } from './features/userSlice';
import HomePage from './Profiles/HomePage';
import Login from './Profiles/Login';
import Error from './Profiles/Error';
import MyProfile from './Profiles/MyProfile';

function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
    return auth.onAuthStateChanged( (User) =>{
      if(User)
      {
        dispatch(login({
          uid: User.uid,
          email: User.email
        }));
        console.log(User);
      }
      else
      {
        dispatch(logout());
      }
    });
  },[dispatch]);

  return (
    <div className="app">
      <Router>
        {user?
          <Switch>
            <Route exact path='/'>
              <HomePage/>
            </Route>
            <Route exact path="/profile">
              <MyProfile/>
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
            :
            <Login />
        } 
        
    </Router>
    </div>
  );
}

export default App;
