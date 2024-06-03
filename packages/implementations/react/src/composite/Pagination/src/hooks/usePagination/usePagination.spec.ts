import { renderHook } from "@testing-library/react";

import { usePagination } from "./usePagination";
import { UsePaginationProps } from "./usePagination.types";
import { DOTS } from "./usePagination.definitions";

const makeSut = (rest: UsePaginationProps) =>
  renderHook(() => usePagination(rest));

describe("GIVEN usePagination", () => {
  describe("WHEN the hook runs", () => {
    it("THEN should correctly return array pages", () => {
      const { result } = makeSut({
        activePage: 1,
        pageCount: 3,
      });
      expect(result.current).toEqual([1, 2, 3]);
    });

    it("AND should render the dots on the left", () => {
      const { result } = makeSut({
        activePage: 18,
        pageCount: 20,
      });
      expect(result.current).toEqual([1, DOTS, 17, 18, 19, 20]);
    });

    it("AND should render the dots on the right", () => {
      const { result } = makeSut({
        activePage: 2,
        pageCount: 20,
      });
      expect(result.current).toEqual([1, 2, 3, 4, DOTS, 20]);
    });

    it("AND should render the left and right dots", () => {
      const { result } = makeSut({
        activePage: 5,
        pageCount: 20,
      });
      expect(result.current).toEqual([1, DOTS, 4, 5, 6, DOTS, 20]);
    });

    it("AND should render the default return", () => {
      const { result } = makeSut({
        activePage: NaN,
        pageCount: 20,
      });
      expect(result.current).toEqual([]);
    });
  });
});
