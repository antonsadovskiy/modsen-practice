import { describe, expect } from "@jest/globals";

import { ProductType } from "@/api/types";
import { findMinAndMaxPrice } from "@/utils/findMinAndMaxPrice";

describe("utils", () => {
  test("should find min and max values in array", () => {
    const data: ProductType[] = [
      {
        id: 1,
        price: 54,
        description: "",
        image: "",
        category: "",
        rating: { rate: 0, count: 0 },
        title: "",
      },
      {
        id: 2,
        price: 2,
        description: "",
        image: "",
        category: "",
        rating: { rate: 0, count: 0 },
        title: "",
      },
      {
        id: 3,
        price: 43,
        description: "",
        image: "",
        category: "",
        rating: { rate: 0, count: 0 },
        title: "",
      },
      {
        id: 4,
        price: 10,
        description: "",
        image: "",
        category: "",
        rating: { rate: 0, count: 0 },
        title: "",
      },
    ];

    const [min, max] = findMinAndMaxPrice(data);

    expect(min).toBe(2);
    expect(max).toBe(54);
  });
});
