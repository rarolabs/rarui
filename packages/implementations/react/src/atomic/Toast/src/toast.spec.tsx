import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Toast } from "./Toast";
import { ToastContext } from "./context";
import { ToastProps } from "./toast.types";

const mockedAddToast = jest.fn();
const mockedCloseToast = jest.fn();

const makeSut = (rest: ToastProps) => {
  render(
    <ToastContext.Provider
      value={{ addToast: mockedAddToast, closeToast: mockedCloseToast }}
    >
      <Toast {...rest} data-testid="toast-element" />
    </ToastContext.Provider>,
  );
};

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("GIVEN <Toast />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("THEN should correctly render the submitted appearance", () => {
    it("THEN should correctly render the appearance neutral", () => {
      makeSut({
        appearance: "neutral",
        children: "Toast",
        id: "c9e9656c-1209-4a02-96c7-c522ae49fd0f",
      });
      expect(
        screen.getByTestId("toast-element").getAttribute("class"),
      ).toContain("neutral");

      const icon = screen.getByTestId("toast-icon-neutral");
      expect(icon.firstChild?.nodeName).toEqual("svg");
    });

    it("AND should correctly render the appearance invert", () => {
      makeSut({
        appearance: "invert",
        children: "Toast",
        id: "c9e9656c-1209-4a02-96c7-c522ae49fd0f",
      });
      expect(
        screen.getByTestId("toast-element").getAttribute("class"),
      ).toContain("invert");

      const icon = screen.getByTestId("toast-icon-invert");
      expect(icon.firstChild?.nodeName).toEqual("svg");
    });

    it("AND should correctly render the appearance success", () => {
      makeSut({
        appearance: "success",
        children: "Toast",
        id: "c9e9656c-1209-4a02-96c7-c522ae49fd0f",
      });
      expect(
        screen.getByTestId("toast-element").getAttribute("class"),
      ).toContain("success");

      const icon = screen.getByTestId("toast-icon-success");
      expect(icon.firstChild?.nodeName).toEqual("svg");
    });

    it("AND should correctly render the appearance error", () => {
      makeSut({
        appearance: "error",
        children: "Toast",
        id: "c9e9656c-1209-4a02-96c7-c522ae49fd0f",
      });
      expect(
        screen.getByTestId("toast-element").getAttribute("class"),
      ).toContain("error");

      const icon = screen.getByTestId("toast-icon-error");
      expect(icon.firstChild?.nodeName).toEqual("svg");
    });

    it("AND should correctly render the appearance info", () => {
      makeSut({
        appearance: "info",
        children: "Toast",
        id: "c9e9656c-1209-4a02-96c7-c522ae49fd0f",
      });
      expect(
        screen.getByTestId("toast-element").getAttribute("class"),
      ).toContain("info");

      const icon = screen.getByTestId("toast-icon-info");
      expect(icon.firstChild?.nodeName).toEqual("svg");
    });

    it("AND should correctly render the appearance warning", () => {
      makeSut({
        appearance: "warning",
        children: "Toast",
        id: "c9e9656c-1209-4a02-96c7-c522ae49fd0f",
      });
      expect(
        screen.getByTestId("toast-element").getAttribute("class"),
      ).toContain("warning");

      const icon = screen.getByTestId("toast-icon-warning");
      expect(icon.firstChild?.nodeName).toEqual("svg");
    });
  });

  describe("THEN should ensure the correct functioning of the toast", () => {
    it("THEN should run the toast removal animation and call the toast removal function", () => {
      makeSut({
        appearance: "neutral",
        children: "Toast",
        id: "c9e9656c-1209-4a02-96c7-c522ae49fd0f",
      });
      const closeButton = screen.getByTestId("dismiss-button");
      fireEvent.click(closeButton);
      expect(mockedCloseToast).toHaveBeenCalledTimes(1);
    });
  });
});
