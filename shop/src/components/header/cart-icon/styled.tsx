import styled from "styled-components";

const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  min-width: 16px;
  height: 16px;
  width: 100%;
  background-color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  font: var(--h5);
  font-size: var(--font-size-10);
`;

export default { CartIconContainer, CartCount };
