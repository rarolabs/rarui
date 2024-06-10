import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Accordion } from "../../Accordion";
import { AccordionHeader } from "./Header";
import { AccordionHeaderProps } from "./header.types";

const makeSut = (props?: AccordionHeaderProps, selectedDefault = "0") => {
  render(
    <Accordion selectedDefault={selectedDefault}>
      <Accordion.Item index="0">
        <AccordionHeader {...props} data-testid="accordion-header-element" />
      </Accordion.Item>
    </Accordion>,
  );
};

describe("GIVEN <Accordion.Header />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted title", () => {
      makeSut({ title: "My title" });
      expect(screen.getByText("My title")).toBeDefined();
      expect(screen.getByTestId("accordion-header-title")).toBeDefined();
    });

    it("AND should not render the submitted title", () => {
      makeSut();
      expect(screen.queryByTestId("accordion-header-title")).toBeNull();
    });

    it("AND should render the submitted subTitle", () => {
      makeSut({ subtitle: "My subtitle" });
      expect(screen.getByText("My subtitle")).toBeDefined();
      expect(screen.getByTestId("accordion-header-subtitle")).toBeDefined();
    });

    it("AND should not render the submitted subTitle", () => {
      makeSut();
      expect(screen.queryByTestId("accordion-header-subtitle")).toBeNull();
    });

    it("AND should render the submitted Icon", () => {
      makeSut({
        icon: <svg data-testid="my-accodion-icon" />,
      });
      expect(screen.getByTestId("my-accodion-icon")).toBeDefined();
    });

    it("AND should render the IconToggle", () => {
      makeSut();
      expect(screen.getByTestId("accordion-icon-Toggle")).toBeDefined();
    });

    it("AND should not render the IconToggle", () => {
      makeSut({
        noIconToggle: true,
      });
      fireEvent.click(screen.getByTestId("accordion-header-element"));
      expect(screen.queryByTestId("accordion-icon-Toggle")).toBeNull();
    });

    it("AND should open accordion item", () => {
      makeSut({}, "1");
      fireEvent.click(screen.getByTestId("accordion-header-element"));
      expect(
        screen.getByTestId("accordion-header-element").getAttribute("class"),
      ).toContain("selected_true");
    });

    it("AND should not open accordion item", () => {
      makeSut({}, "1");
      expect(
        screen.getByTestId("accordion-header-element").getAttribute("class"),
      ).not.toContain("selected_true");
    });

    it("AND should send the props correctly via render props", () => {
      render(
        <Accordion selectedDefault="1">
          <Accordion.Item index="0">
            <AccordionHeader data-testid="accordion-header-element">
              {({ selected, index }) => (
                <div data-testid={`selected-${selected}-index-${index}`} />
              )}
            </AccordionHeader>
          </Accordion.Item>
        </Accordion>,
      );
      expect(screen.getByTestId("selected-1-index-0")).toBeDefined();
    });
  });

  describe("THEN should correctly render the submitted size", () => {
    it("THEN should correctly render the size default", () => {
      makeSut();
      expect(
        screen.getByTestId("accordion-header-element").getAttribute("class"),
      ).toContain("size_medium");
    });

    it("AND should correctly render the size large", () => {
      makeSut({ size: "large" });
      expect(
        screen.getByTestId("accordion-header-element").getAttribute("class"),
      ).toContain("size_large");
    });

    it("AND should correctly render the size medium", () => {
      makeSut({ size: "medium" }, "1");
      expect(
        screen.getByTestId("accordion-header-element").getAttribute("class"),
      ).toContain("size_medium");
    });

    it("AND should correctly render the size small", () => {
      makeSut({ size: "small" }, "1");
      expect(
        screen.getByTestId("accordion-header-element").getAttribute("class"),
      ).toContain("size_small");
    });
  });
});
