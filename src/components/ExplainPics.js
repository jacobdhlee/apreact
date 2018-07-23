import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex
  align-items: center
  justify-content: center
  width: 50vw
  height: 60vh
  padding-left: 2em
  > img {
    width: 12em
    height: 12em
    margin: 2em
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media(max-width: 1100px) {
    flex-direction: column
  }
`;

const Explain = styled.div`
  color: black
  width: 16em
  height: 12em
  > p {
    font-size: 1rem;
  }
`;

const ExplainPics = ({ title, url, alt }) => {
  return (
    <Main>
      <img src={url} alt={alt} />
      <Explain>
        <h4>{title}</h4>
        <p>
          The quick, brown fox jumps ove a lazy dog.
          DJs flock by when MTV ax quiz prog.
          Junk MTV quiz graced by fox whelps.
          Bawds jog, flick quartz, vex nymphs.
        </p>
      </Explain>
    </Main>
  );
};

export default ExplainPics;
