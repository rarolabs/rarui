import React from "react";
import { render, screen } from "@testing-library/react";

import { Avatar, AvatarProps } from ".";

const makeSut = (rest: AvatarProps) => {
  render(<Avatar {...rest} data-testid="avatar-element" />);
};

describe("GIVEN <Avatar />", () => {
  describe("THEN should correctly render the submitted size", () => {
    it("THEN should correctly render the size default", () => {
      makeSut({ children: "RU" });
      expect(
        screen.getByTestId("avatar-element").getAttribute("class"),
      ).toContain("size_medium");
    });

    it("THEN should correctly render the size large", () => {
      makeSut({ children: "RU", size: "large" });
      expect(
        screen.getByTestId("avatar-element").getAttribute("class"),
      ).toContain("size_large");
    });

    it("THEN should correctly render the size small", () => {
      makeSut({ children: "RU", size: "small" });
      expect(
        screen.getByTestId("avatar-element").getAttribute("class"),
      ).toContain("size_small");
    });

    it("THEN should correctly render the size xLarge", () => {
      makeSut({ children: "RU", size: "xLarge" });
      expect(
        screen.getByTestId("avatar-element").getAttribute("class"),
      ).toContain("size_xLarge");
    });
  });

  describe("THEN should correctly render the submitted badge", () => {
    it("THEN should correctly render the size small for a large avatar", () => {
      makeSut({
        children: "RU",
        size: "large",
        badge: {
          children: "1",
        },
      });
      expect(
        screen.getByTestId("avatar-badge").getAttribute("class"),
      ).toContain("size_small");
    });
    it("THEN should correctly render the size small for a xLarge avatar", () => {
      makeSut({
        children: "RU",
        size: "xLarge",
        badge: {
          children: "1",
        },
      });
      expect(
        screen.getByTestId("avatar-badge").getAttribute("class"),
      ).toContain("size_small");
    });
    it("THEN should correctly render the size dot for a small avatar", () => {
      makeSut({
        children: "RU",
        size: "small",
        badge: {
          children: "1",
        },
      });
      expect(
        screen.getByTestId("avatar-badge").getAttribute("class"),
      ).toContain("size_dot");
    });
    it("THEN should correctly render the size dot for a medium avatar", () => {
      makeSut({
        children: "RU",
        size: "medium",
        badge: {
          children: "1",
        },
      });
      expect(
        screen.getByTestId("avatar-badge").getAttribute("class"),
      ).toContain("size_dot");
    });
  });
});
