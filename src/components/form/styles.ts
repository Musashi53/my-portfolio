import styled from "styled-components";
import { obj } from "../../global/styles/variables";

const StyledForm = styled.form`
  margin-bottom: 8rem;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  padding: 1rem 0 1rem 1rem;
  background-color: ${obj.colors.lowPriority};
  border-radius: .5rem;
  margin-bottom: 1rem;
  color: ${obj.colors.mainColor};
  font-weight: 500;
`;

const Input = styled.input`
  margin-top: .5rem;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  outline: none;
`;

const TextArea = styled.textarea`
  margin-top: .5rem;
  width: 100%;
  height: 10rem;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  outline: none;
  resize: none;
`;

export { StyledForm, FormTitle, Label, Input, TextArea };