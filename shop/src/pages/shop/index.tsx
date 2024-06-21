import { skipToken } from "@reduxjs/toolkit/query";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";

import {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "@/api";
import { ProductType } from "@/api/types";
import SearchSVG from "@/assets/svg/search.svg";
import { CatalogCard } from "@/components/catalog-card";
import { CustomButton } from "@/components/custom-button";
import { CustomInput } from "@/components/custom-input";
import { CustomSelect, OptionType } from "@/components/custom-select";
import { CustomSlider } from "@/components/custom-slider";
import { Skeleton } from "@/components/skeleton";
import { sortOptions } from "@/constants/sort";
import { useDebounce } from "@/hooks/useDebounce";
import { findMinAndMaxPrice } from "@/utils/findMinAndMaxPrice";

import S from "./styled";

type SortType = "asc" | "desc";

export const ShopPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState<OptionType | undefined>();
  const [categoryValue, setCategoryValue] = useState<OptionType | undefined>();

  const [catalog, setCatalog] = useState<ProductType[]>([]);

  const [filterType, setFilterType] = useState<
    "sort" | "category" | undefined
  >();
  const [price, setPrice] = useState<number[]>([0, 100]);
  const [committedPrice, setCommittedPrice] = useState<number[] | undefined>();
  const [minAndMaxPrice, setMinAndMaxPrice] = useState<number[]>([0, 100]);

  const [isLoadingCatalog, setIsLoadingCatalog] = useState(false);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const { data: categories } = useGetCategoriesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data ?? [],
    }),
  });

  const { data: productsData, isFetching: isLoadingProducts } =
    useGetProductsQuery(
      filterType === "sort" ? { sort: sortValue.value as SortType } : undefined,
    );

  const { data: categoryData, isFetching: isLoadingCategory } =
    useGetProductsByCategoryQuery(
      filterType === "category" ? categoryValue.value : skipToken,
    );

  const mappedCategories = useMemo(
    () => categories.map((category) => ({ value: category, title: category })),
    [categories],
  );

  const filteredCatalog = useMemo(
    () =>
      catalog
        .filter((item) =>
          committedPrice === undefined
            ? item
            : item.price >= committedPrice[0] &&
              item.price <= committedPrice[1],
        )
        .filter((item) =>
          item.title.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
        ),
    [catalog, committedPrice, debouncedSearchValue],
  );

  const onChangeSearchValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.currentTarget.value);
    },
    [],
  );

  const setData = useCallback((data: ProductType[]) => {
    const prices = findMinAndMaxPrice(data);

    setCatalog(data);
    setMinAndMaxPrice(prices);
    setPrice(prices);
  }, []);

  useEffect(() => {
    setIsLoadingCatalog(isLoadingProducts || isLoadingCategory);
    if (filterType === "sort" && productsData) {
      return setData(productsData);
    }
    if (filterType === "category" && categoryData) {
      return setData(categoryData);
    }
    if (!filterType && productsData) {
      setData(productsData);
    }
  }, [
    productsData,
    categoryData,
    isLoadingProducts,
    isLoadingCategory,
    filterType,
    setData,
  ]);

  const onChangeSelectValue = useCallback(
    (value: OptionType, type: "category" | "sort") => {
      setFilterType(type);

      if (type === "category") {
        setCategoryValue(value);
        setSortValue(undefined);
        return;
      }
      setSortValue(value);
      setCategoryValue(undefined);
    },
    [],
  );

  const onClearFiltersHandler = useCallback(() => {
    setSearchValue("");
    setSortValue(undefined);
    setCategoryValue(undefined);
    setPrice(minAndMaxPrice);
    setCommittedPrice(minAndMaxPrice);
    setFilterType(undefined);
  }, [minAndMaxPrice]);

  const onValueChangeHandler = useCallback((value: number[]) => {
    setPrice(value);
  }, []);

  const onValueCommitHandler = useCallback((value: number[]) => {
    setCommittedPrice(value);
  }, []);

  return (
    <S.Wrapper>
      <S.PageTitle>Shop the latest</S.PageTitle>
      <S.Content>
        <S.Filters>
          <CustomInput
            type={"tel"}
            placeholder={"Search..."}
            value={searchValue}
            onChange={onChangeSearchValue}
            endIcon={<SearchSVG />}
          />
          <S.Selects>
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
          </S.Selects>
          <div>
            <CustomSlider
              min={minAndMaxPrice[0]}
              max={minAndMaxPrice[1]}
              defaultValue={price}
              value={price}
              onValueChange={onValueChangeHandler}
              onValueCommit={onValueCommitHandler}
            />
            <S.Price>
              Price:{" "}
              {isLoadingCatalog ? "Loading..." : `$${price[0]} - $${price[1]}`}
            </S.Price>
          </div>
          <S.ButtonContainer>
            <CustomButton onClick={onClearFiltersHandler} variant={"secondary"}>
              Clear filters
            </CustomButton>
          </S.ButtonContainer>
        </S.Filters>
        <S.Catalog className={"catalog"}>
          {isLoadingCatalog &&
            Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} width={300} height={390} />
            ))}
          {!isLoadingCatalog && (
            <>
              {filteredCatalog.length > 0 ? (
                filteredCatalog.map((item) => (
                  <CatalogCard
                    imageSrc={item.image}
                    key={item.id}
                    width={"300"}
                    height={"300"}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                  />
                ))
              ) : (
                <S.NoData>No products with these filters were found</S.NoData>
              )}
            </>
          )}
        </S.Catalog>
      </S.Content>
    </S.Wrapper>
  );
};
