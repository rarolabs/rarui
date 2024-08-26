import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";

import { Tooltip } from "./Tooltip";
import { TooltipProps } from "./tooltip.types";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const makeSut = (rest: Omit<TooltipProps, "children">) => {
  render(
    <Tooltip {...rest} data-testid="tooltip-element">
      <p data-testid="anchor-element">hover</p>
    </Tooltip>,
  );
};

describe("GIVEN <Tooltip />", () => {
  describe("WHEN rendered", () => {
    it("THEN should display tooltip if anchor receives hover event", async () => {
      makeSut({ content: <p>string</p>, enabledHover: true });
      await act(() => {
        fireEvent.click(screen.getByTestId("tooltip-container"));
      });
      const tooltip = screen.getByTestId("tooltip-element");
      expect(tooltip).toBeDefined();
    });

    it('THEN should display tooltip in "top" position', async () => {
      makeSut({ content: <p>string</p>, position: "top", enabledHover: true });
      await act(() => {
        fireEvent.click(screen.getByTestId("tooltip-container"));
      });
      const tooltip = screen.getByTestId("tooltip-element");
      const arrow = screen.getByTestId("arrow-element");
      expect(tooltip).toBeDefined();

      expect(tooltip.style.top).toEqual("0px");
      expect(tooltip.style.left).toEqual("0px");
      expect(tooltip.style.transform).toEqual("translate(0px, -10px)");
      expect(tooltip.style.position).toEqual("fixed");

      expect(arrow.style.top).toEqual("100%");
      expect(arrow.style.position).toEqual("absolute");
    });

    it('THEN should display tooltip in "bottom" position', async () => {
      makeSut({
        content: <p>string</p>,
        position: "bottom",
        enabledHover: true,
      });
      await act(() => {
        fireEvent.click(screen.getByTestId("tooltip-container"));
      });
      const tooltip = screen.getByTestId("tooltip-element");
      const arrow = screen.getByTestId("arrow-element");
      expect(tooltip).toBeDefined();

      expect(tooltip.style.top).toEqual("0px");
      expect(tooltip.style.left).toEqual("0px");
      expect(tooltip.style.transform).toEqual("translate(0px, 10px)");
      expect(tooltip.style.position).toEqual("fixed");

      expect(arrow.style.bottom).toEqual("100%");
      expect(arrow.style.transform).toBe("rotate(180deg)");
      expect(arrow.style.position).toEqual("absolute");
    });

    it('THEN should display tooltip in "left" position', async () => {
      makeSut({ content: <p>string</p>, position: "left", enabledHover: true });
      await act(() => {
        fireEvent.click(screen.getByTestId("tooltip-container"));
      });
      const tooltip = screen.getByTestId("tooltip-element");
      const arrow = screen.getByTestId("arrow-element");
      expect(tooltip).toBeDefined();

      expect(tooltip.style.top).toEqual("0px");
      expect(tooltip.style.left).toEqual("0px");
      expect(tooltip.style.transform).toEqual("translate(-10px, 0px)");
      expect(tooltip.style.position).toEqual("fixed");

      expect(arrow.style.left).toEqual("calc(100% - 0px)");
      expect(arrow.style.transform).toBe("rotate(-90deg)");
      expect(arrow.style.position).toEqual("absolute");
    });

    it('THEN should display tooltip in "right" position', async () => {
      makeSut({
        content: <p>string</p>,
        position: "right",
        enabledHover: true,
      });
      await act(() => {
        fireEvent.click(screen.getByTestId("tooltip-container"));
      });
      const tooltip = screen.getByTestId("tooltip-element");
      const arrow = screen.getByTestId("arrow-element");
      expect(tooltip).toBeDefined();

      expect(tooltip.style.top).toEqual("0px");
      expect(tooltip.style.left).toEqual("0px");
      expect(tooltip.style.transform).toEqual("translate(10px, 0px)");
      expect(tooltip.style.position).toEqual("fixed");

      expect(arrow.style.right).toEqual("calc(100% - 0px)");
      expect(arrow.style.transform).toBe("rotate(90deg)");
      expect(arrow.style.position).toEqual("absolute");
    });

    it("THEN should render the tooltip open by default", async () => {
      await act(() => {
        makeSut({
          content: <p>string</p>,
          visible: true,
        });
      });
      const tooltip = screen.getByTestId("tooltip-element");
      expect(tooltip).toBeDefined();
    });

    it("THEN should control the operation by the onVisibility function sent and with tooltip open", async () => {
      const mockedOnVisibility = jest.fn();
      await act(() => {
        makeSut({
          content: <p>string</p>,
          visible: true,
          onVisibility: mockedOnVisibility,
        });
      });
      const tooltip = screen.getByTestId("tooltip-element");
      expect(tooltip).toBeDefined();
      fireEvent.click(screen.getByTestId("tooltip-container"));
      expect(mockedOnVisibility).toHaveBeenCalledWith(
        false,
        expect.objectContaining({
          isTrusted: false,
        }),
        "click",
      );
    });

    it("THEN should control the operation by the onVisibility function sent and with tooltip close", async () => {
      const mockedOnVisibility = jest.fn();
      await act(() => {
        makeSut({
          content: <p>string</p>,
          visible: false,
          onVisibility: mockedOnVisibility,
        });
      });
      const tooltip = screen.queryByTestId("tooltip-element");
      expect(tooltip).toBeNull();
      fireEvent.click(screen.getByTestId("tooltip-container"));

      expect(mockedOnVisibility).toHaveBeenCalledWith(
        true,
        expect.objectContaining({
          isTrusted: false,
        }),
        "click",
      );
    });
  });
  describe("THEN should correctly render the submitted inverted", () => {
    it("THEN should correctly render the inverted true", async () => {
      makeSut({ content: <p>string</p>, enabledHover: true, inverted: true });
      await act(() => {
        fireEvent.click(screen.getByTestId("tooltip-container"));
      });
      expect(
        screen.getByTestId("tooltip-element").getAttribute("class"),
      ).toContain("inverted_true");
    });

    it("THEN should correctly render the inverted false", async () => {
      makeSut({
        content: <p>string</p>,
        enabledHover: true,
        matchReferenceWidth: true,
      });
      await act(() => {
        fireEvent.click(screen.getByTestId("tooltip-container"));
      });
      expect(
        screen.getByTestId("tooltip-element").getAttribute("class"),
      ).not.toContain("inverted_true");
    });
  });
});
