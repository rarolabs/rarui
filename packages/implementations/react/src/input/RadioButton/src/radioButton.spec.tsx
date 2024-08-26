import React from "react";
import { render, screen } from "@testing-library/react";

import { RadioButton } from "./RadioButton";
import { RadioButtonProps } from "./radioButton.types";

const makeSut = (rest: RadioButtonProps) => {
  render(<RadioButton {...rest} data-testid="radio-element" />);
};

describe("GIVEN <RadioButton />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the sent text", () => {
      makeSut({ name: "radio", label: "My Radio" });
      expect(screen.getByText("My Radio")).toBeDefined();
    });

    it("AND should check the checkbox correctly", () => {
      makeSut({ name: "radio", label: "My Radio" });
      expect(
        screen.getByTestId<HTMLInputElement>("radio-element").checked,
      ).toBeFalsy();
      screen.getByText("My Radio").click();
      expect(
        screen.getByTestId<HTMLInputElement>("radio-element").checked,
      ).toBeTruthy();
    });
  });

  describe("THEN should correctly render the submitted appearance", () => {
    it("THEN should correctly render the appearance error", () => {
      makeSut({ name: "checkbox", label: "My Checkbox", error: true });
      expect(
        screen.getByTestId("checkmark-element").getAttribute("class"),
      ).toContain("error_true");
    });

    it("AND should correctly render the appearance disabled", () => {
      makeSut({ name: "checkbox", label: "My Checkbox", disabled: true });
      expect(
        screen.getByTestId<HTMLInputElement>("radio-element").disabled,
      ).toBeTruthy();
      expect(screen.getByTestId("checkmark-element")).toBeDefined();
    });
  });

  describe("THEN should correctly render the submitted size", () => {
    it("THEN should correctly render the size large", () => {
      makeSut({ size: "large" });
      expect(
        screen.getByTestId("checkmark-element").getAttribute("class"),
      ).toContain("size_large");
    });

    it("AND should correctly render the size small", () => {
      makeSut({ size: "small" });
      expect(
        screen.getByTestId("checkmark-element").getAttribute("class"),
      ).toContain("size_small");
    });
  });
});
