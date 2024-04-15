import React from "react";
import { render, screen } from "@testing-library/react";

import { Text } from ".";
import { TextProps } from "./text.types";

const content = "myText";

const makeSut = (rest?: Omit<TextProps, "children">, children = content) => {
  render(
    <Text {...rest} data-testid="text-element">
      {children}
    </Text>,
  );
};

describe("GIVEN <Text />", () => {
  describe("WHEN rendered", () => {
    it("THEN should default render element type", () => {
      makeSut();
      expect(screen.getByTestId("text-element").nodeName).toEqual("P");
    });

    it('THEN should render element type="span"', () => {
      makeSut({ as: "span" });
      expect(screen.getByTestId("text-element").nodeName).toEqual("SPAN");
    });
  });

  describe("THEN should correctly render the text", () => {
    it("THEN should correctly render the text on the left", () => {
      makeSut({ textAlign: "left" });
      expect(screen.getByTestId("text-element").getAttribute("style")).toMatch(
        /--textAlign-xs__\w{0,9}: left;/,
      );
    });

    it("THEN should correctly render the text on the center", () => {
      makeSut({ textAlign: "center" });
      expect(screen.getByTestId("text-element").getAttribute("style")).toMatch(
        /--textAlign-xs__\w{0,9}: center;/,
      );
    });

    it("THEN should correctly render the text on the right", () => {
      makeSut({ textAlign: "right" });
      expect(screen.getByTestId("text-element").getAttribute("style")).toMatch(
        /--textAlign-xs__\w{0,9}: right;/,
      );
    });

    it("THEN should correctly render the text on the justify", () => {
      makeSut({ textAlign: "justify" });
      expect(screen.getByTestId("text-element").getAttribute("style")).toMatch(
        /--textAlign-xs__\w{0,9}: justify;/,
      );
    });
  });

  describe("THEN should correctly render a fontWeight", () => {
    it("THEN should correctly render a bold", () => {
      makeSut({ fontWeight: "$bold" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("fontWeight-bold");
    });

    it("THEN should correctly render a semiBold", () => {
      makeSut({ fontWeight: "$semiBold" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("fontWeight-semiBold");
    });

    it("THEN should correctly render a medium", () => {
      makeSut({ fontWeight: "$medium" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("fontWeight-medium");
    });

    it("THEN should correctly render a regular", () => {
      makeSut({ fontWeight: "$regular" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("fontWeight-regular");
    });
  });

  // describe("THEN should correctly render the size", () => {
  //   it("THEN should correctly render the size caption", () => {
  //     makeSut({ fontSize: "caption" });
  //     expect(
  //       screen.getByTestId("text-element").getAttribute("class"),
  //     ).toContain("fontSize-caption");
  //   });

  //   it("THEN should correctly render the size base", () => {
  //     makeSut({ fontSize: "base" });
  //     expect(
  //       screen.getByTestId("text-element").getAttribute("class"),
  //     ).toContain("fontSize-base");
  //   });

  //   it("THEN should correctly render the size highlight", () => {
  //     makeSut({ fontSize: "highlight" });
  //     expect(
  //       screen.getByTestId("text-element").getAttribute("class"),
  //     ).toContain("fontSize-highlight");
  //   });
  // });

  describe("THEN should correctly render the submitted color", () => {
    it("THEN should correctly render the color primary", () => {
      makeSut({ color: "$primary" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("color-primary");
    });

    it("THEN should correctly render the color error", () => {
      makeSut({ color: "$error" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("color-error");
    });

    it("THEN should correctly render the color brand", () => {
      makeSut({ color: "$brand" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("color-brand");
    });

    it("THEN should correctly render the color success", () => {
      makeSut({ color: "$success" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("color-success");
    });

    it("THEN should correctly render the color warning", () => {
      makeSut({ color: "$warning" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("color-warning");
    });

    it("THEN should correctly render the color info", () => {
      makeSut({ color: "$info" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("color-info");
    });

    it("THEN should correctly render the color secondary", () => {
      makeSut({ color: "$secondary" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("color-secondary");
    });

    it("THEN should correctly render the color disabled", () => {
      makeSut({ color: "$disabled" });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("color-disabled");
    });
  });

  describe("THEN should correctly trim the text when using lineClamp", () => {
    it("THEN should correctly trim the text at one line", () => {
      makeSut({ lineClamp: 1 });
      expect(
        screen.getByTestId("text-element").getAttribute("class"),
      ).toContain("lineClamp");
    });
  });
});
