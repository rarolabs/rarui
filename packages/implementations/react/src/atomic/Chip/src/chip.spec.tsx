import React from "react";
import { render, screen } from "@testing-library/react";

import { Chip } from "./Chip";
import { ChipProps } from "./chip.types";

const makeSut = (rest: ChipProps) => {
  render(<Chip {...rest} data-testid="chip-element" />);
};

describe("GIVEN <Chip />", () => {
  it("THEN it should correctly display the sent text", () => {
    makeSut({ children: "chip" });
    expect(screen.getByText("chip")).toBeDefined();
  });

  it("AND it should correctly display the close icon", () => {
    makeSut({
      children: "text_chip",
      closeable: true,
    });
    expect(screen.getByLabelText("close")).toBeDefined();
  });

  it("AND it should correctly render the size medium", () => {
    makeSut({
      children: "text_chip",
      closeable: true,
    });
    expect(screen.getByTestId("chip-element").getAttribute("class")).toContain(
      "size_medium",
    );
  });

  it("AND it should correctly render the size small", () => {
    makeSut({
      children: "text_chip",
      size: "small",
    });
    expect(screen.getByTestId("chip-element").getAttribute("class")).toContain(
      "size_small",
    );
  });

  it("AND it should correctly render the padding $small", () => {
    makeSut({
      children: "text_chip",
      padding: "$small",
    });
    expect(screen.getByTestId("chip-element").getAttribute("class")).toContain(
      "padding-small",
    );
  });

  it("AND it should correctly render the padding $medium", () => {
    makeSut({
      children: "text_chip",
      padding: "$medium",
    });
    expect(screen.getByTestId("chip-element").getAttribute("class")).toContain(
      "padding-medium",
    );
  });

  it("AND it should correctly render the appearance pill", () => {
    makeSut({
      children: "text_chip",
      pill: true,
    });
    expect(screen.getByTestId("chip-element").getAttribute("class")).toContain(
      "pill",
    );
  });
});
