import styled from "styled-components";
import HeaderImage from "../../image/banner.png";

const Body = styled.div`
  height: 100vh
  width: 100vw
  margin: 0
  padding: 0
  font-family: sans-serif
`;

const Header = styled.header`
  width: 100vw
  height: 70vh
  background: url(${HeaderImage}) no-repeat center center
  background-size: cover
`;

const HeaderBar = styled.div`
    display: flex
    flex-direction: row
    justify-content: space-between
    padding: 0 80px
    color: white
`;

const MainHeader = styled.div`
  display: flex
  height: 65vh
  justify-content: center
  align-items: center
  color: white
  font-weight: bold
`;

const About = styled.div`
  display: flex
  height: 40vh
  width: 100vw
  border-bottom: 1px solid #d8d8d8
  @meida(max-width: 750px) {
    flex-direction: column
  }
`;

const Title = styled.div`
  display: flex
  align-items: center
  justify-content: flex-end
  height: 35vh
  width: 50vw
  padding-right: 10em
  color: red
`;

const Explaination = styled.div`
  display: flex
  flex-direction: column
  align-items: flex-start
  justify-content: center
  height: 35vh
  width: 50vw
  padding-left: 2em
    > p {
      margin: 0
      font-size: 12px
    }
`;

const Example = styled.div`
  display: flex
  align-items: center
  justify-content: center
  height: 60vh
  width: 100vw
  color: white
  background-color: #f1faef
`;

const PicContainer = styled.div`
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  height: 50%
  width: 100vw
  border-bottom: 1px solid #d8d8d8
  @media(max-width: 1000px) {
    height: 100%
  }
`;

const Subscription = styled.div`
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  height: 35vh
  width: 100vw
  
  > h2 {
    color: #e43c4b
  }
`;

const Footer = styled.div`
  display: flex
  align-items: center
  justify-content: center
  height: 20vh
  width: 100vw
  color: white
  background-color: #1e3656
`;

const ImageContainer = styled.div`
  display: flex
  width: 100%
  justify-content: center
  margin-top: 10px
  @media(max-width: 1000px) {
    flex-flow: row wrap
    margin-top: 1rem
  }
`;

export {
  Body,
  Header,
  HeaderBar,
  MainHeader,
  About,
  Title,
  Explaination,
  Footer,
  Example,
  PicContainer,
  Subscription,
  ImageContainer
};
