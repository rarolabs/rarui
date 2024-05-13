import React from "react";
import { render, screen } from "@testing-library/react";

import { Progress } from "./Progress";
import { ProgressProps } from "./progress.types";

const makeSut = ({ percentage }: ProgressProps) => {
  render(<Progress percentage={percentage} data-testid="progress-element" />);
};

describe("GIVEN <Progress />", () => {
  describe("WHEN rendered", () => {
    it("THEN should display the correct percentage", () => {
      makeSut({ percentage: 50 });
      expect(
        screen.getByTestId("progress-element-bar").getAttribute("style")
      ).toContain("50%");
    });

    it("THEN should display the correct style when not complete", () => {
      makeSut({ percentage: 50 });
      expect(
        screen.getByTestId("progress-element-bar").getAttribute("class")
      ).not.toContain("progress_backgroundColor-success");
    });
    it("THEN should display the correct style when complete", () => {
      makeSut({ percentage: 100 });
      expect(
        screen.getByTestId("progress-element-bar").getAttribute("class")
      ).toContain("progress_backgroundColor-success");
    });
  });
});
