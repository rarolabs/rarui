import React from "react";
import { render, screen } from "@testing-library/react";

import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "./checkbox.types";

const makeSut = (props: CheckboxProps) => {
  render(<Checkbox {...props} data-testid="checkbox-input" />);
};

describe("GIVEN <Checkbox />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the sent text", () => {
      makeSut({ id: "checkbox", label: "Checkbox" });
      expect(screen.getByText("Checkbox")).toBeDefined();
      expect(screen.queryByTestId("icon-indeterminate")).toBeNull();
    });

    it("THEN should check the checkbox correctly", () => {
      makeSut({ id: "checkbox", label: "Checkbox" });
      expect(
        screen.getByTestId<HTMLInputElement>("checkbox-input").checked,
      ).toBeFalsy();
      screen.getByText("Checkbox").click();
      expect(
        screen.getByTestId<HTMLInputElement>("checkbox-input").checked,
      ).toBeTruthy();
    });
  });

  describe("THEN should correctly render the appearance", () => {
    it("THEN should correctly render the appearance disabled", () => {
      makeSut({ id: "checkbox", label: "Checkbox", disabled: true });
      expect(
        screen.getByTestId<HTMLInputElement>("checkbox-input").disabled,
      ).toBeTruthy();
    });

    it("THEN should correctly render the appearance indeterminate", () => {
      makeSut({ id: "checkbox", label: "Checkbox", indeterminate: true });
      expect(
        screen.getByTestId("checkbox-input").getAttribute("class"),
      ).toContain("indeterminate");
    });

    it("THEN should correctly render the appearance brand", () => {
      makeSut({
        id: "checkbox",
        label: "Checkbox",
      });
      expect(screen.getByText("Checkbox")).toBeDefined();
    });

    it("THEN should correctly render the appearance error", () => {
      makeSut({ id: "checkbox", label: "Checkbox", error: true });
      expect(
        screen.getByTestId("checkbox-input").getAttribute("class"),
      ).toContain("error");
      expect(screen.getByText("Checkbox")).toBeDefined();
    });
  });
});
