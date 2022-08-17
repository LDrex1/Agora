import React from "react";
import { useState } from "react";
import styled from "styled-components";
import AuthForm from "./AuthForm";
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "@firebase/auth";

function SignIn() {
  const [formValue, setValue] = useState({ email: "", password: "" });
  const { email, password } = formValue;
  const signInHandler = (ev) => {
    ev.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("This is signIn");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <Wrapper>
      <AuthForm
        firstButtonHandler={signInHandler}
        firstButton={"Sign In"}
        secondButton={"Sign In with Google"}
        formValue={formValue}
        setValue={setValue}
      />
    </Wrapper>
  );
}

export default SignIn;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
