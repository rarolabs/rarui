import React from "react";
import { render, screen } from "@testing-library/react";

import { Breadcrumb } from "./Breadcrumb";
import { BreadcrumbProps } from "./breadcrumb.types";

Object.defineProperty(window, "crypto", {
  value: { randomUUID: () => `${Math.floor(Math.random() * Date.now() + 1)}` },
});

const makeSut = (rest?: Omit<BreadcrumbProps, "children">) => {
  render(
    <Breadcrumb {...rest} data-testid="breadcrumb-element">
      <Breadcrumb.Item as="a" href="/">
        Example 1
      </Breadcrumb.Item>
      <Breadcrumb.Item as="a" href="/">
        Example 2
      </Breadcrumb.Item>
      <Breadcrumb.Item as="a" href="/">
        Example 3
      </Breadcrumb.Item>
      <Breadcrumb.Item as="a" href="/">
        Example 4
      </Breadcrumb.Item>
    </Breadcrumb>,
  );
};

describe("GIVEN <Breadcrumb />", () => {
  beforeEach(() => {
    Object.defineProperty(window, "crypto", {
      value: { randomUUID: () => `${new Date().toISOString()}` },
    });
  });
  describe("THEN should correctly render the component", () => {
    it("THEN should correctly render default component", () => {
      makeSut();
      expect(screen.queryByText("Example 1")).toBeDefined();
      expect(screen.queryByText("Example 2")).toBeDefined();
      expect(screen.queryByText("Example 3")).toBeDefined();
      expect(screen.queryByText("Example 4")).toBeDefined();
    });

    it("AND should correctly render collapsed component", () => {
      makeSut({ itensAfterTruncate: 2 });
      expect(screen.getByTestId("dropdown-container")).toBeDefined();
    });
  });
});
