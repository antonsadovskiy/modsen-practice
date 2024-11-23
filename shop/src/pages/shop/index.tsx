import { useCallback, useEffect, useMemo, useState } from "react";

import { Typography } from "antd";

import { useGetCategoriesQuery, useGetProductsQuery } from "@/api";
import { ProductType } from "@/api/types";
import { useAppDispatch, useAppSelector, useDebounce } from "@/hooks";
import { Catalog } from "@/pages/shop/catalog";
import { DesktopFilters } from "@/pages/shop/desktop-filters";
import { MobileFilters } from "@/pages/shop/mobile-filters";
import {
  filtersActions,
  selectorCategoryValue,
  selectorCommittedPrice,
  selectorSearchValue,
  selectorSortValue,
} from "@/store/slices/filters";
import { findMinAndMaxPrice } from "@/utils/findMinAndMaxPrice";

import S from "./styled";

type SortType = "ASC" | "DESC";

export const ShopPage = () => {
  const searchValue = useAppSelector(selectorSearchValue);
  const sortValue = useAppSelector(selectorSortValue);
  const categoryValue = useAppSelector(selectorCategoryValue);
  const committedPrice = useAppSelector(selectorCommittedPrice);

  const [catalog, setCatalog] = useState<ProductType[]>([]);
  const [isLoadingCatalog, setIsLoadingCatalog] = useState(false);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const dispatch = useAppDispatch();

  const { data: categoriesData } = useGetCategoriesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data ?? { data: [] },
    }),
  });

  const { data: productsData, isLoading } = useGetProductsQuery(
    {
      sort: sortValue
        ? (sortValue?.value.toUpperCase() as SortType)
        : undefined,
      categoryId: categoryValue ? Number(categoryValue?.value) : undefined,
    },
    {
      selectFromResult: ({ data, ...rest }) => ({
        data: data ?? { data: [] },
        ...rest,
      }),
    },
  );

  const mappedCategories = useMemo(
    () =>
      categoriesData.data.map((category) => ({
        value: category.id.toString(),
        title: category.name,
      })),
    [categoriesData],
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

  const setData = useCallback(
    (data: ProductType[]) => {
      const prices = findMinAndMaxPrice(data);

      setCatalog(data);

      dispatch(filtersActions.setMinAndMaxPrice(prices));
      dispatch(filtersActions.setPrice(prices));
    },
    [dispatch],
  );

  useEffect(() => {
    setIsLoadingCatalog(isLoading);
    setData(productsData.data);
  }, [isLoading, productsData, setData]);

  return (
    <S.Wrapper>
      <Typography.Title level={3}>Каталог</Typography.Title>
      <S.Content>
        <MobileFilters
          categories={mappedCategories}
          isLoading={isLoadingCatalog}
        />
        <DesktopFilters
          categories={mappedCategories}
          isLoading={isLoadingCatalog}
        />
        <Catalog catalog={filteredCatalog} isLoading={isLoadingCatalog} />
      </S.Content>
    </S.Wrapper>
  );
};
