import React from "react";
import { render, screen } from "@testing-library/react";

import { Status } from "./Status";
import { StatusProps } from "./status.types";

const makeSut = (rest: StatusProps) => {
  render(<Status {...rest} data-testid="status-element" />);
};

describe("GIVEN <Status />", () => {
  describe("THEN should correctly render the submitted appearance", () => {
    it("THEN should correctly render the appearance default", () => {
      makeSut({ children: "label" });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("appearance_success");
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("size_normal");
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("variant_solid");
    });

    it("AND should correctly render the appearance success", () => {
      makeSut({ appearance: "success", children: "label" });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("appearance_success");
    });

    it("AND should correctly render the appearance warning", () => {
      makeSut({ appearance: "warning", children: "label" });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("appearance_warning");
    });

    it("AND should correctly render the appearance neutral", () => {
      makeSut({ appearance: "neutral", children: "label" });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("appearance_neutral");
    });

    it("AND should correctly render the appearance negative", () => {
      makeSut({ appearance: "negative", children: "label" });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("appearance_negative");
    });
  });

  describe("THEN should correctly render the submitted size", () => {
    it("THEN should correctly render the size default", () => {
      makeSut({ children: "label" });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("size_normal");
      expect(screen.getByTestId("status-dot").getAttribute("class")).toContain(
        "size_normal",
      );
    });

    it("AND should correctly render the size large", () => {
      makeSut({ children: "label", size: "small" });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("size_small");
      expect(screen.getByTestId("status-dot").getAttribute("class")).toContain(
        "size_small",
      );
    });
  });

  describe("THEN should correctly render the submitted variant", () => {
    it("THEN should correctly render the variant default", () => {
      makeSut({ children: "label" });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("variant_solid");
    });

    it("AND should correctly render the variant solid", () => {
      makeSut({ children: "label", variant: "solid" });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("variant_solid");
    });

    it("AND should correctly render the variant text", () => {
      makeSut({ children: "label", variant: "text" });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("variant_text");
    });
  });

  describe("THEN should correctly render the submitted subdued", () => {
    it("THEN should correctly render the subdued default", () => {
      makeSut({ children: "label" });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).not.toContain("subdued_true");
    });
    it("AND should correctly render the subdued default", () => {
      makeSut({ children: "label", subdued: true });
      expect(
        screen.getByTestId("status-element").getAttribute("class"),
      ).toContain("subdued_true");
    });
  });
});
