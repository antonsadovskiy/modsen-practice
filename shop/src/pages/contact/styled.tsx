import styled from "styled-components";

import { CustomInput } from "@/components/custom-input";
import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-bottom: 250px;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 40px;
    margin-bottom: 100px;
    gap: 64px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 39px;
`;
const Title = styled.div`
  font: var(--h1);
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    text-align: left;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h3);
  }
`;
const Subtitle = styled.div`
  font: var(--h3);
  color: ${({ theme }) => theme.mainTextColor};
  text-align: center;

  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const FormFields = styled.form`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 50px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 500px;
    width: 100%;
  }
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  gap: 110px;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: 50px;
  }
`;

const FormInput = styled(CustomInput)`
  font: var(--h5);

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--body-small-mobile);
  }
`;

export default {
  FormInput,
  Wrapper,
  FormFields,
  ButtonContainer,
  Inputs,
  TitleContainer,
  Title,
  Subtitle,
};
