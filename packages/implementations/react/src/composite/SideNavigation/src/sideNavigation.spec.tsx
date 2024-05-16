import React from "react";
import { render, screen } from "@testing-library/react";

import { SideNavigation, SideNavigationProps } from "./SideNavigation";

const makeSut = (rest: SideNavigationProps) => {
  render(<SideNavigation {...rest} data-testid="sidebar-element" />);
};

describe.skip("GIVEN <SideNavigation />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the submitted content", () => {
      makeSut({ children: <div>My content</div>, name: "name" });
      expect(screen.getByText("My content")).toBeDefined();
    });
  });

  describe("THEN should correctly render or not based on the open property", () => {
    it("THEN should correctly render if open is true", () => {
      makeSut({ children: <div>My content</div>, name: "name" });
      expect(screen.getByTestId("overlay-sidebar-button")).toBeTruthy();
      expect(
        screen.getByTestId("sidebar-element").getAttribute("class"),
      ).toContain("isVisible");
    });

    it("THEN should not render if open is false", () => {
      makeSut({ children: <div>My content</div>, name: "name" });
      expect(screen.queryByTestId("overlay-sidebar-button")).toBeNull();
    });
  });
});
