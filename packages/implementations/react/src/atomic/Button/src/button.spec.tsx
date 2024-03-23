import React from "react";
import { render, screen } from "@testing-library/react";

import { Button, ButtonProps } from "./Button";

const makeSut = (
  rest: ButtonProps & { as?: "button" | "a"; href?: string },
) => {
  render(<Button {...rest} data-testid="button-element" />);
};

const mockedConsoleLog = jest.fn();

describe("GIVEN <Button />", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(mockedConsoleLog);
  });

  describe("WHEN rendered", () => {
    it("THEN should disable the button", () => {
      makeSut({ disabled: true, children: "button" });
      expect(
        screen.getByRole<HTMLButtonElement>("button").disabled,
      ).toBeTruthy();
    });

    it("THEN should correctly render the button element", () => {
      makeSut({ children: "Link", as: "a", href: "/" });
      expect(screen.getByRole("link")).toBeDefined();
    });
  });

  describe("THEN should correctly render the submitted appearance", () => {
    it("THEN should correctly render the appearance default", () => {
      makeSut({ children: "button" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "appearance_brand",
      );
    });

    it("AND should correctly render the appearance brand", () => {
      makeSut({ appearance: "brand", children: "button" });
      expect(
        screen.getByRole("button", { name: "button" }).getAttribute("class"),
      ).toContain("appearance_brand");
    });

    it("AND should correctly render the appearance brand", () => {
      makeSut({ appearance: "brand-secondary", children: "button" });
      expect(
        screen.getByRole("button", { name: "button" }).getAttribute("class"),
      ).toContain("appearance_brand-secondary");
    });

    it("AND should correctly render the appearance danger", () => {
      makeSut({ appearance: "danger", children: "button" });
      expect(
        screen.getByRole("button", { name: "button" }).getAttribute("class"),
      ).toContain("appearance_danger");
    });

    it("AND should correctly render the appearance neutral", () => {
      makeSut({ appearance: "neutral", children: "button" });
      expect(
        screen.getByRole("button", { name: "button" }).getAttribute("class"),
      ).toContain("appearance_neutral");
    });

    it("AND should correctly render the appearance warning", () => {
      makeSut({ appearance: "warning", children: "button" });
      expect(
        screen.getByRole("button", { name: "button" }).getAttribute("class"),
      ).toContain("appearance_warning");
    });

    it("AND should correctly render the appearance success", () => {
      makeSut({ appearance: "success", children: "button" });
      expect(
        screen.getByRole("button", { name: "button" }).getAttribute("class"),
      ).toContain("appearance_success");
    });

    it("AND should correctly render the appearance inverted", () => {
      makeSut({ appearance: "inverted", children: "button" });
      expect(
        screen.getByRole("button", { name: "button" }).getAttribute("class"),
      ).toContain("appearance_inverted");
    });
  });

  describe("THEN should correctly render the submitted size", () => {
    it("THEN should correctly render the size default", () => {
      makeSut({ children: "button" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "size_large",
      );
    });

    it("THEN should correctly render the size large", () => {
      makeSut({ children: "button", size: "large" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "size_large",
      );
    });

    it("THEN should correctly render the size medium", () => {
      makeSut({ children: "button", size: "medium" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "size_medium",
      );
    });

    it("THEN should correctly render the size small", () => {
      makeSut({ children: "button", size: "small" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "size_small",
      );
    });
  });

  describe("THEN should correctly render the submitted variant", () => {
    it("THEN should correctly render the size default", () => {
      makeSut({ children: "button" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "variant_solid",
      );
    });

    it("THEN should correctly render the variant solid", () => {
      makeSut({ children: "button", variant: "solid" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "variant_solid",
      );
    });

    it("THEN should correctly render the variant outlined", () => {
      makeSut({ children: "button", variant: "outlined" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "variant_outlined",
      );
    });

    it("THEN should correctly render the variant text", () => {
      makeSut({ children: "button", variant: "text" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "variant_text",
      );
    });

    it("THEN should correctly render the variant tonal", () => {
      makeSut({ children: "button", variant: "tonal" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "variant_tonal",
      );
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
