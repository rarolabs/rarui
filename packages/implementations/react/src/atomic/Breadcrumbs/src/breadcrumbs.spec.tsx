import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Breadcrumbs, BreadcrumbsProps } from ".";

const makeSut = (rest: BreadcrumbsProps) => {
  render(<Breadcrumbs {...rest} data-testid="breadcrumb-element" />);
};

const itens = [
  {
    id: "1",
    title: "Example 1",
    href: "/",
  },
  {
    id: "2",
    title: "Example 2",
    href: "/",
  },
  {
    id: "3",
    title: "Example 3",
    href: "/",
  },
  {
    id: "4",
    title: "Example 4",
    href: "/",
  },
];

describe("GIVEN <Breadcrumbs />", () => {
  describe("THEN should correctly render the component", () => {
    it("THEN should correctly render default component", () => {
      makeSut({ itens });
      expect(screen.queryByText("Example 1")).toBeInTheDocument();
      expect(screen.queryByText("Example 2")).toBeInTheDocument();
      expect(screen.queryByText("Example 3")).toBeInTheDocument();
      expect(screen.queryByText("Example 4")).toBeInTheDocument();
    });
    it("THEN should correctly render collapsed component", () => {
      makeSut({ itens, maxItens: 2 });
      expect(
        screen.getByTestId("breadcrumb-truncate").getAttribute("class"),
      ).toContain("breadcrumbsTruncate");
    });
  });
});
