import { useState, useRef, useEffect } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import IntroductionPages from "./components/IntroductionPages";
import { db } from "./components/firebase-config";
import { collection, getDocs } from "@firebase/firestore";

function App() {
  const signOutContainerStyle = { marginTop: "20px", marginLeft: "10px" };
  return (
    <>
      {/* <SignOut signOutContainerStyle={signOutContainerStyle} /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <IntroductionPages />
    </>
  );
}

export default App;
