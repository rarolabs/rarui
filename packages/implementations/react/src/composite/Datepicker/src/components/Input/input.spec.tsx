import React from "react";
import { render, screen } from "@testing-library/react";

import { DatepickerInput } from "./Input";
import { DatepickerInputProps } from "./input.types";

const makeSut = (props?: DatepickerInputProps) => {
  render(<DatepickerInput {...props} data-testid="input-element" />);
};

describe("GIVEN <Datepicker.Input />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut();
      expect(screen.getByTestId("input-element")).toBeDefined();
    });
  });
});
