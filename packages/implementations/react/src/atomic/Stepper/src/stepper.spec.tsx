import { render, screen } from "@testing-library/react";
import React from "react";
import { StepperProps } from "./stepper.types";
import { Stepper } from "./Stepper";
import Step from "./components/Step";

const makeSut = (rest: Omit<StepperProps, "children">) => {
  render(
    <Stepper {...rest} data-testid="stepper-element">
      <Step>1</Step>
      <Step>2</Step>
      <Step>3</Step>
    </Stepper>
  );
};
describe("GIVEN <Step />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the default direction horizontal", () => {
      makeSut({});
      expect(
        screen.getByTestId("stepper-element").getAttribute("class")
      ).toContain("direction_horizontal");
    });
    it("AND should correctly render the direction vertical", () => {
      makeSut({ direction: "vertical" });
      expect(
        screen.getByTestId("stepper-element").getAttribute("class")
      ).toContain("direction_vertical");
    });
  });
});
