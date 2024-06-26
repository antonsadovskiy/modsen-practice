import SearchSVG from "@/assets/svg/search.svg";
import { CustomButton } from "@/components/custom-button";
import { CustomInput } from "@/components/custom-input";
import { CustomSelect } from "@/components/custom-select";
import { CustomSlider } from "@/components/custom-slider";
import { sortOptions } from "@/constants/sort";
import { useFilters } from "@/pages/shop/hooks/useFilters";
import { useAppSelector } from "@/store/hooks";
import {
  selectorCategoryValue,
  selectorMinAndMaxPrice,
  selectorPrice,
  selectorSearchValue,
  selectorSortValue,
} from "@/store/slices/filters";

import S from "./styled";

type DesktopFiltersPropsType = {
  isLoading: boolean;
  categories: { value: string; title: string }[];
};

export const DesktopFilters = ({
  categories,
  isLoading,
}: DesktopFiltersPropsType) => {
  const {
    changeSelectValue,
    changeSearchValue,
    priceChangeCommitHandler,
    priceChangeHandler,
    clearFiltersHandler,
  } = useFilters();

  const searchValue = useAppSelector(selectorSearchValue);
  const sortValue = useAppSelector(selectorSortValue);
  const categoryValue = useAppSelector(selectorCategoryValue);
  const minAndMaxPrice = useAppSelector(selectorMinAndMaxPrice);
  const price = useAppSelector(selectorPrice);

  return (
    <S.Container>
      <CustomInput
        type={"text"}
        placeholder={"Search..."}
        value={searchValue}
        onChange={changeSearchValue}
        endIcon={<SearchSVG />}
      />
      <S.Selects>
        <CustomSelect
          placeholder={"Shop by"}
          selected={categoryValue}
          options={categories}
          disabled={categories.length === 0}
          onChange={(value) => changeSelectValue(value, "category")}
        />
        <CustomSelect
          placeholder={"Sort by"}
          selected={sortValue}
          options={sortOptions}
          onChange={(value) => changeSelectValue(value, "sort")}
        />
      </S.Selects>
      <div>
        <CustomSlider
          min={minAndMaxPrice[0]}
          max={minAndMaxPrice[1]}
          defaultValue={price}
          value={price}
          onValueChange={priceChangeHandler}
          onValueCommit={priceChangeCommitHandler}
        />
        <S.Price>
          Price: {isLoading ? "Loading..." : `$${price[0]} - $${price[1]}`}
        </S.Price>
      </div>
      <S.ButtonContainer>
        <CustomButton onClick={clearFiltersHandler} variant={"secondary"}>
          Clear filters
        </CustomButton>
      </S.ButtonContainer>
    </S.Container>
  );
};
