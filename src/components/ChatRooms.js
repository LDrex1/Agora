import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Rooms = [
  { name: "Tech", about: "" },
  { name: "Football", about: "" },
  { name: "Music", about: "" },
];
function ChatRooms() {
  const [isActive, setIsActive] = useState({});

  const accordion = (index) => () => {
    setIsActive((current) => ({ ...current, [index]: !current[index] }));
  };

  return (
    <>
      <H2 className="text-center">Please choose your preffered chat room</H2>

      <Ul>
        {Rooms.map(({ name, about }, index) => (
          <>
            <Li className="text-center">
              <H3 toggle={isActive[index]} onClick={accordion(index)}>
                {name}
              </H3>
              <AboutRoom>{about}</AboutRoom>
            </Li>
          </>
        ))}
        {/* <Li>Tech</Li>
        <Li>Football</Li>
        <Li>Music</Li> */}
      </Ul>

      <Button>Continue</Button>
    </>
  );
}

export default ChatRooms;

const H2 = styled.h2``;

const H3 = styled.h3`
  color: ${(props) => (props.toggle ? "blue" : "black")};
`;

const Ul = styled.ul``;

const AboutRoom = styled.p``;

const Li = styled.li``;

const Button = styled.button``;
