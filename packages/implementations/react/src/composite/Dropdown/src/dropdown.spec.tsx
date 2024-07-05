import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";

import { Dropdown } from "./Dropdown";
import { DropdownProps } from "./dropdown.types";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const makeSut = (rest: Omit<DropdownProps, "children">) => {
  render(
    <Dropdown {...rest} data-testid="dropdown-element">
      <p data-testid="anchor-element">hover</p>
    </Dropdown>,
  );
};

describe("GIVEN <Dropdown />", () => {
  describe("WHEN rendered", () => {
    it("THEN should display dropdown if anchor receives hover event", async () => {
      makeSut({ content: <p>string</p> });
      await act(() => {
        fireEvent.click(screen.getByTestId("dropdown-container"));
      });
      const dropdown = screen.getByTestId("dropdown-element");
      expect(dropdown).toBeDefined();
    });

    it('THEN should display dropdown in "top" position', async () => {
      makeSut({ content: <p>string</p>, position: "top" });
      await act(() => {
        fireEvent.click(screen.getByTestId("dropdown-container"));
      });
      const dropdown = screen.getByTestId("dropdown-element");
      expect(dropdown).toBeDefined();

      expect(dropdown.style.top).toEqual("0px");
      expect(dropdown.style.left).toEqual("0px");
      expect(dropdown.style.transform).toEqual("translate(0px, -10px)");
      expect(dropdown.style.position).toEqual("fixed");
    });

    it('THEN should display dropdown in "bottom" position', async () => {
      makeSut({
        content: <p>string</p>,
        position: "bottom",
      });
      await act(() => {
        fireEvent.click(screen.getByTestId("dropdown-container"));
      });
      const dropdown = screen.getByTestId("dropdown-element");
      expect(dropdown).toBeDefined();

      expect(dropdown.style.top).toEqual("0px");
      expect(dropdown.style.left).toEqual("0px");
      expect(dropdown.style.transform).toEqual("translate(0px, 10px)");
      expect(dropdown.style.position).toEqual("fixed");
    });

    it('THEN should display dropdown in "left" position', async () => {
      makeSut({ content: <p>string</p>, position: "left" });
      await act(() => {
        fireEvent.click(screen.getByTestId("dropdown-container"));
      });
      const dropdown = screen.getByTestId("dropdown-element");
      expect(dropdown).toBeDefined();

      expect(dropdown.style.top).toEqual("0px");
      expect(dropdown.style.left).toEqual("0px");
      expect(dropdown.style.transform).toEqual("translate(-10px, 0px)");
      expect(dropdown.style.position).toEqual("fixed");
    });

    it('THEN should display dropdown in "right" position', async () => {
      makeSut({
        content: <p>string</p>,
        position: "right",
      });
      await act(() => {
        fireEvent.click(screen.getByTestId("dropdown-container"));
      });
      const dropdown = screen.getByTestId("dropdown-element");
      expect(dropdown).toBeDefined();

      expect(dropdown.style.top).toEqual("0px");
      expect(dropdown.style.left).toEqual("0px");
      expect(dropdown.style.transform).toEqual("translate(10px, 0px)");
      expect(dropdown.style.position).toEqual("fixed");
    });

    it("THEN should render the dropdown open by default", async () => {
      await act(() => {
        makeSut({
          content: <p>string</p>,
          visible: true,
        });
      });
      const dropdown = screen.getByTestId("dropdown-element");
      expect(dropdown).toBeDefined();
    });

    it("THEN should control the operation by the onVisibility function sent and with dropdown open", async () => {
      const mockedOnVisibility = jest.fn();
      await act(() => {
        makeSut({
          content: <p>string</p>,
          visible: true,
          onVisibility: mockedOnVisibility,
        });
      });
      const dropdown = screen.getByTestId("dropdown-element");
      expect(dropdown).toBeDefined();
      fireEvent.click(screen.getByTestId("dropdown-container"));
      expect(mockedOnVisibility).toHaveBeenCalledWith(
        false,
        expect.objectContaining({
          isTrusted: false,
        }),
        "click",
      );
    });

    it("THEN should control the operation by the onVisibility function sent and with dropdown close", async () => {
      const mockedOnVisibility = jest.fn();
      await act(() => {
        makeSut({
          content: <p>string</p>,
          visible: false,
          onVisibility: mockedOnVisibility,
        });
      });
      const dropdown = screen.queryByTestId("dropdown-element");
      expect(dropdown).toBeNull();
      fireEvent.click(screen.getByTestId("dropdown-container"));

      expect(mockedOnVisibility).toHaveBeenCalledWith(
        true,
        expect.objectContaining({
          isTrusted: false,
        }),
        "click",
      );
    });
  });
});
