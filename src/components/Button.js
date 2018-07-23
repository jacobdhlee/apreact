import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block
  background-color : #e43c4b
  font-size : 1em
  color: white
  border: none
  text-align: center
  text-decoration: none
  border-radius : 25px
  width: 300px
  height: 40px

  &:hover {
    background-color: red
  }
`;

const Buttons = ({ name, onClick, value }) => {
  return (
    <Button onClick={onClick} value={value}>
      {name}
    </Button>
  );
};

export default Buttons;
