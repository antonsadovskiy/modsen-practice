import { describe, expect, test } from "@jest/globals";

import { OptionType } from "@/components/custom-select";
import {
  filtersActions,
  filtersReducer,
  selectorCategoryValue,
  selectorCommittedPrice,
  selectorFilterType,
  selectorMinAndMaxPrice,
  selectorPrice,
  selectorSearchValue,
  selectorSortValue,
} from "@/store/slices/filters";
import {
  ApplyFiltersPayloadType,
  FiltersSliceInitialStateType,
  FilterType,
} from "@/store/slices/filters/types";

let state: FiltersSliceInitialStateType;

describe("filters slice", () => {
  beforeEach(() => {
    state = {
      searchValue: "test initial search value",
      sortValue: { value: "test", title: "test" },
      categoryValue: { value: "test", title: "test" },
      filterType: "sort",
      price: [0, 100],
      committedPrice: [54, 23],
      minAndMaxPrice: [0, 100],
    };
  });

  test("should apply filters", () => {
    const newValues: ApplyFiltersPayloadType = {
      categoryValue: { value: "test", title: "test" },
      committedPrice: [54, 65],
      filterType: undefined,
      sortValue: { value: "test", title: "test" },
    };

    const updatedState = filtersReducer(
      state,
      filtersActions.applyFilters(newValues),
    );

    expect(updatedState).toEqual({
      ...state,
      sortValue: newValues.sortValue,
      categoryValue: newValues.categoryValue,
      filterType: newValues.filterType,
      committedPrice: newValues.committedPrice,
    });
  });

  test("should clear filters", () => {
    const updatedState = filtersReducer(state, filtersActions.clearFilters());

    expect(updatedState).toEqual({
      ...state,
      searchValue: "",
      sortValue: undefined,
      categoryValue: undefined,
      filterType: undefined,
      price: state.minAndMaxPrice,
      committedPrice: undefined,
    });
  });

  test("should set search value", () => {
    const newSearchValue = "test";

    const updatedState = filtersReducer(
      state,
      filtersActions.setSearchValue(newSearchValue),
    );

    expect(updatedState).toEqual({
      ...state,
      searchValue: newSearchValue,
    });
  });

  test("should set sort value", () => {
    const newSortValue: OptionType | undefined = {
      value: "test",
      title: "test",
    };

    const updatedState = filtersReducer(
      state,
      filtersActions.setSortValue(newSortValue),
    );

    expect(updatedState).toEqual({
      ...state,
      sortValue: newSortValue,
    });
  });

  test("should set category value", () => {
    const newCategoryValue: OptionType | undefined = {
      value: "test",
      title: "test",
    };

    const updatedState = filtersReducer(
      state,
      filtersActions.setCategoryValue(newCategoryValue),
    );

    expect(updatedState).toEqual({
      ...state,
      categoryValue: newCategoryValue,
    });
  });

  test("should set filter type", () => {
    const newFilterType: FilterType | undefined = "sort";

    const updatedState = filtersReducer(
      state,
      filtersActions.setFilterType(newFilterType),
    );

    expect(updatedState).toEqual({
      ...state,
      filterType: newFilterType,
    });
  });

  test("should set price", () => {
    const newPrice: number[] = [35, 75];

    const updatedState = filtersReducer(
      state,
      filtersActions.setPrice(newPrice),
    );

    expect(updatedState).toEqual({
      ...state,
      price: newPrice,
    });
  });

  test("should set committed price", () => {
    const newCommittedPrice: number[] = [70, 75];

    const updatedState = filtersReducer(
      state,
      filtersActions.setCommittedPrice(newCommittedPrice),
    );

    expect(updatedState).toEqual({
      ...state,
      committedPrice: newCommittedPrice,
    });
  });

  test("should set min and max price", () => {
    const newMinAndMaxPrice: number[] = [23, 75];

    const updatedState = filtersReducer(
      state,
      filtersActions.setMinAndMaxPrice(newMinAndMaxPrice),
    );

    expect(updatedState).toEqual({
      ...state,
      minAndMaxPrice: newMinAndMaxPrice,
    });
  });

  test("should select search value", () => {
    const searchValue = selectorSearchValue({ filters: state });

    expect(searchValue).toBe(state.searchValue);
  });

  test("should select search value", () => {
    const sortValue = selectorSortValue({ filters: state });

    expect(sortValue).toBe(state.sortValue);
  });

  test("should select category value", () => {
    const categoryValue = selectorCategoryValue({ filters: state });

    expect(categoryValue).toBe(state.categoryValue);
  });

  test("should select filter type", () => {
    const filterType = selectorFilterType({ filters: state });

    expect(filterType).toBe(state.filterType);
  });

  test("should select price", () => {
    const price = selectorPrice({ filters: state });

    expect(price).toBe(state.price);
  });

  test("should select committed price", () => {
    const committedPrice = selectorCommittedPrice({ filters: state });

    expect(committedPrice).toBe(state.committedPrice);
  });

  test("should select min and max price", () => {
    const minAndMaxPrice = selectorMinAndMaxPrice({ filters: state });

    expect(minAndMaxPrice).toBe(state.minAndMaxPrice);
  });
});
