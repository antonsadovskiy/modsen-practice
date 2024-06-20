import "swiper/css";
import "swiper/css/pagination";

import { useMemo } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { CustomImage } from "@/components/custom-image";

import S from "./styled";

type CustomSwiperPropsType = {
  images: { highRes: string; lowRes: string }[];
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
    <S.Wrapper>
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
            <CustomImage
              highResSrc={image.highRes}
              lowResSrc={image.lowRes}
              alt={"image"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  );
};
