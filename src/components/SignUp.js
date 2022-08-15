import React from "react";
import styled from "styled-components";
import AuthForm from "./AuthForm";

function SignUp() {
  return (
    <Wrapper>
      <AuthForm />
      <ButtonsDiv>
        <Button>Sign In</Button>
        <Button>Sign in with Google</Button>
      </ButtonsDiv>
    </Wrapper>
  );
}

export default SignUp;
// console.log(
//   AuthForm().props.children.props.children[0].props.children.props.valueOf(),
//   "df"
// );
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonsDiv = styled.div`
  margin-top: 10px;
  display: flex;
  column-gap: calc(10px + 3vw);
  justify-content: center;
`;

const Button = styled.button``;
