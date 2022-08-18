import React from "react";
import styled from "styled-components";
import { auth } from "./firebase-config";
import { signOut } from "@firebase/auth";

function SignOut(props) {
  const signOutHandler = (ev) => {
    ev.preventDefault();
    signOut(auth).then((resp) => console.log(resp, "for signOut"));
  };
  return (
    <Div style={props.signOutContainerStyle}>
      <Button onClick={signOutHandler}>Sign Out</Button>
    </Div>
  );
}

export default SignOut;

const Button = styled.button``;
//
const Div = styled.div``;
