import React from "react";
import { render, screen } from "@testing-library/react";

import { Toggle } from "./Toggle";
import { ToggleProps } from "./toggle.types";

const makeSut = (props: ToggleProps) => {
  render(<Toggle {...props} data-testid="toggle-input" />);
};

describe("GIVEN <Toggle />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the sent text", () => {
      makeSut({ name: "toggle", label: "My Toggle" });
      expect(screen.getByText("My Toggle")).toBeDefined();
    });

    it("AND should active the toggle correctly", () => {
      makeSut({ name: "toggle", label: "My Toggle" });
      expect(
        screen.getByTestId<HTMLInputElement>("toggle-input").checked,
      ).toBeFalsy();
      screen.getByText("My Toggle").click();
      expect(
        screen.getByTestId<HTMLInputElement>("toggle-input").checked,
      ).toBeTruthy();
    });

    it("AND should selected the toggle correctly for default", () => {
      makeSut({ name: "toggle", selected: true });
      expect(
        screen.getByTestId<HTMLInputElement>("toggle-input").checked,
      ).toBeTruthy();
    });
  });

  describe("THEN should correctly render the submitted size", () => {
    it("THEN should correctly render the size default", () => {
      makeSut({ name: "toggle" });
      expect(screen.getByTestId("slider").getAttribute("class")).toContain(
        "size_large",
      );
    });

    it("AND should correctly render the size large", () => {
      makeSut({ name: "toggle", size: "large" });
      expect(screen.getByTestId("slider").getAttribute("class")).toContain(
        "size_large",
      );
    });

    it("AND should correctly render the size small", () => {
      makeSut({ name: "toggle", size: "small" });
      expect(screen.getByTestId("slider").getAttribute("class")).toContain(
        "size_small",
      );
    });
  });

  describe("THEN should correctly render the submitted error", () => {
    it("THEN should correctly render the error false", () => {
      makeSut({ name: "toggle" });
      expect(screen.getByTestId("slider").getAttribute("class")).not.toContain(
        "error_true",
      );
    });

    it("AND should correctly render the error true", () => {
      makeSut({ name: "toggle", error: true });
      expect(screen.getByTestId("slider").getAttribute("class")).toContain(
        "error_true",
      );
    });
  });
});
