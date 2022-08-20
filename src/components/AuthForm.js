import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "@firebase/auth";

function AuthForm(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        // console.log("signedin");
      } else {
        // console.log("no user detected");
      }
      setLoading(false);
    });
    return () => unsub;
  });

  // UseState for the values in the form
  const { formValue, setValue, firstButtonHandler } = props;
  //handling change in value
  const handleValueChange = (ev) => {
    ev.preventDefault();
    const { type, value } = ev.target;
    //changing the values stored in "formvalue" each time a change is made
    setValue({
      ...formValue,
      [type]: value,
    });
  };

  //handling the submit by getting the values in the input field
  const getValuesOnSubmit = (ev) => {
    ev.preventDefault();
    // console.log(formValue);
  };
  return (
    <>
      <Form onSubmit={getValuesOnSubmit}>
        <InputDiv>
          <Input
            onChange={handleValueChange}
            type={"email"}
            inputMode={"email"}
            placeholder={"email@connect.com"}
            value={formValue.email}
          ></Input>
        </InputDiv>
        <InputDiv className="mt-2">
          <Input onChange={handleValueChange} type={"password"}></Input>
        </InputDiv>
        <ButtonsDiv>
          <Button disabled={loading} onClick={props.firstButtonHandler}>
            {props.firstButton}
          </Button>
          <Button disabled={loading}>{props.secondButton}</Button>
        </ButtonsDiv>
      </Form>
    </>
  );
}

export default AuthForm;
const Form = styled.form`
  width: 80%;
`;
//

const InputDiv = styled.div`
  display: flex;
  row-gap: 10px;
`;
//

const Input = styled.input`
  width: 80%;
  margin: auto;
`;
const ButtonsDiv = styled.div`
  margin-top: 10px;
  display: flex;
  column-gap: calc(10px + 3vw);
  justify-content: center;
`;

const Button = styled.button``;
