import React from "react";
import { render, screen } from "@testing-library/react";

import { Icon } from "./Icon";
import { IconProps } from "./icon.types";

const makeSut = (rest: IconProps) => {
  render(<Icon {...rest} data-testid="icon-element" />);
};

describe("GIVEN <Icon />", () => {
  describe("THEN should correctly render the submitted color", () => {
    it("THEN should correctly render the color default", () => {
      makeSut({ source: <svg /> });
      expect(
        screen.getByTestId("icon-element").getAttribute("class"),
      ).toContain("rarui-icon");
    });

    it("THEN should correctly render the color brand", () => {
      makeSut({ source: <svg />, color: "$brand" });
      expect(
        screen.getByTestId("icon-element").getAttribute("class"),
      ).toContain("color-brand");
    });

    it("THEN should correctly render the color error", () => {
      makeSut({ source: <svg />, color: "$error" });
      expect(
        screen.getByTestId("icon-element").getAttribute("class"),
      ).toContain("color-error");
    });

    it("THEN should correctly render the color success", () => {
      makeSut({ source: <svg />, color: "$success" });
      expect(
        screen.getByTestId("icon-element").getAttribute("class"),
      ).toContain("color-success");
    });

    it("THEN should correctly render the color info", () => {
      makeSut({ source: <svg />, color: "$info" });
      expect(
        screen.getByTestId("icon-element").getAttribute("class"),
      ).toContain("color-info");
    });

    it("THEN should correctly render the color disabled", () => {
      makeSut({ source: <svg />, color: "$disabled" });
      expect(
        screen.getByTestId("icon-element").getAttribute("class"),
      ).toContain("color-disabled");
    });

    it("THEN should correctly render the color invert", () => {
      makeSut({ source: <svg />, color: "$invert" });
      expect(
        screen.getByTestId("icon-element").getAttribute("class"),
      ).toContain("color-invert");
    });
  });
});
