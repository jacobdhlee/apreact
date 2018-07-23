import React, { Component } from "react";
import {
  Body,
  Header,
  HeaderBar,
  MainHeader,
  About,
  Title,
  Explaination,
  Example,
  PicContainer,
  Subscription,
  Footer,
  ImageContainer
} from "./LandingPageCSS";
import { Link } from "react-router-dom";

import ImageBox from "../../components/ImageBox";
import ExplainPics from "../../components/ExplainPics";
import Subscribe from "../../components/Subscribe";
import DeskImg from "../../image/1.png";
import FoodImg from "../../image/2.png";
import Image3 from "../../image/3.png";
import Image4 from "../../image/4.png";
import Image5 from "../../image/5.png";
import Image6 from "../../image/6.png";

class LandingPage extends Component {
  render() {
    const deskTitle = "Regional Cuisine Down Home Southern Cooking";
    const FoodTitle = "Pos Hardware More Option In Less Space";
    return (
      <Body>
        <Header>
          <HeaderBar>
            <h3>Reactor</h3>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5>Log In</h5>
            </Link>
          </HeaderBar>
          <MainHeader>
            <h1>Hello, welcome to Reactor</h1>
          </MainHeader>
        </Header>
        <About>
          <Title>
            <h2>What we do</h2>
          </Title>
          <Explaination>
            <h4>We do</h4>
            <p>The quick, brown fox jumps ove a lazy dog.</p>
            <p>DJs flock by when MTV ax quiz prog.</p>
            <p>Junk MTV quiz graced by fox whelps.</p>
            <p>Bawds jog, flick quartz, vex nymphs.</p>
          </Explaination>
        </About>
        <Example>
          <ExplainPics url={DeskImg} title={deskTitle} alt={"desk"} />
          <ExplainPics url={FoodImg} title={FoodTitle} alt={"food"} />
        </Example>
        <PicContainer>
          <h3>Maui By Air The Best Way Around The Island</h3>
          <ImageContainer>
            <ImageBox
              url={Image3}
              title={"East Josianefurt"}
              address={"085 Daron Via"}
            />
            <ImageBox
              url={Image4}
              title={"South Cristopherport"}
              address={"162 Cheandler Ville"}
            />
            <ImageBox
              url={Image5}
              title={"Concepcionbury"}
              address={"7643 Kylie Burgs"}
            />
            <ImageBox
              url={Image6}
              title={"Reychester"}
              address={"5590 Gabe Views apt. 044"}
            />
          </ImageContainer>
        </PicContainer>
        <Subscription>
          <h2>SUBSCRIBE TO NEWSLETTER</h2>
          <Subscribe />
        </Subscription>
        <Footer>Footer</Footer>
      </Body>
    );
  }
}

export default LandingPage;
