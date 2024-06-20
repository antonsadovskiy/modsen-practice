import styled from "styled-components";

import { CustomInput } from "@/components/custom-input";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  max-width: 400px;
  width: 100%;
`;
const Title = styled.div`
  font: var(--h2);
`;
const Link = styled.div`
  font: var(--h5);
  color: #3636d2;
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const InputsWithLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
`;

export const FormInput = styled(CustomInput)`
  font: var(--h5);
`;

export default {
  Wrapper,
  Form,
  InputsWithLink,
  Title,
  Inputs,
  Link,
  ButtonContainer,
  FormInput,
};
