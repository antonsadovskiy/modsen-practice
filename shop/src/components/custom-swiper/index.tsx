import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Wrapper } from "./styled";
import { useMemo } from "react";

type CustomSwiperPropsType = {
  images: string[];
  isWithAutoPlay?: boolean;
  isWithPagination?: boolean;
};

export const CustomSwiper = ({
  images,
  isWithAutoPlay = true,
  isWithPagination = true,
}: CustomSwiperPropsType) => {
  const pagination = {
    clickable: true,
  };

  const modules = useMemo(
    () =>
      [isWithPagination && Pagination, isWithAutoPlay && Autoplay].filter(
        Boolean,
      ),
    [isWithAutoPlay, isWithPagination],
  );

  return (
    <Wrapper>
      <Swiper
        pagination={pagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={modules}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};
