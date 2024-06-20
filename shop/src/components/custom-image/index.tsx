import { useEffect, useState } from "react";

import S from "./styled";

type CustomImagePropsType = {
  highResSrc: string;
  lowResSrc: string;
  alt: string;
};

export const CustomImage = ({
  highResSrc,
  lowResSrc,
  alt,
}: CustomImagePropsType) => {
  const [imageSrc, setImageSrc] = useState(lowResSrc);

  useEffect(() => {
    const img = new Image();
    img.src = highResSrc;
    img.onload = () => setImageSrc(highResSrc);
  }, [highResSrc]);

  return (
    <S.Image $isLoaded={imageSrc === highResSrc} src={imageSrc} alt={alt} />
  );
};
