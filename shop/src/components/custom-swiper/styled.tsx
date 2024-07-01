import styled from "styled-components";

const Container = styled.div<{ $activeIndex: number }>`
  display: flex;
  transition: transform 0.6s ease;
  transform: ${({ $activeIndex }) => `translateX(-${$activeIndex * 100}%)`};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 16px;
  display: flex;
  justify-content: center;
`;

const Controls = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  bottom: 24px;
`;

const Dot = styled.div<{ $isActive: boolean }>`
  border-radius: 50%;
  background-color: ${({ $isActive }) => ($isActive ? "transparent" : "white")};
  width: ${({ $isActive }) => ($isActive ? "15px" : "10px")};
  height: ${({ $isActive }) => ($isActive ? "15px" : "10px")};
  text-align: center;
  line-height: 10px;
  opacity: 1;
  ${({ $isActive }) => $isActive && "border: 1px solid white"};
`;

const Slide = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default { Wrapper, Slide, Controls, Dot, Container };
