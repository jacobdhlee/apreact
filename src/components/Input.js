import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: relative
  margin-bottom: 20px
`;

const ImageBox = styled.img`
  position: absolute
  top: 10px
  left: 16px
  width:20px
  height:20px
`;

const InputBox = styled.input`
  border: 0
  height:40px
  width: 249px
  color: white
  font-size: 14px
  border-radius : 25px
  background-color: rgba(72, 123, 155, 0.5);
  padding-left: 50px
    &::placeholder {
      color: white
      opacity: 0.4
    }
`;

const Input = ({ url, type, placeholder, onChange, value }) => {
  return (
    <Box>
      <ImageBox src={url} />
      <InputBox
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Box>
  );
};

export default Input;
