import styled from "styled-components";

import { CustomInput } from "@/components/custom-input";

export const Wrapper = styled.div`
  border-top: ${({ theme }) => `1px solid ${theme.color.gray}`};

  height: 160px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 50px;
`;

export const Copyright = styled.div`
  font: var(--h5);
  color: ${({ theme }) => theme.mainTextColor};
`;
export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CopyrightAndSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Slim = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
`;
export const LinksAndInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 41px;
`;
export const InputContainer = styled.div`
  max-width: 400px;
  width: 100%;
`;

export const SocialMediaIconButton = styled.a`
  cursor: pointer;

  &:hover {
    svg path {
      transition: all 0.3s ease;

      fill: black;
    }
  }
`;

export const FooterInput = styled(CustomInput)`
  font: var(--h5);
`;

export const FooterLink = styled.div<{ $isClickable: boolean }>`
  font: var(--h5);
  color: ${({ theme }) => theme.color.darkGray};

  transition: all 0.3s ease;

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
