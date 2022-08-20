import React from "react";
import styled from "styled-components";

function Welcome() {
  return (
    <Wrapper>
      <Container className="slide-1">
        <H1 className="text-center">WELCOME TO AGORA</H1>
        <ImageDiv></ImageDiv>
        <Div>
          <P>
            We know you are eager to start sharing your ideas but please take
            time out to read tips on how to use the app.
          </P>
        </Div>
      </Container>

      <Container className="slide 2">
        <H1 className="text-center">Join a Chat Room</H1>
        <ImageDiv></ImageDiv>
        <Div>
          <P>
            There are different chat rooms and you are allowed to enter any room
            of your choise.
          </P>
        </Div>
      </Container>

      <Container className="slide3">
        <H1 className="text-center">Time to open up!</H1>
        <ImageDiv></ImageDiv>
        <Div>
          <P>Thank you for your patience, you can now proceed to Agora</P>
        </Div>
      </Container>
    </Wrapper>
  );
}

export default Welcome;

//styles

const Wrapper = styled.div``;

const Container = styled.div``;

const H1 = styled.h1``;

const ImageDiv = styled.div`
  background-image: ;
`;

const Div = styled.div``;

const P = styled.p``;
