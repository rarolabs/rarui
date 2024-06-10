import React from "react";
import { render, screen } from "@testing-library/react";

import { BreadcrumbSeparator } from "./Separator";

const makeSut = () => {
  render(<BreadcrumbSeparator data-testid="separator-element" />);
};

describe("GIVEN <Breadcrumb.Separator />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut();
      expect(screen.getByTestId("separator-element")).toBeDefined();
    });
  });
});
