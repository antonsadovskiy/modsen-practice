import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";

import { Api } from "@/api/api";
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
  const [categories, setCategories] = useState<string[]>([]);

  const [price, setPrice] = useState<number[]>([0, 100]);
  const [committedPrice, setCommittedPrice] = useState<number[] | undefined>();
  const [minAndMaxPrice, setMinAndMaxPrice] = useState<number[]>([0, 100]);

  const [filterType, setFilterType] = useState<
    "sort" | "category" | undefined
  >();

  const [isLoadingCatalog, setIsLoadingCatalog] = useState(false);

  const debouncedSearchValue = useDebounce(searchValue, 500);

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

  const setData = useCallback((data: ProductType[]) => {
    const prices = findMinAndMaxPrice(data);

    setCatalog(data);
    setMinAndMaxPrice(prices);
    setPrice(prices);
  }, []);

  const fetchCatalog = useCallback(async () => {
    setIsLoadingCatalog(true);
    try {
      if (filterType === "sort") {
        const data = await Api.getProducts({
          sortBy: sortValue.value as SortType,
        });
        setData(data);
        return;
      }
      if (filterType === "category") {
        const data = await Api.getProductsByCategory(categoryValue.value);
        setData(data);
        return;
      }

      const data = await Api.getProducts();
      setData(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoadingCatalog(false);
    }
  }, [categoryValue, filterType, setData, sortValue]);

  const fetchCategories = useCallback(async () => {
    try {
      const categories = await Api.getAllCategories();
      setCategories(categories);
    } catch (e) {
      console.error(e);
    }
  }, []);

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

  useEffect(() => {
    fetchCatalog();
  }, [sortValue, categoryValue]);

  useEffect(() => {
    fetchCatalog();
    fetchCategories();
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
