import React from "react";
import { render, screen } from "@testing-library/react";

import { SideNavigation, SideNavigationProps } from "./SideNavigation";

const mockedConsoleLog = jest.fn();

const makeSut = (rest: SideNavigationProps) => {
  render(
    <SideNavigation {...rest} data-testid="sidenavigation-item-element" />,
  );
};

describe("GIVEN <SideNavigation />", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(mockedConsoleLog);
  });

  describe("WHEN rendered", () => {
    it("THEN should correctly render the submitted content", () => {
      makeSut({ children: <div>My content</div>, name: "title" });
      expect(screen.getByText("My content")).toBeDefined();
    });
  });

  describe("THEN should correctly render or not based on the active property", () => {
    it("THEN should correctly render if active is true", () => {
      makeSut({ children: <div>My content</div>, name: "title", active: true });
      expect(
        screen.getByTestId("sidenavigation-item-element").getAttribute("class"),
      ).toContain("active_true");
    });

    it("THEN should not render if open is false", () => {
      makeSut({
        children: <div>My content</div>,
        name: "title",
        active: false,
      });
      expect(
        screen.getByTestId("sidenavigation-item-element").getAttribute("class"),
      ).not.toContain("active_true");
    });
  });

  describe("THEN should validate that the item works", () => {
    it("THEN should display a console log if the element sent in the as property is not a button or link", () => {
      makeSut({
        children: <div>My content</div>,
        // eslint-disable-next-line
        // @ts-ignore
        as: "p",
      });
      expect(mockedConsoleLog).toHaveBeenCalled();
    });
  });
});
