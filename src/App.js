import { useState, useRef, useEffect } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { db } from "./components/firebase-config";
import { collection, getDocs } from "@firebase/firestore";

function App() {
  return (
    <>
      {/* <SignUp /> */}
      <SignIn />
    </>
  );
}

export default App;
