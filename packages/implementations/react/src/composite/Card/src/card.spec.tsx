import React from "react";
import { render, screen } from "@testing-library/react";

import { Card } from "./Card";
import { CardProps } from "./card.types";

const makeSut = (rest?: CardProps) => {
  render(<Card {...rest} data-testid="card-element" />);
};

describe("GIVEN <Card />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the submitted content", () => {
      makeSut({ children: <div>My content</div> });
      expect(screen.getByText("My content")).toBeDefined();
    });
  });

  describe("THEN should correctly render the submitted padding", () => {
    it("THEN should correctly render the padding default", () => {
      makeSut({ children: "My content" });
      expect(
        screen.getByTestId("card-element").getAttribute("class"),
      ).toContain("padding_base");
    });

    it("AND should correctly render the padding none", () => {
      makeSut({ padding: "none", children: "My content" });
      expect(
        screen.getByTestId("card-element").getAttribute("class"),
      ).toContain("padding_none");
    });

    it("AND should correctly render the padding base", () => {
      makeSut({ padding: "base", children: "My content" });
      expect(
        screen.getByTestId("card-element").getAttribute("class"),
      ).toContain("padding_base");
    });
  });

  describe("THEN should correctly render the submitted backgroundColor", () => {
    it("THEN should correctly render the backgroundColor default", () => {
      makeSut({ children: "My content" });
      expect(
        screen.getByTestId("card-element").getAttribute("class"),
      ).toContain("backgroundColor-primary");
    });

    it("AND should correctly render the backgroundColor $primary", () => {
      makeSut({ children: "My content", backgroundColor: "$primary" });
      expect(
        screen.getByTestId("card-element").getAttribute("class"),
      ).toContain("backgroundColor-primary");
    });

    it("AND should correctly render the backgroundColor $background", () => {
      makeSut({
        children: "My content",
        backgroundColor: "$background",
      });
      expect(
        screen.getByTestId("card-element").getAttribute("class"),
      ).toContain("backgroundColor-background");
    });

    it("AND should correctly render the backgroundColor $secondary", () => {
      makeSut({ children: "My content", backgroundColor: "$secondary" });
      expect(
        screen.getByTestId("card-element").getAttribute("class"),
      ).toContain("backgroundColor-secondary");
    });

    it("AND should correctly render the backgroundColor $transparent", () => {
      makeSut({
        children: "My content",
        backgroundColor: "$transparent",
      });
      expect(
        screen.getByTestId("card-element").getAttribute("class"),
      ).toContain("backgroundColor-transparent");
    });
  });
});
