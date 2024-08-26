import React from "react";

import { render, screen } from "@testing-library/react";
import { ProgressCircle } from "./Circle";
import { ProgressCircleProps } from "./circle.types";

const makeSut = ({ percentage, size, color }: ProgressCircleProps) => {
  render(
    <ProgressCircle
      percentage={percentage}
      size={size}
      color={color}
      data-testid="progress-element"
    />,
  );
};

describe("GIVEN <Progress.Cicle />", () => {
  describe("WHEN rendered", () => {
    it("THEN should display the correct percentage", () => {
      makeSut({ percentage: 50 });
      expect(screen.getByText("50%")).toBeDefined();
    });

    it("THEN should display the corrected style when not complete", () => {
      makeSut({ percentage: 50 });
      expect(
        screen.getByTestId("progress-element-bar").getAttribute("class"),
      ).not.toContain("stroke-success");
    });

    it("THEN should display the corrected style when complete", () => {
      makeSut({ percentage: 100 });
      expect(
        screen.getByTestId("progress-element-bar").getAttribute("class"),
      ).toContain("stroke-success");
    });

    it("THEN should display the corrected style when brand", () => {
      makeSut({ percentage: 50, color: "$brand" });
      expect(
        screen.getByTestId("progress-element-bar").getAttribute("class"),
      ).toContain("stroke-brand");
    });
  });

  describe("THEN should correctly render the submitted size", () => {
    it("THEN should correctly render the default size large", () => {
      makeSut({ percentage: 50 });
      expect(
        screen.getByTestId("progress-element").getAttribute("class"),
      ).toContain("size_large");
    });

    it("THEN should correctly render the size small", () => {
      makeSut({ percentage: 50, size: "small" });
      expect(
        screen.getByTestId("progress-element").getAttribute("class"),
      ).toContain("size_small");
    });
  });
});
