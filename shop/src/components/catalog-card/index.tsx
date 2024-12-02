import { memo } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { routes } from "@/constants/routes";

export type CatalogCardPropsType = {
  id: number;
  imageSrc?: string;
  title: string;
  price: number;
  width?: string;
  height?: string;
  isWithPrice?: boolean;
  description?: string;
};

const CatalogCard = memo(
  ({ id, imageSrc, description, title }: CatalogCardPropsType) => {
    const navigate = useNavigate();

    const onClickHandler = () => navigate(`${routes.product}/${id}`);

    return (
      <Card onClick={onClickHandler} sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={`http://localhost:9000/products/${imageSrc}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            {description && (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  },
);

CatalogCard.displayName = "CatalogCard";

export { CatalogCard };
