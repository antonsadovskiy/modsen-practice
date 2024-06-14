import { Wrapper } from "./styled";
import { CustomInput } from "@/components/custom-input";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Api } from "@/api/api";
import { ProductType } from "@/api/types";
import { CatalogCard } from "@/components/catalog-card";
import { CustomSelect, OptionType } from "@/components/custom-select";
import { sortOptions } from "@/constants/sort";
import { CustomButton } from "@/components/custom-button";
import { CustomSlider } from "@/components/custom-slider";

export const ShopPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState<OptionType | undefined>();
  const [catalog, setCatalog] = useState<ProductType[]>([]);

  const [price, setPrice] = useState<number[]>([0, 100]);
  const [committedPrice, setCommittedPrice] = useState<number[]>([0, 0]);

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

  const onChangeSelectValue = useCallback((value: OptionType) => {
    setSelectValue(value);
  }, []);

  const onClearFiltersHandler = useCallback(() => {
    setSearchValue("");
    setSelectValue(undefined);
  }, []);

  const onValueChangeHandler = useCallback((value: number[]) => {
    setPrice(value);
  }, []);

  const onValueCommitHandler = useCallback((value: number[]) => {
    setCommittedPrice(value);
  }, []);

  console.log(committedPrice);

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
          <div className={"selects"}>
            <CustomSelect
              placeholder={"Sort"}
              selected={selectValue}
              options={sortOptions}
              onChange={onChangeSelectValue}
            />
          </div>
          <div className={"sliderContainer"}>
            <CustomSlider
              defaultValue={[0, 100]}
              value={price}
              onValueChange={onValueChangeHandler}
              onValueCommit={onValueCommitHandler}
            />
            <div className={"price"}>
              Price: ${`${price[0]}`} - ${`${price[1]}`}
            </div>
          </div>
          <CustomButton onClick={onClearFiltersHandler} variant={"secondary"}>
            Clear filters
          </CustomButton>
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
