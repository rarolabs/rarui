import React from "react";
import { render, screen } from "@testing-library/react";

import { Accordion } from "../../Accordion";
import { AccordionBody } from "./Body";
import { AccordionBodyProps } from "./body.types";

const makeSut = (props: AccordionBodyProps, selectedDefault = "0") => {
  render(
    <Accordion selectedDefault={selectedDefault}>
      <Accordion.Item index="0">
        <AccordionBody {...props} data-testid="accordion-body-element" />
      </Accordion.Item>
    </Accordion>,
  );
};

describe("GIVEN <Accordion.Body />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut({ children: "My content" });
      expect(screen.getByText("My content")).toBeDefined();
    });

    it("AND should not render the content if the accordion is closed", () => {
      makeSut({ children: "My content" }, "1");
      expect(screen.queryByText("My content")).toBeNull();
    });
  });

  describe("THEN should correctly render the submitted padding", () => {
    it("THEN should correctly render the padding default", () => {
      makeSut({ children: "My content" });
      expect(
        screen.getByTestId("accordion-body-element").getAttribute("class"),
      ).toContain("padding_base");
    });

    it("AND should correctly render the padding none", () => {
      makeSut({ children: "My content", padding: "none" });
      expect(
        screen.getByTestId("accordion-body-element").getAttribute("class"),
      ).toContain("padding_none");
    });

    it("AND should correctly render the padding base", () => {
      makeSut({ children: "My content", padding: "base" });
      expect(
        screen.getByTestId("accordion-body-element").getAttribute("class"),
      ).toContain("padding_base");
    });
  });
});
