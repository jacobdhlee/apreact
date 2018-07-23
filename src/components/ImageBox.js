import React from "react";
import styled from "styled-components";
const Main = styled.div`
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  height: 15rem
  width: 25%
  > img {
    height: 13rem
    width: 12rem
    margin: 5px
  }
  > h5 {
    margin : 5px
  }
  > h6 {
    margin: 5px
    color: grey
    font-weight: lighter
  }
  @media(max-width: 1000px) {
    width: 50%
    margin: 2rem 0
  }
`;

const ImageBox = ({ url, alt, title, address }) => {
  return (
    <Main>
      <img src={url} alt={alt} />
      <h5>{title}</h5>
      <h6>{address}</h6>
    </Main>
  );
};

export default ImageBox;
