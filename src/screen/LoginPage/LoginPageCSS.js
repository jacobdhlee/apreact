import styled from "styled-components";
import BackgroundImage from "../../image/onboarding-bg.png";

const Main = styled.div`
  display: flex
  flex-direction: column
  height: 100vh
  width: 100vw
  background : url(${BackgroundImage}) no-repeat center center
  background-size: cover
`;

const Header = styled.div`
  display: flex
  align-items: center
  height: 80px
  padding-left: 10em

  > h3 {
    color: white
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column
  align-items: center
  justify-content: center
  height: 100vh
  width: 100vw
`;

const Choice = styled.div`
  dispaly: flex
  justify-content: center
  width: 300px
  margin-bottom: 20px 
  > button: focus{
    border-bottom: 1px solid white
    outline: none
  }
`;

const Form = styled.div`
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  padding: 20px
  height: 300px
  width: 300px
`;

const InputBox = styled.div`
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
`;

const Button = styled.button`
  border: 0
  margin-right: 40px
  font-size: 18px
  color: white
  background-color: rgba(0,0,0,0)
`;

export { Button, InputBox, Form, Choice, Body, Main, Header };
