import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { sortOptions } from "@/constants/sort";
import { useAppSelector } from "@/hooks";
import { useFilters } from "@/pages/shop/hooks/useFilters";
import {
  selectorCategoryValue,
  selectorSearchValue,
  selectorSortValue,
} from "@/store/slices/filters";

import S from "./styled";

type DesktopFiltersPropsType = {
  isLoading: boolean;
  categories: { value: string; title: string }[];
};

export const DesktopFilters = ({ categories }: DesktopFiltersPropsType) => {
  const { changeSelectValue, changeSearchValue, clearFiltersHandler } =
    useFilters();

  const searchValue = useAppSelector(selectorSearchValue);
  const sortValue = useAppSelector(selectorSortValue);
  const categoryValue = useAppSelector(selectorCategoryValue);

  return (
    <S.Container>
      <TextField
        data-cy={"search-input"}
        type={"text"}
        label={"Search..."}
        value={searchValue}
        onChange={changeSearchValue}
        fullWidth
      />
      <S.Selects>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            variant={"outlined"}
            value={categoryValue?.value ?? ""}
            label="Category"
            disabled={categories.length === 0}
            onChange={(e) => {
              const option = categories.find(
                (item) => item.value === e.target.value,
              );
              changeSelectValue(option, "category");
            }}
          >
            {categories.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Sort</InputLabel>
          <Select
            variant={"outlined"}
            value={sortValue?.value ?? ""}
            label="Sort"
            onChange={(e) => {
              const option = sortOptions.find(
                (item) => item.value === e.target.value,
              );
              changeSelectValue(option, "sort");
            }}
          >
            {sortOptions.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </S.Selects>
      <S.ButtonContainer>
        <Button fullWidth onClick={clearFiltersHandler} variant={"contained"}>
          Clear filters
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
};
