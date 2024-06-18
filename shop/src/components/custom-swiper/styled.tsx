import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-pagination-bullets {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    bottom: 24px !important;
  }

  .swiper-pagination-bullet {
    background-color: white !important;
    width: 10px !important;
    height: 10px !important;
    text-align: center;
    line-height: 10px;
    opacity: 1 !important;
  }

  .swiper-pagination-bullet-active {
    width: 15px !important;
    height: 15px !important;
    border: 1px solid white;
    background-color: transparent !important;
  }
`;
