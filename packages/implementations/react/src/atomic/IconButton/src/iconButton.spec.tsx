import React from "react";
import { render, screen } from "@testing-library/react";

import { IconButton } from "./IconButton";
import { IconButtonProps } from "./iconButton.types";

const makeSut = (rest: Omit<IconButtonProps, "source">) => {
  render(
    <IconButton
      {...rest}
      source={<svg data-testid="icon" />}
      data-testid="button-element"
    />,
  );
};

const mockedConsoleLog = jest.fn();

describe("GIVEN <IconButton />", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(mockedConsoleLog);
  });

  describe("WHEN rendered", () => {
    it("THEN should disable the button", () => {
      makeSut({ disabled: true });
      expect(
        screen.getByRole<HTMLButtonElement>("button").disabled,
      ).toBeTruthy();
    });
  });

  describe("THEN should correctly render the submitted appearance", () => {
    it("THEN should correctly render the appearance default", () => {
      makeSut({});
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "appearance_brand",
      );
    });

    it("AND should correctly render the appearance brand", () => {
      makeSut({ appearance: "brand" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "appearance_brand",
      );
    });

    it("AND should correctly render the appearance danger", () => {
      makeSut({ appearance: "danger" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "appearance_danger",
      );
    });

    it("AND should correctly render the appearance neutral", () => {
      makeSut({ appearance: "neutral" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "appearance_neutral",
      );
    });

    it("AND should correctly render the appearance warning", () => {
      makeSut({ appearance: "warning" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "appearance_warning",
      );
    });

    it("AND should correctly render the appearance success", () => {
      makeSut({ appearance: "success" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "appearance_success",
      );
    });

    it("AND should correctly render the appearance inverted", () => {
      makeSut({ appearance: "inverted" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "appearance_inverted",
      );
    });
  });

  describe("THEN should correctly render the submitted rounded", () => {
    it("THEN should correctly render the rounded default", () => {
      makeSut({});
      expect(screen.getByRole("button").getAttribute("class")).not.toContain(
        "rounded_true",
      );
    });

    it("AND should correctly render the rounded true", () => {
      makeSut({ rounded: true });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "rounded_true",
      );
    });

    it("AND should correctly render the rounded false", () => {
      makeSut({ rounded: false });
      expect(screen.getByRole("button").getAttribute("class")).not.toContain(
        "rounded_true",
      );
    });
  });

  describe("THEN should correctly render the submitted variant", () => {
    it("THEN should correctly render the size default", () => {
      makeSut({});
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "variant_solid",
      );
    });

    it("AND should correctly render the variant solid", () => {
      makeSut({ variant: "solid" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "variant_solid",
      );
    });

    it("AND should correctly render the variant outlined", () => {
      makeSut({ variant: "outlined" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "variant_outlined",
      );
    });

    it("AND should correctly render the variant ghost", () => {
      makeSut({ variant: "ghost" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "variant_ghost",
      );
    });

    it("AND should correctly render the variant tonal", () => {
      makeSut({ variant: "tonal" });
      expect(screen.getByRole("button").getAttribute("class")).toContain(
        "variant_tonal",
      );
    });
  });
});
