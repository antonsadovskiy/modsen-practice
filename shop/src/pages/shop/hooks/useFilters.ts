import { ChangeEvent, useCallback } from "react";

import { OptionType } from "@/components/custom-select";
import { useAppDispatch } from "@/hooks";
import { filtersActions } from "@/store/slices/filters";
import { FilterType } from "@/store/slices/filters/types";

type ApplyFiltersType = {
  filterType?: FilterType;
  categoryValue?: OptionType;
  sortValue?: OptionType;
  committedPrice?: number[];
};

export const useFilters = () => {
  const dispatch = useAppDispatch();

  const changeSelectValue = useCallback(
    (value: OptionType, type: "category" | "sort") => {
      dispatch(filtersActions.setFilterType(type));

      if (type === "category") {
        dispatch(filtersActions.setCategoryValue(value));
        dispatch(filtersActions.setSortValue(undefined));
        return;
      }
      dispatch(filtersActions.setCategoryValue(undefined));
      dispatch(filtersActions.setSortValue(value));
    },
    [dispatch],
  );

  const changeSearchValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(filtersActions.setSearchValue(e.currentTarget.value));
    },
    [dispatch],
  );

  const priceChangeHandler = useCallback(
    (value: number[]) => {
      dispatch(filtersActions.setPrice(value));
    },
    [dispatch],
  );

  const priceChangeCommitHandler = useCallback(
    (value: number[]) => {
      dispatch(filtersActions.setCommittedPrice(value));
    },
    [dispatch],
  );

  const clearFiltersHandler = useCallback(() => {
    dispatch(filtersActions.clearFilters());
  }, [dispatch]);

  const applyFilters = useCallback(
    ({
      filterType,
      categoryValue,
      sortValue,
      committedPrice,
    }: ApplyFiltersType) => {
      dispatch(
        filtersActions.applyFilters({
          filterType,
          categoryValue,
          sortValue,
          committedPrice,
        }),
      );
    },
    [dispatch],
  );

  return {
    changeSelectValue,
    changeSearchValue,
    priceChangeHandler,
    priceChangeCommitHandler,
    clearFiltersHandler,
    applyFilters,
  };
};
