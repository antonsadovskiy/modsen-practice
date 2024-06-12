import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 160px;

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
