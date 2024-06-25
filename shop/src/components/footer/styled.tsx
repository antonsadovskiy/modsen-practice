import styled from "styled-components";

import { CustomInput } from "@/components/custom-input";
import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  border-top: ${({ theme }) => `1px solid ${theme.color.gray}`};

  min-height: 160px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 50px;

  @media screen and (max-width: ${breakpoints.large}) {
    margin-bottom: 20px;
    border-top: none;
  }
`;

const Copyright = styled.div`
  font: var(--h5);
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    font: var(--body-small-mobile);
  }
`;
const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: ${breakpoints.extraLarge}) {
    justify-content: space-around;
    width: 100%;
  }
`;

const CopyrightAndSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.extraLarge}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 38px;
  }
`;

const Slim = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
`;
const LinksAndInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.extraLarge}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 20px;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 41px;

  @media screen and (max-width: ${breakpoints.extraLarge}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;
const InputContainer = styled.div`
  max-width: 400px;
  width: 100%;

  @media screen and (max-width: ${breakpoints.extraLarge}) {
    max-width: 100%;
  }
`;

const SocialMediaIconButton = styled.a`
  cursor: pointer;

  &:hover {
    svg path {
      transition: all 0.3s ease;

      fill: black;
    }
  }
`;

const FooterInput = styled(CustomInput)`
  font: var(--h5);

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h3-mobile);
  }
`;

const FooterLink = styled.div<{ $isClickable: boolean }>`
  font: var(--h5);
  color: ${({ theme }) => theme.color.darkGray};

  transition: all 0.3s ease;

  @media screen and (max-width: ${breakpoints.medium}) {
    font: var(--body-small-mobile);
  }

  &:hover {
    color: ${({ theme }) => theme.mainTextColor};
  }

  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};
`;

export default {
  Wrapper,
  Copyright,
  Socials,
  CopyrightAndSocials,
  Slim,
  LinksAndInputContainer,
  Links,
  InputContainer,
  FooterInput,
  FooterLink,
  SocialMediaIconButton,
};
