import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "antd";
import Meta from "antd/es/card/Meta";

import { routes } from "@/constants/routes";

export type CatalogCardPropsType = {
  id: number;
  imageSrc?: string;
  title: string;
  price: number;
  width?: string;
  height?: string;
  isWithPrice?: boolean;
};

const CatalogCard = memo(
  ({
    id,
    imageSrc,
    height = "380",
    width = "380",
    price,
    title,
  }: CatalogCardPropsType) => {
    const navigate = useNavigate();

    const onClickHandler = () => navigate(`${routes.product}/${id}`);

    return (
      <Card
        onClick={onClickHandler}
        hoverable
        style={{
          width: `${width}px`,
        }}
        cover={
          <img
            height={height}
            width={width}
            style={{ backgroundPosition: "center", objectFit: "cover" }}
            alt="image"
            src={`http://localhost:9000/products/${imageSrc}`}
          />
        }
      >
        <Meta title={title} description={`$ ${price}`} />
      </Card>
    );
  },
);

CatalogCard.displayName = "CatalogCard";

export { CatalogCard };
