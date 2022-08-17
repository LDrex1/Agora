import React, { useState } from "react";
import styled from "styled-components";
import AuthForm from "./AuthForm";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "@firebase/auth";

function SignUp() {
  const [formValue, setValue] = useState({ email: "", password: "" });

  const signUpHandler = (ev) => {
    ev.preventDefault();
    const { email, password } = formValue;
    // console.log(email, "I hav been clicked");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        console.log(user, "done");
        let signUpMessage = `${user.email}, your account has been created`;
        console.log(signUpMessage);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Wrapper>
      <AuthForm
        firstButton="Sign Up"
        firstButtonHandler={signUpHandler}
        secondButton="Sign Up With Google"
        formValue={formValue}
        setValue={setValue}
      />
    </Wrapper>
  );
}

export default SignUp;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
