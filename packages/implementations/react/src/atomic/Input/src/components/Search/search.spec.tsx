import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Search, SearchProps } from "./Search";

const makeSut = (rest?: Omit<SearchProps, "children">) => {
  render(<Search {...rest} data-testid="input-search-element" />);
};

describe("GIVEN <Input.Search />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the input type", () => {
      makeSut();
      const input = screen.getByTestId<HTMLInputElement>(
        "input-search-element",
      );
      fireEvent.change(input, { target: { value: "my search" } });
      expect(input.type).toEqual("search");
    });

    it("AND should position the search icon correctly", () => {
      makeSut();
      const input = screen.getByTestId("input-search-element");
      fireEvent.change(input, { target: { value: "my search" } });
      const icon = screen.getByTestId("icon-search");
      fireEvent.click(icon);
      expect(icon.getAttribute("class")).toContain("position_end");
    });
  });
});
