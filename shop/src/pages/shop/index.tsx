import { Wrapper } from "./styled";
import { CustomInput } from "@/components/custom-input";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Api } from "@/api/api";
import { ProductType } from "@/api/types";
import { CatalogCard } from "@/components/catalog-card";
import { CustomSelect, OptionType } from "@/components/custom-select";
import { sortOptions } from "@/constants/sort";
import { CustomButton } from "@/components/custom-button";
import { CustomSlider } from "@/components/custom-slider";
import SearchSVG from "@/assets/svg/search.svg";
import { Skeleton } from "@/components/skeleton";

export const ShopPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState<OptionType | undefined>();
  const [categoryValue, setCategoryValue] = useState<OptionType | undefined>();

  const [catalog, setCatalog] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [price, setPrice] = useState<number[]>([0, 100]);
  /*eslint-disable-next-line*/
  const [committedPrice, setCommittedPrice] = useState<number[]>([0, 0]);

  const [isLoading, setIsLoading] = useState(false);

  const onChangeSearchValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.currentTarget.value);
    },
    [],
  );

  const mappedCategories = useMemo(
    () => categories.map((category) => ({ value: category, title: category })),
    [categories],
  );

  const fetchCatalog = useCallback(async () => {
    try {
      const data = await Api.getProducts();
      setCatalog(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const promise = Promise.all([fetchCatalog(), Api.getAllCategories()]);

      const [, categories] = await promise;

      setCategories(categories);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [fetchCatalog]);

  const onChangeSelectValue = useCallback(
    (value: OptionType, type: "category" | "sort") => {
      if (type === "category") {
        setCategoryValue(value);
        return;
      }
      setSortValue(value);
    },
    [],
  );

  const onClearFiltersHandler = useCallback(() => {
    setSearchValue("");
    setSortValue(undefined);
    setCategoryValue(undefined);
  }, []);

  const onValueChangeHandler = useCallback((value: number[]) => {
    setPrice(value);
  }, []);

  const onValueCommitHandler = useCallback((value: number[]) => {
    setCommittedPrice(value);
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
            type={"tel"}
            placeholder={"Search..."}
            value={searchValue}
            onChange={onChangeSearchValue}
            endIcon={<SearchSVG />}
          />
          <div className={"selects"}>
            <CustomSelect
              placeholder={"Shop by"}
              selected={categoryValue}
              options={mappedCategories}
              disabled={mappedCategories.length === 0}
              onChange={(value) => onChangeSelectValue(value, "category")}
            />
            <CustomSelect
              placeholder={"Sort by"}
              selected={sortValue}
              options={sortOptions}
              onChange={(value) => onChangeSelectValue(value, "sort")}
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
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} width={300} height={390} />
              ))
            : catalog.map((item) => (
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
