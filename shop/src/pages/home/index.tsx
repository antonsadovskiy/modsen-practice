import { CatalogCard } from "@/components/catalog-card";
import { ViewAllLink, Wrapper } from "./styled";
import { useCallback, useEffect, useState } from "react";
import { Api } from "@/api/api";
import { ProductType } from "@/api/types";
import { Skeleton } from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants/routes";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [latestProducts, setLatestProducts] = useState<ProductType[]>([]);

  const viewAllHandler = useCallback(() => {
    navigate(routes.shop);
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await Api.getProducts({ limit: 6 });

        if (data) {
          setLatestProducts(data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <div className={"latest"}>
        <div className={"titleContainer"}>
          <div className={"label"}>Shop The Latest</div>
          <ViewAllLink onClick={viewAllHandler}>View All</ViewAllLink>
        </div>
        <div className={"list"}>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} width={380} height={472} />
              ))
            : latestProducts.map((item) => (
                <CatalogCard
                  imageSrc={item.image}
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                />
              ))}
        </div>
      </div>
    </Wrapper>
  );
};
