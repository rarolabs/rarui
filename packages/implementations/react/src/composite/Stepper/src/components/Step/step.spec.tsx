import { render, screen } from "@testing-library/react";
import React from "react";

import { Stepper } from "../../Stepper";
import { Step } from "./Step";
import { StepProps } from "./step.types";

const makeSut = (rest: StepProps, direction?: "vertical" | "horizontal") => {
  render(
    <Stepper direction={direction ?? "vertical"}>
      <Step {...rest} data-testid="step-element" />
    </Stepper>,
  );
};

describe("GIVEN <Step />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the submitted content", () => {
      makeSut({ children: <div>1</div> });
      expect(screen.getByText("1")).toBeDefined();
    });

    it("AND should correctly render the appearance active", () => {
      makeSut({ children: 1, active: true });
      expect(screen.getByTestId("step-circle").getAttribute("class")).toContain(
        "active_true",
      );
    });

    it("AND should correctly render the appearance done", () => {
      makeSut({ children: 1, done: true });
      expect(screen.getByTestId("step-circle").getAttribute("class")).toContain(
        "done_true",
      );
    });

    it("AND should correctly render the direction horizontal", () => {
      makeSut({ children: 1 }, "horizontal");
      expect(
        screen.getByTestId("step-element").getAttribute("class"),
      ).toContain("direction_horizontal");
    });

    it("AND should correctly render the direction vertical", () => {
      makeSut({ children: 1 }, "vertical");
      expect(
        screen.getByTestId("step-element").getAttribute("class"),
      ).toContain("direction_vertical");
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
