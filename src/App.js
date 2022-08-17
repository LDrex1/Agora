import { useState, useRef, useEffect } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { db } from "./components/firebase-config";
import { collection, getDocs } from "@firebase/firestore";

function App() {
  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
