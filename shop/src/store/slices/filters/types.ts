import { OptionType } from "@/components/custom-select";

export type FiltersSliceInitialStateType = {
  searchValue: string;
  sortValue?: OptionType;
  categoryValue?: OptionType;
  filterType?: FilterType;
  price: number[];
  committedPrice?: number[];
  minAndMaxPrice: number[];
};

export type FilterType = "sort" | "category";

export type ApplyFiltersPayloadType = {
  sortValue?: OptionType;
  categoryValue?: OptionType;
  filterType?: FilterType;
  committedPrice?: number[];
};
