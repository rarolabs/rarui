import React from "react";
import { render, screen } from "@testing-library/react";

import { Input, InputProps } from "./Input";

const makeSut = (rest?: Omit<InputProps, "children">) => {
  render(<Input {...rest} data-testid="input-element" />);
};

describe("GIVEN <Input />", () => {
  describe("WHEN rendered", () => {
    it("THEN should properly disable the component", () => {
      makeSut({ disabled: true });
      expect(
        screen.getByRole<HTMLInputElement>("textbox").disabled,
      ).toBeTruthy();
    });
  });

  describe("THEN should correctly render the submitted position and icon", () => {
    it("THEN should render the submitted leading component", () => {
      makeSut({
        leadingStart: <div data-testid="my-component" />,
      });
      screen.getByTestId("my-component").click();
      expect(screen.getByTestId("my-component")).toBeDefined();
    });

    it("AND should render the render sent to the start", () => {
      makeSut({
        leadingStart: <svg data-testid="my-component" />,
      });
      expect(screen.getByTestId("my-component")).toBeDefined();
      expect(
        screen.getByTestId("input-element-leading-start").getAttribute("class"),
      ).toContain("leading_position_start");
    });

    it("AND should render the render sent to the end", () => {
      makeSut({
        leadingEnd: <svg data-testid="my-component" />,
      });
      expect(screen.getByTestId("my-component")).toBeDefined();
      expect(
        screen.getByTestId("input-element-leading-end").getAttribute("class"),
      ).toContain("leading_position_end");
    });

    it("AND should render the render sent to the start and end", () => {
      makeSut({
        leadingStart: <svg data-testid="my-component-start" />,
        leadingEnd: <svg data-testid="my-component-end" />,
      });
      expect(screen.getByTestId("my-component-start")).toBeDefined();
      expect(screen.getByTestId("my-component-end")).toBeDefined();
      expect(
        screen.getByTestId("input-element-leading-start").getAttribute("class"),
      ).toContain("leading_position_start");
      expect(
        screen.getByTestId("input-element-leading-end").getAttribute("class"),
      ).toContain("leading_position_end");
    });
  });

  describe("THEN should correctly render the submitted appearance", () => {
    it("THEN should correctly render the appearance success", () => {
      makeSut({ appearance: "success" });
      expect(
        screen.getByTestId("input-element-container").getAttribute("class"),
      ).toContain("appearance_success");
    });

    it("AND should correctly render the appearance error", () => {
      makeSut({ appearance: "error" });
      expect(
        screen.getByTestId("input-element-container").getAttribute("class"),
      ).toContain("appearance_error");
    });
  });

  describe("THEN should correctly render the submitted size", () => {
    it("THEN should correctly render the size large", () => {
      makeSut({ size: "large" });
      expect(screen.getByRole("textbox").getAttribute("class")).toContain(
        "size_large",
      );
    });

    it("AND should correctly render the size medium", () => {
      makeSut({ size: "medium" });
      expect(screen.getByRole("textbox").getAttribute("class")).toContain(
        "size_medium",
      );
    });

    it("AND should correctly render the size small", () => {
      makeSut({ size: "small" });
      expect(screen.getByRole("textbox").getAttribute("class")).toContain(
        "size_small",
      );
    });
  });
});
