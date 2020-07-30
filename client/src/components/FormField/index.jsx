import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 50px;
  width: 80%;
`;
const Input = styled.input``;
const Label = styled.label``;

const FormField = ({ label, type = "text", value, name, onChange }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}: </Label>
      <Input type={type} name={name} defaultValue={value} onChange={onChange} />
    </Wrapper>
  );
};

export default FormField;
