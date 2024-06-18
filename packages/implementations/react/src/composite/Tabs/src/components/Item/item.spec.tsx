import React from "react";
import { render, screen } from "@testing-library/react";

import { TabsItem } from "./Item";
import { TabsItemProps } from "./item.types";

const makeSut = (props: TabsItemProps) => {
  render(<TabsItem {...props} data-testid="tabs-item-element" />);
};

describe("GIVEN <Tabs.item />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut({ label: "My label", children: "My content" });
      expect(screen.getByText("My content")).toBeDefined();
    });
  });
});
