import React from "react";
import styled from "styled-components";

function AuthForm() {
  return (
    <>
      <Form>
        <InputDiv>
          <Input
            type={"text"}
            inputMode={"email"}
            placeholder={"email@connect.com"}
          ></Input>
        </InputDiv>
        <InputDiv className="mt-2">
          <Input type={"password"}></Input>
        </InputDiv>
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
console.log(Input.defaultProps);
