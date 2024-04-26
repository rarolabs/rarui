import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Banner, BannerProps } from ".";

const mockedClose = jest.fn();

const makeSut = (rest: BannerProps) => {
  render(<Banner {...rest} data-testid="banner-element" />);
};

describe("GIVEN <Banner />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("THEN should correctly render the submitted appearance", () => {
    it("THEN should correctly render the appearance brand", () => {
      makeSut({ children: " Banner", appearance: "brand" });
      expect(
        screen.getByTestId("banner-element").getAttribute("class"),
      ).toContain("appearance_brand");
    });

    it("THEN should correctly render the appearance info", () => {
      makeSut({ children: " Banner", appearance: "info" });
      expect(
        screen.getByTestId("banner-element").getAttribute("class"),
      ).toContain("appearance_info");
    });

    it("THEN should correctly render the appearance neutral", () => {
      makeSut({ children: " Banner", appearance: "neutral" });
      expect(
        screen.getByTestId("banner-element").getAttribute("class"),
      ).toContain("appearance_neutral");
    });

    it("THEN should correctly render the appearance inverted", () => {
      makeSut({ children: " Banner", appearance: "inverted" });
      expect(
        screen.getByTestId("banner-element").getAttribute("class"),
      ).toContain("appearance_inverted");
    });

    it("THEN should correctly render the appearance warning", () => {
      makeSut({ children: " Banner", appearance: "warning" });
      expect(
        screen.getByTestId("banner-element").getAttribute("class"),
      ).toContain("appearance_warning");
    });

    it("THEN should correctly render the appearance error", () => {
      makeSut({ children: " Banner", appearance: "error" });
      expect(
        screen.getByTestId("banner-element").getAttribute("class"),
      ).toContain("appearance_error");
    });
  });

  describe("THEN should correctly render the floating property", () => {
    it("THEN should correctly render floating true", () => {
      makeSut({ children: " Banner", floating: true });
      expect(
        screen.getByTestId("banner-element").getAttribute("class"),
      ).toContain("floating_true");
    });
  });

  describe("THEN should correctly render the close button", () => {
    it("THEN should correctly render the close button", () => {
      makeSut({ children: " Banner", onClose: mockedClose });
      expect(screen.getByTestId("close-button")).toBeDefined();
    });
  });

  describe("THEN should ensure the correct functioning of the banner", () => {
    it("THEN should call the banner removal function", () => {
      makeSut({ children: " Banner", onClose: mockedClose });

      const closeButton = screen.getByTestId("close-button");
      fireEvent.click(closeButton);
      expect(mockedClose).toHaveBeenCalledTimes(1);
    });
  });
});
