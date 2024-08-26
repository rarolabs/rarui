import React from "react";
import { render, screen } from "@testing-library/react";

import { Label } from "./Label";
import { LabelProps } from "./label.types";

const makeSut = (rest: LabelProps) => {
  render(<Label {...rest} data-testid="label-element" />);
};

describe("GIVEN <Label />", () => {
  it("THEN it should correctly remain visually hidden", () => {
    makeSut({ children: "Label", hidden: true });
    expect(screen.getByTestId("label-element").getAttribute("class")).toContain(
      "hidden",
    );
  });

  it("THEN it should correctly remain visually default", () => {
    makeSut({ children: "Label" });
    expect(
      screen.getByTestId("label-element").getAttribute("class"),
    ).not.toContain("hidden");
  });
});
