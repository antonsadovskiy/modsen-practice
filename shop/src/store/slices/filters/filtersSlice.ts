import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { OptionType } from "@/components/custom-select";
import {
  ApplyFiltersPayloadType,
  FiltersSliceInitialStateType,
  FilterType,
} from "@/store/slices/filters/types";

const initialState: FiltersSliceInitialStateType = {
  searchValue: "",
  sortValue: undefined,
  categoryValue: undefined,
  filterType: undefined,
  price: [0, 100],
  committedPrice: undefined,
  minAndMaxPrice: [0, 100],
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    applyFilters: (state, action: PayloadAction<ApplyFiltersPayloadType>) => {
      state.sortValue = action.payload.sortValue;
      state.categoryValue = action.payload.categoryValue;
      state.filterType = action.payload.filterType;
      state.committedPrice = action.payload.committedPrice;
    },
    clearFilters: (state) => {
      state.searchValue = "";
      state.sortValue = undefined;
      state.categoryValue = undefined;
      state.price = state.minAndMaxPrice;
      state.committedPrice = undefined;
      state.filterType = undefined;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSortValue: (state, action: PayloadAction<OptionType | undefined>) => {
      state.sortValue = action.payload;
    },
    setCategoryValue: (
      state,
      action: PayloadAction<OptionType | undefined>,
    ) => {
      state.categoryValue = action.payload;
    },
    setFilterType: (state, action: PayloadAction<FilterType | undefined>) => {
      state.filterType = action.payload;
    },
    setPrice: (state, action: PayloadAction<number[]>) => {
      state.price = action.payload;
    },
    setCommittedPrice: (state, action: PayloadAction<number[] | undefined>) => {
      state.committedPrice = action.payload;
    },
    setMinAndMaxPrice: (state, action: PayloadAction<number[]>) => {
      state.minAndMaxPrice = action.payload;
    },
  },
  selectors: {
    selectorSearchValue: (sliceState) => sliceState.searchValue,
    selectorSortValue: (sliceState) => sliceState.sortValue,
    selectorCategoryValue: (sliceState) => sliceState.categoryValue,
    selectorFilterType: (sliceState) => sliceState.filterType,
    selectorPrice: (sliceState) => sliceState.price,
    selectorCommittedPrice: (sliceState) => sliceState.committedPrice,
    selectorMinAndMaxPrice: (sliceState) => sliceState.minAndMaxPrice,
  },
});

export const filtersReducer = slice.reducer;

export const filtersActions = slice.actions;

export const {
  selectorSearchValue,
  selectorSortValue,
  selectorCategoryValue,
  selectorFilterType,
  selectorPrice,
  selectorCommittedPrice,
  selectorMinAndMaxPrice,
} = slice.selectors;
