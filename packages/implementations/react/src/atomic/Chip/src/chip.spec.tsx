import React from "react";
import { render, screen } from "@testing-library/react";

import { Chip } from "./Chip";
import { ChipProps } from "./chip.types";

const makeSut = (rest: ChipProps) => {
  render(<Chip {...rest} data-testid="chip-element" />);
};

describe("GIVEN <Chip />", () => {
  it("THEN it should correctly display the sent avatar", () => {
    makeSut({ children: "chip", avatar: "M" });
    expect(screen.getByText("M")).toBeDefined();
  });

  it("THEN it should correctly display the sent text", () => {
    makeSut({ children: "chip" });
    expect(screen.getByText("chip")).toBeDefined();
  });

  it("THEN it should correctly display the close icon", () => {
    makeSut({
      children: "text_chip",
      closeable: true,
    });
    expect(screen.getByText("x")).toBeDefined();
  });
});
