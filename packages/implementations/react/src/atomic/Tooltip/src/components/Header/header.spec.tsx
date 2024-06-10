import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { TooltipHeader } from "./Header";
import { TooltipHeaderProps } from "./header.types";

const makeSut = (props: TooltipHeaderProps) => {
  render(<TooltipHeader {...props} data-testid="header-element" />);
};

describe("GIVEN <Tooltip.Header />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut({ children: "My content" });
      expect(screen.getByText("My content")).toBeDefined();
    });

    it("AND should correctly render the title sent", () => {
      makeSut({ children: "My content", title: "My title" });
      expect(screen.getByText("My title")).toBeDefined();
    });

    it("AND should correctly render the subtitle sent", () => {
      makeSut({ children: "My content", subtitle: "My subtitle" });
      expect(screen.getByText("My subtitle")).toBeDefined();
    });

    it("AND should correctly call the onclosis function sent", () => {
      const mockedOnClose = jest.fn();
      makeSut({
        children: "My content",
        onClose: mockedOnClose,
        closeable: true,
      });
      fireEvent.click(screen.getByTestId("close-button"));
      expect(mockedOnClose).toHaveBeenCalled();
    });
  });

  describe("THEN should correctly render the submitted padding", () => {
    it("THEN should correctly render the padding default", () => {
      makeSut({ children: "My content" });
      expect(
        screen.getByTestId("header-element").getAttribute("class"),
      ).toContain("padding_none");
    });

    it("AND should correctly render the padding none", () => {
      makeSut({ padding: "none", children: "My content" });
      expect(
        screen.getByTestId("header-element").getAttribute("class"),
      ).toContain("padding_none");
    });

    it("AND should correctly render the padding base", () => {
      makeSut({ padding: "base", children: "My content" });
      expect(
        screen.getByTestId("header-element").getAttribute("class"),
      ).toContain("padding_base");
    });
  });
});
