import { render, screen } from "@testing-library/react";
import React from "react";
import { Step } from "./Step";
import { StepProps } from "./step.types";

const makeSut = (rest: StepProps) => {
  render(<Step {...rest} data-testid="step-element" />);
};

describe("GIVEN <Step />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the appearance disabled", () => {
      makeSut({ children: 1 });
      expect(
        screen.getByTestId("step-element-circle").getAttribute("class")
      ).toContain("appearance_disabled");
    });
    it("AND should correctly render the appearance active", () => {
      makeSut({ children: 1, active: true });
      expect(
        screen.getByTestId("step-element-circle").getAttribute("class")
      ).toContain("appearance_active");
    });
    it("AND should correctly render the appearance done", () => {
      makeSut({ children: 1, done: true });
      expect(
        screen.getByTestId("step-element-circle").getAttribute("class")
      ).toContain("appearance_done");
    });
    it("AND should correctly render the given title", () => {
      makeSut({ children: 1, title: "Step title" });
      expect(screen.getByText("Step title")).toBeDefined();
    });
    it("AND should correctly render the given description", () => {
      makeSut({ children: 1, description: "Step description" });
      expect(screen.getByText("Step description")).toBeDefined();
    });
  });
});
