import React, { useEffect, useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import fire from "./firebase";
import { Switch, Route, Redirect} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const LogIn = (user) => {
    fire
      .auth()
      .signInWithEmailAndPassword(user.username, user.password)
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        const error = {
          code: err.code,
          message: err.message,
        };
        console.log(error);
      });
  };

  const Signup = (user) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(user.username, user.password)
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        const error = {
          code: err.code,
          message: err.message,
        };
        console.log(error);
      });
  };

  const signOut = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        setLoggedIn(false);
      });
  };

  return (
    <Switch>
      {loggedIn ? (
        <Route
          exact
          path="/"
          component={() => <Contacts signOut={signOut} />}
        />
      ) : (
        <>
          <Route
            exact
            path="/"
            component={(routeProps) => <Login LogIn={LogIn} {...routeProps} />}
          />
          <Route path="/signup" component={() => <SignUp Signup={Signup} />} />
        </>
      )}
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
