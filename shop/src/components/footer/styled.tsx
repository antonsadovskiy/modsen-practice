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

  .copyrightAndSocials {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .copyright {
      font: var(--h5);
      color: ${({ theme }) => theme.color.black};

      .slim {
        color: ${({ theme }) => theme.color.darkGray};
      }
    }

    .socials {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  .linksAndInput {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .links {
      display: flex;
      align-items: center;
      gap: 41px;
    }

    .inputContainer {
      max-width: 400px;
      width: 100%;
    }
  }
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

  &:hover {
    color: ${({ theme }) => theme.color.black};
  }

  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};
`;
