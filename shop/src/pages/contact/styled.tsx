import styled from "styled-components";

import { CustomInput } from "@/components/custom-input";
import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.desktopContentMarginTop};
  margin-bottom: ${({ theme }) => theme.desktopContentMarginBottom};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.xxl};

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: ${({ theme }) => theme.mobileContentMarginTop};
    margin-bottom: ${({ theme }) => theme.mobileContentMarginBottom};

    gap: ${({ theme }) => theme.l};
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.m};
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
  gap: ${({ theme }) => theme.xxl};

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: ${({ theme }) => theme.m};
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
  gap: ${({ theme }) => theme.xxl};

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.m};
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
