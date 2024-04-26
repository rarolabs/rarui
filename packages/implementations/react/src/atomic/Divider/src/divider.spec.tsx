import React from "react";
import { render, screen } from "@testing-library/react";

import { Divider } from "./Divider";
import { DividerProps } from "./divider.types";

const makeSut = (props: DividerProps) => {
  render(<Divider {...props} data-testid="divider-element" />);
};

describe("GIVEN <Divider />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render given direction style", () => {
      screen.logTestingPlaygroundURL();

      makeSut({ direction: "vertical" });
      expect(
        screen.getByTestId("divider-element").getAttribute("class"),
      ).toContain("direction_vertical");
    });

    it("THEN should render given width style", () => {
      screen.logTestingPlaygroundURL();

      makeSut({ width: "medium" });
      expect(
        screen.getByTestId("divider-element").getAttribute("class"),
      ).toContain("width_medium");
    });

    it("THEN should render given divider style", () => {
      screen.logTestingPlaygroundURL();

      makeSut({ style: "dashed" });
      expect(
        screen.getByTestId("divider-element").getAttribute("class"),
      ).toContain("style_dashed");
    });
  });
});
