import React from "react";
import { render, screen } from "@testing-library/react";

import { Divider } from "./Divider";
import { DividerProps } from "./divider.types";

const makeSut = (props: DividerProps) => {
  render(<Divider {...props} data-testid="divider-element" />);
};

describe("GIVEN <Divider />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render given direction vertical", () => {
      makeSut({ direction: "vertical", size: "200px" });
      const divider = screen.getByTestId("divider-element");
      expect(divider.getAttribute("style")).toMatch(/--width-xs__\w{0,9}: 0;/);
      expect(divider.getAttribute("style")).toMatch(
        /--height-xs__\w{0,9}: 200px;/,
      );
    });

    it("AND should render given direction horizontal", () => {
      makeSut({ direction: "horizontal", size: "200px" });
      const divider = screen.getByTestId("divider-element");
      expect(divider.getAttribute("style")).toMatch(
        /--width-xs__\w{0,9}: 200px;/,
      );
      expect(divider.getAttribute("style")).toMatch(/--height-xs__\w{0,9}: 0;/);
    });

    it("AND should render given divider type $solid", () => {
      makeSut({ type: "$solid" });
      expect(
        screen.getByTestId("divider-element").getAttribute("class"),
      ).toContain("borderStyle-solid");
    });

    it("AND should render given divider type $dashed", () => {
      makeSut({ type: "$dashed" });
      expect(
        screen.getByTestId("divider-element").getAttribute("class"),
      ).toContain("borderStyle-dashed");
    });

    it("AND should render given divider thickness $1", () => {
      makeSut({ thickness: "$1" });
      expect(
        screen.getByTestId("divider-element").getAttribute("class"),
      ).toContain("borderTopWidth-1");
    });

    it("AND should render given divider thickness $2", () => {
      makeSut({ thickness: "$2" });
      expect(
        screen.getByTestId("divider-element").getAttribute("class"),
      ).toContain("borderTopWidth-2");
    });
  });
});
