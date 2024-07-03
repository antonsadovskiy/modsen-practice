import { useEffect, useState } from "react";

import FiltersSVG from "@/assets/svg/filters.svg";
import SearchSVG from "@/assets/svg/search.svg";
import { CustomButton } from "@/components/custom-button";
import { CustomInput } from "@/components/custom-input";
import { CustomSelect, OptionType } from "@/components/custom-select";
import { CustomSlider } from "@/components/custom-slider";
import { Modal } from "@/components/modal";
import { sortOptions } from "@/constants/sort";
import { useAppSelector } from "@/hooks";
import { usePreventScroll } from "@/hooks/usePreventScroll";
import { useFilters } from "@/pages/shop/hooks/useFilters";
import {
  selectorCategoryValue,
  selectorFilterType,
  selectorMinAndMaxPrice,
  selectorPrice,
  selectorSearchValue,
  selectorSortValue,
} from "@/store/slices/filters";

import S from "./styled";

type MobileFiltersPropsType = {
  isLoading: boolean;
  categories: { value: string; title: string }[];
};

export const MobileFilters = ({
  categories,
  isLoading,
}: MobileFiltersPropsType) => {
  const searchValue = useAppSelector(selectorSearchValue);
  const categoryValue = useAppSelector(selectorCategoryValue);
  const sortValue = useAppSelector(selectorSortValue);
  const filterType = useAppSelector(selectorFilterType);
  const price = useAppSelector(selectorPrice);
  const minAndMaxPrice = useAppSelector(selectorMinAndMaxPrice);

  const { changeSearchValue, applyFilters } = useFilters();

  const [localFilterType, setLocalFilterType] = useState<
    "category" | "sort" | undefined
  >(filterType);

  const [localCommittedPrice, setLocalCommittedPrice] = useState<
    number[] | undefined
  >();

  const [localPrice, setLocalPrice] = useState<number[]>([0, 100]);

  const [localCategoryValue, setLocalCategoryValue] = useState<
    OptionType | undefined
  >(categoryValue);

  const [localSortValue, setLocalSortValue] = useState<OptionType | undefined>(
    sortValue,
  );

  const [isOpenModal, setIsOpenModal] = useState(false);

  usePreventScroll(isOpenModal);

  const openModalHandler = () => {
    setIsOpenModal(true);
  };
  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  const changeSelectValue = (value: OptionType, type: "category" | "sort") => {
    setLocalFilterType(type);

    if (type === "category") {
      setLocalCategoryValue(value);
      setLocalSortValue(undefined);
      return;
    }

    setLocalCategoryValue(undefined);
    setLocalSortValue(value);
  };

  const changePrice = (value: number[]) => {
    setLocalPrice(value);
  };

  const commitChangePrice = (value: number[]) => {
    setLocalCommittedPrice(value);
  };

  const applyFiltersHandler = () => {
    applyFilters({
      filterType: localFilterType,
      categoryValue: localCategoryValue,
      sortValue: localSortValue,
      committedPrice: localCommittedPrice,
    });
    setIsOpenModal(false);
  };

  const resetFilters = () => {
    setLocalFilterType(undefined);
    setLocalCommittedPrice(undefined);
    setLocalPrice(price);
    setLocalCategoryValue(undefined);
    setLocalSortValue(undefined);
  };

  useEffect(() => {
    setLocalPrice(minAndMaxPrice);
  }, [minAndMaxPrice]);

  return (
    <S.Container>
      <S.FiltersTitle onClick={openModalHandler}>
        <FiltersSVG height={18} width={18} />
        Filters
      </S.FiltersTitle>
      <CustomInput
        type={"text"}
        placeholder={"Search..."}
        value={searchValue}
        onChange={changeSearchValue}
        endIcon={<SearchSVG />}
      />
      <Modal
        isOpen={isOpenModal}
        confirmButtonText={"Apply"}
        onConfirmHandler={applyFiltersHandler}
        onCloseHandler={closeModalHandler}
        isShowCloseIcon
        title={"Filters"}
      >
        <S.Selects>
          <CustomSelect
            type={"category"}
            placeholder={"Shop by"}
            selected={localCategoryValue}
            options={categories}
            disabled={categories.length === 0}
            onChange={(value) => changeSelectValue(value, "category")}
          />
          <CustomSelect
            type={"sort"}
            placeholder={"Sort by"}
            selected={localSortValue}
            options={sortOptions}
            onChange={(value) => changeSelectValue(value, "sort")}
          />
        </S.Selects>
        <S.PriceContainer>
          <CustomSlider
            min={minAndMaxPrice[0]}
            max={minAndMaxPrice[1]}
            defaultValue={localPrice}
            value={localPrice}
            onValueChange={changePrice}
            onValueCommit={commitChangePrice}
          />
          <S.Price>
            Price:{" "}
            {isLoading ? "Loading..." : `$${localPrice[0]} - $${localPrice[1]}`}
          </S.Price>
        </S.PriceContainer>

        <S.ButtonContainer>
          <CustomButton onClick={resetFilters} variant={"secondary"}>
            Reset
          </CustomButton>
        </S.ButtonContainer>
      </Modal>
    </S.Container>
  );
};
