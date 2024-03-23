import React from "react";
import { render, screen } from "@testing-library/react";

import { Link, LinkProps } from "./Link";

const makeSut = (rest: LinkProps & { as?: "a" | "button"; href?: string }) => {
  render(<Link as={rest.as || "a"} {...rest} data-testid="link-element" />);
};

const mockedConsoleLog = jest.fn();

describe("GIVEN <Link />", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(mockedConsoleLog);
  });

  describe("WHEN rendered", () => {
    it("THEN should correctly render the button element", () => {
      makeSut({ children: "button", as: "button" });
      expect(screen.getByRole("button")).toBeDefined();
    });

    it("AND should correctly render the appearance default", () => {
      makeSut({ href: "#", children: "link" });
      expect(screen.getByRole("link").getAttribute("class")).toContain(
        "appearance_default",
      );
    });

    it("AND should correctly render the appearance default", () => {
      makeSut({ appearance: "default", href: "#", children: "link" });
      expect(
        screen.getByRole("link", { name: "link" }).getAttribute("class"),
      ).toContain("appearance_default");
    });

    it("AND should correctly render the appearance neutral", () => {
      makeSut({ appearance: "neutral", href: "#", children: "link" });
      expect(
        screen.getByRole("link", { name: "link" }).getAttribute("class"),
      ).toContain("appearance_neutral");
    });

    it("AND should correctly render the appearance inverted", () => {
      makeSut({
        appearance: "inverted",
        href: "#",
        children: "link",
      });
      expect(
        screen.getByRole("link", { name: "link" }).getAttribute("class"),
      ).toContain("appearance_inverted");
    });

    it("AND should correctly render with fontSize large", () => {
      makeSut({ size: "large", href: "#", children: "link" });
      expect(
        screen.getByRole("link", { name: "link" }).getAttribute("class"),
      ).toContain("size_large");
    });

    it("AND should correctly render with fontSize medium", () => {
      makeSut({ size: "medium", href: "#", children: "link" });
      expect(
        screen.getByRole("link", { name: "link" }).getAttribute("class"),
      ).toContain("size_medium");
    });

    it("AND should correctly render with fontSize small", () => {
      makeSut({ size: "small", href: "#", children: "link" });
      expect(
        screen.getByRole("link", { name: "link" }).getAttribute("class"),
      ).toContain("size_small");
    });
  });

  describe("THEN should correctly render the submitted variant", () => {
    it("THEN should correctly render the variant tonal", () => {
      makeSut({
        children: "button",
        // @ts-ignore
        as: "p",
      });
      expect(mockedConsoleLog).toHaveBeenCalled();
    });
  });
});
