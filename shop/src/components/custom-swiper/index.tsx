import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

import S from "./styled";

type SwiperPropsType = {
  items: ReactNode[];
  autoplayTime?: number;
};

export const CustomSwiper = ({ items, autoplayTime }: SwiperPropsType) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      );
    }, autoplayTime || 4500);
  }, [items.length, autoplayTime]);

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  const setCurrentSlideIndexHandler = (index: number) => {
    setCurrentSlideIndex(index);
    startTimer();
  };

  return (
    <S.Wrapper>
      <S.Container activeIndex={currentSlideIndex}>
        {items.map((item, index) => (
          <S.Slide key={index}>{item}</S.Slide>
        ))}
      </S.Container>
      <S.Controls>
        {items.map((_, index) => (
          <S.Dot
            $isActive={index === currentSlideIndex}
            key={index}
            onClick={() => setCurrentSlideIndexHandler(index)}
          />
        ))}
      </S.Controls>
    </S.Wrapper>
  );
};
