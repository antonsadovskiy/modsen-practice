import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  width: 377px;

  .imageContainer {
    img {
      position: relative;

      object-position: center;
      object-fit: scale-down;
      border-radius: 8px;
    }
  }

  .title {
    width: 100%;
    margin: 24px 0 16px;
    font: var(--h3);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .price {
    font: var(--h4);
    color: ${({ theme }) => theme.color.accent};
  }

  @keyframes show {
    to {
      bottom: 0;
    }
  }
`;
