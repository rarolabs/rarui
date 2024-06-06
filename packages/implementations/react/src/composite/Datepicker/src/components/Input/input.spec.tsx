import React from "react";
import { render, screen } from "@testing-library/react";

import { Input } from "./Input";
import { InputProps } from "./input.types";

const makeSut = (props?: InputProps) => {
  render(<Input {...props} data-testid="input-element" />);
};

describe("GIVEN <Datepicker.Input />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut();
      expect(screen.getByTestId("input-element")).toBeDefined();
    });
  });
});
