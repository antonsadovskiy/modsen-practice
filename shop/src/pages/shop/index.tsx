import { Wrapper } from "./styled";
import { CustomInput } from "@/components/custom-input";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Api } from "@/api/api";
import { ProductType } from "@/api/types";
import { CatalogCard } from "@/components/catalog-card";

export const ShopPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const [catalog, setCatalog] = useState<ProductType[]>([]);

  const onChangeSearchValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.currentTarget.value);
    },
    [],
  );

  const fetchData = useCallback(async () => {
    try {
      const data = await Api.getProducts();
      setCatalog(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <div className={"label"}>Shop the latest</div>
      <div className={"content"}>
        <div className={"filters"}>
          <CustomInput
            type={"search"}
            placeholder={"Search..."}
            value={searchValue}
            onChange={onChangeSearchValue}
          />
        </div>
        <div className={"catalog"}>
          {catalog.map((item) => (
            <CatalogCard
              imageSrc={item.image}
              key={item.id}
              width={"300"}
              height={"300"}
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
