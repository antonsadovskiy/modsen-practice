import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  text-align: left;
`;
const Image = styled.img`
  max-width: 150px;
  min-width: 150px;
  height: 150px;
  object-fit: scale-down;
`;

const Title = styled.div`
  font: var(--h5);
`;
const Description = styled.div`
  font: var(--h5);
  color: ${({ theme }) => theme.color.darkGray};
`;

const Price = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font: var(--h5);
  color: ${({ theme }) => theme.color.black};
`;

export default { Wrapper, Image, Info, Title, Description, Price };
