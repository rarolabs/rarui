import React from "react";
import { render, screen } from "@testing-library/react";

import { TabsButton } from "./Button";
import { TabsButtonProps } from "./button.types";

const makeSut = (props: TabsButtonProps) => {
  render(<TabsButton {...props} data-testid="tabs-button-element" />);
};

describe("GIVEN <Tabs.Button />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut({ children: "My content" });
      expect(screen.getByText("My content")).toBeDefined();
    });
  });
});
