import { skipToken } from "@reduxjs/toolkit/query";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "@/api";
import { ProductType } from "@/api/types";
import { useDebounce } from "@/hooks/useDebounce";
import { Catalog } from "@/pages/shop/catalog";
import { DesktopFilters } from "@/pages/shop/desktop-filters";
import { MobileFilters } from "@/pages/shop/mobile-filters";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  filtersActions,
  selectorCategoryValue,
  selectorCommittedPrice,
  selectorFilterType,
  selectorSearchValue,
  selectorSortValue,
} from "@/store/slices/filters";
import { findMinAndMaxPrice } from "@/utils/findMinAndMaxPrice";

import S from "./styled";

type SortType = "asc" | "desc";

export const ShopPage = () => {
  const searchValue = useAppSelector(selectorSearchValue);
  const sortValue = useAppSelector(selectorSortValue);
  const categoryValue = useAppSelector(selectorCategoryValue);
  const filterType = useAppSelector(selectorFilterType);
  const committedPrice = useAppSelector(selectorCommittedPrice);

  const [catalog, setCatalog] = useState<ProductType[]>([]);
  const [isLoadingCatalog, setIsLoadingCatalog] = useState(false);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const dispatch = useAppDispatch();

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

  return (
    <S.Wrapper>
      <S.PageTitle>Shop the latest</S.PageTitle>
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
