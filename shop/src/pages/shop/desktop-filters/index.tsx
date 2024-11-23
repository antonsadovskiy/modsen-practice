import { Button, Input, Select } from "antd";

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
      <Input
        value={searchValue}
        placeholder={"Поиск..."}
        onChange={changeSearchValue}
      />
      <S.Selects>
        <Select
          placeholder={"Выберите категорию"}
          disabled={categories.length === 0}
          value={categoryValue}
          options={categories.map((item) => ({
            label: item.title,
            value: item.value,
          }))}
          onChange={(_, option) => {
            const isArray = Array.isArray(option);

            changeSelectValue(
              isArray
                ? { value: option[0].value, title: option[0].value }
                : { value: option.value, title: option.value },
              "category",
            );
          }}
        />

        <Select
          placeholder={"Выберите сортировку"}
          value={sortValue}
          options={sortOptions.map((item) => ({
            label: item.title,
            value: item.value,
          }))}
          onChange={(_, option) => {
            const isArray = Array.isArray(option);

            changeSelectValue(
              isArray
                ? { value: option[0].value, title: option[0].value }
                : { value: option.value, title: option.value },
              "sort",
            );
          }}
        />
      </S.Selects>
      <S.ButtonContainer>
        <Button style={{ width: "100%" }} onClick={clearFiltersHandler}>
          Очистить фильтры
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
};
