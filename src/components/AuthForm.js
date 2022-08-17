import React from "react";
import styled from "styled-components";

function AuthForm(props) {
  // UseState for the values in the form
  //   const [formValue, setvalue] = useState({ email: "", password: "" });
  const { formValue, setvalue, firstButtonHandler } = props;
  //handling change in value
  console.log(props, firstButtonHandler);
  const handleValueChange = (ev) => {
    ev.preventDefault();
    const { type, value } = ev.target;
    //changing the values stored in "formvalue" each time a change is made
    setvalue({
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
          <Button onClick={props.firstButtonHandler}>Sif{props.still}</Button>
          <Button>{props.secondButton}</Button>
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
