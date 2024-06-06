import React from "react";
import { render, screen } from "@testing-library/react";

import { AccordionItem } from "./Item";
import { AccordionItemProps } from "./item.types";

const makeSut = (props: AccordionItemProps) => {
  render(<AccordionItem {...props} data-testid="footer-element" />);
};

describe("GIVEN <Accordion.item />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut({ children: "My content", index: "0" });
      expect(screen.getByText("My content")).toBeDefined();
    });
  });
});
