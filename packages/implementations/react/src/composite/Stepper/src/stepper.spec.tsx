import React from "react";
import { render, screen } from "@testing-library/react";

import { StepperProps } from "./stepper.types";
import { Stepper } from "./Stepper";

const makeSut = (rest?: Omit<StepperProps, "children">) => {
  render(
    <Stepper {...rest} data-testid="stepper-element">
      <Stepper.Step>1</Stepper.Step>
      <Stepper.Step>2</Stepper.Step>
      <Stepper.Step>3</Stepper.Step>
    </Stepper>,
  );
};
describe("GIVEN <Stepper />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the default direction horizontal", () => {
      makeSut();
      expect(
        screen.getByTestId("stepper-element").getAttribute("class"),
      ).toContain("direction_horizontal");
    });

    it("AND should correctly render the direction vertical", () => {
      makeSut({ direction: "vertical" });
      expect(
        screen.getByTestId("stepper-element").getAttribute("class"),
      ).toContain("direction_vertical");
    });
  });
});
