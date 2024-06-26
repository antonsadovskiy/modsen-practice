import { OptionType } from "@/components/custom-select";

export type InitialStateType = {
  searchValue: string;
  sortValue?: OptionType;
  categoryValue?: OptionType;
  filterType?: FilterType;
  price: number[];
  committedPrice?: number[];
  minAndMaxPrice: number[];
};

export type FilterType = "sort" | "category";
