import React from "react";
import { render, screen } from "@testing-library/react";

import { Badge, BadgeProps } from ".";

const makeSut = (rest: BadgeProps) => {
  render(<Badge {...rest} data-testid="badge-element" />);
};

describe("GIVEN <Badge />", () => {
  describe("THEN should correctly render the submitted appearance", () => {
    it("THEN should correctly render the appearance default", () => {
      makeSut({ children: "badge" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("appearance_brand");
    });

    it("THEN should correctly render the appearance brand", () => {
      makeSut({ children: "badge", appearance: "brand" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("appearance_brand");
    });

    it("THEN should correctly render the appearance success", () => {
      makeSut({ children: "badge", appearance: "success" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("appearance_success");
    });

    it("THEN should correctly render the appearance warning", () => {
      makeSut({ children: "badge", appearance: "warning" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("appearance_warning");
    });

    it("THEN should correctly render the appearance danger", () => {
      makeSut({ children: "badge", appearance: "danger" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("appearance_danger");
    });

    it("THEN should correctly render the appearance neutral", () => {
      makeSut({ children: "badge", appearance: "neutral" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("appearance_neutral");
    });

    it("THEN should correctly render the appearance inverted", () => {
      makeSut({ children: "badge", appearance: "inverted" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("appearance_inverted");
    });
  });

  describe("THEN should correctly render the submitted size", () => {
    it("THEN should correctly render the size default", () => {
      makeSut({ children: "badge" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("size_medium");
    });

    it("THEN should correctly render the size large", () => {
      makeSut({ children: "badge", size: "large" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("size_large");
    });

    it("THEN should correctly render the size medium", () => {
      makeSut({ children: "badge", size: "medium" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("size_medium");
    });

    it("THEN should correctly render the size small", () => {
      makeSut({ children: "badge", size: "small" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("size_small");
    });

    it("THEN should correctly render the size dot", () => {
      makeSut({ children: "badge", size: "dot" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("size_dot");
    });
  });

  describe("THEN should correctly render the submitted variant", () => {
    it("THEN should correctly render the size default", () => {
      makeSut({ children: "button" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("variant_solid");
    });

    it("THEN should correctly render the variant solid", () => {
      makeSut({ children: "button", variant: "solid" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("variant_solid");
    });

    it("THEN should correctly render the variant outlined", () => {
      makeSut({ children: "button", variant: "outlined" });
      expect(
        screen.getByTestId("badge-element").getAttribute("class"),
      ).toContain("variant_outlined");
    });
  });
});
