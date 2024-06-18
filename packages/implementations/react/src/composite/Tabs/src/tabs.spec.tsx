import React from "react";
import flattenChildren from "react-keyed-flatten-children";
import { render, screen, fireEvent } from "@testing-library/react";

import { Tabs } from "./Tabs";
import { TabsProps } from "./tabs.types";

const makeSut = (rest?: TabsProps) => {
  render(<Tabs {...rest} data-testid="tabs-element" />);
};

describe("GIVEN <Tabs />", () => {
  beforeEach(() => {
    Object.defineProperty(window, "crypto", {
      value: {
        randomUUID: () => `${Math.floor(Math.random() * Date.now() + 1)}`,
      },
    });
  });

  describe("WHEN rendered", () => {
    it("THEN should correctly render the first tab as selected by default", () => {
      makeSut({
        children: flattenChildren(
          <>
            <Tabs.Item label="Label 1">Tab Content 1</Tabs.Item>
            <Tabs.Item label="Label 2">Tab Content 2</Tabs.Item>
          </>,
        ),
      });

      expect(screen.getByText("Label 1").getAttribute("class")).toContain(
        "selected_true",
      );
      expect(screen.getByText("Label 2").getAttribute("class")).not.toContain(
        "selected_true",
      );
    });

    it("THEN should selected the tab correctly", () => {
      makeSut({
        children: flattenChildren(
          <>
            <Tabs.Item label="Label 1">Tab Content 1</Tabs.Item>
            <Tabs.Item label="Label 2">Tab Content 2</Tabs.Item>
          </>,
        ),
      });

      expect(screen.getByText("Label 1").getAttribute("class")).toContain(
        "selected_true",
      );
      expect(screen.getByText("Label 2").getAttribute("class")).not.toContain(
        "selected_true",
      );

      fireEvent.click(screen.getByText("Label 2"));
      expect(screen.getByText("Label 1").getAttribute("class")).not.toContain(
        "selected_true",
      );
      expect(screen.getByText("Label 2").getAttribute("class")).toContain(
        "selected_true",
      );
    });

    it("AND should correctly render the preselected tab as selected", () => {
      makeSut({
        preSelectedTab: 1,
        children: flattenChildren(
          <>
            <Tabs.Item label="Label 1">Tab Content 1</Tabs.Item>
            <Tabs.Item label="Label 2">Tab Content 2</Tabs.Item>
          </>,
        ),
      });
      expect(screen.getByText("Label 2").getAttribute("class")).toContain(
        "selected_true",
      );
      expect(screen.getByText("Label 1").getAttribute("class")).not.toContain(
        "selected_true",
      );
    });

    it("AND should correctly render the full property", () => {
      makeSut({
        full: true,
        children: flattenChildren(
          <>
            <Tabs.Item label="Label 1">Tab Content 1</Tabs.Item>
            <Tabs.Item label="Label 2">Tab Content 2</Tabs.Item>
          </>,
        ),
      });
      expect(
        screen.getAllByRole("listitem")[0].getAttribute("class"),
      ).toContain("full_true");
      expect(
        screen.getAllByRole("listitem")[1].getAttribute("class"),
      ).toContain("full_true");
    });

    it("AND should correctly not render the full property", () => {
      makeSut({
        children: flattenChildren(
          <>
            <Tabs.Item label="Label 1">Tab Content 1</Tabs.Item>
            <Tabs.Item label="Label 2">Tab Content 2</Tabs.Item>
          </>,
        ),
      });
      expect(
        screen.getAllByRole("listitem")[0].getAttribute("class"),
      ).not.toContain("full_true");
      expect(
        screen.getAllByRole("listitem")[1].getAttribute("class"),
      ).not.toContain("full_true");
    });

    it("AND should correctly render the underlined property", () => {
      makeSut({
        underlined: true,
        children: flattenChildren(
          <>
            <Tabs.Item label="Label 1">Tab Content 1</Tabs.Item>
            <Tabs.Item label="Label 2">Tab Content 2</Tabs.Item>
          </>,
        ),
      });
      expect(screen.getByText("Label 1").getAttribute("class")).toContain(
        "underlined_true",
      );
      expect(screen.getByText("Label 2").getAttribute("class")).toContain(
        "underlined_true",
      );
    });

    it("AND should correctly not render the underlined property", () => {
      makeSut({
        children: flattenChildren(
          <>
            <Tabs.Item label="Label 1">Tab Content 1</Tabs.Item>
            <Tabs.Item label="Label 2">Tab Content 2</Tabs.Item>
          </>,
        ),
      });
      expect(screen.getByText("Label 1").getAttribute("class")).not.toContain(
        "underlined_true",
      );
      expect(screen.getByText("Label 2").getAttribute("class")).not.toContain(
        "underlined_true",
      );
    });
  });
});
