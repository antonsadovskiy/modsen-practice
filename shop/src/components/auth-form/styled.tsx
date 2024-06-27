import styled from "styled-components";

import ClosedEyeSVG from "@/assets/svg/closed-eye.svg";
import OpenedEyeSVG from "@/assets/svg/opened-eye.svg";
import { CustomInput } from "@/components/custom-input";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.l};
  max-width: 400px;
  width: 100%;
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

const FormInput = styled(CustomInput)`
  font: var(--h5);

  svg path {
    fill: ${({ theme }) => theme.color.white} !important;
  }
`;

const OpenedEye = styled(OpenedEyeSVG)`
  fill: ${({ theme }) => theme.mainTextColor};
`;
const ClosedEye = styled(ClosedEyeSVG)`
  fill: ${({ theme }) => theme.mainTextColor};
`;

export default {
  Form,
  InputsWithLink,
  Inputs,
  Link,
  ButtonContainer,
  FormInput,
  OpenedEye,
  ClosedEye,
};
