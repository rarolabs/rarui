import React from "react";
import { render, screen, act } from "@testing-library/react";

import { useToast } from "../../hooks";
import { ToastProps } from "../../toast.types";
import { Toast } from "../../Toast";

Object.defineProperty(window, "crypto", {
  value: { randomUUID: () => "123" },
});

const Button: React.FC<{ toast: ToastProps; id: string }> = ({ toast, id }) => {
  const { addToast, closeToast } = useToast();
  return (
    <>
      <button type="button" onClick={() => addToast(toast)}>
        add
      </button>
      <button type="button" onClick={() => closeToast(id || "")}>
        close
      </button>
    </>
  );
};

const makeSut = (rest: ToastProps) => {
  render(
    <Toast.Provider>
      <Button toast={rest} id={rest.id} />
    </Toast.Provider>,
  );
};

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("GIVEN <ToastProvider />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("THEN should ensure the correct functioning of the ToastProvider", () => {
    it("THEN should add a new toast correctly", () => {
      makeSut({ appearance: "info", id: "1", children: "Toast" });
      act(() => {
        screen.getByText("add").click();
      });
      expect(
        screen.getByTestId("toast-element").getAttribute("class"),
      ).toContain("appearance_info");

      const icon = screen.getByTestId("toast-icon-info");
      expect(icon.getAttribute("class")).toContain("color-on-info");
      expect(icon.firstChild?.nodeName).toEqual("svg");
    });

    it("AND should close toast correctly", () => {
      makeSut({ appearance: "info", id: "1", children: "Toast" });
      act(() => {
        screen.getByText("add").click();
      });
      expect(
        screen.getByTestId("toast-element").getAttribute("class"),
      ).toContain("appearance_info");

      const icon = screen.getByTestId("toast-icon-info");
      expect(icon.getAttribute("class")).toContain("color-on-info");
      expect(icon.firstChild?.nodeName).toEqual("svg");
      act(() => {
        screen.getByText("close").click();
      });
      expect(screen.queryByTestId("toast-element")).toBeNull();
    });

    it("AND should generate dinamyc id", () => {
      jest.spyOn(crypto, "randomUUID");

      makeSut({ appearance: "info", id: "", children: "Toast" });
      act(() => {
        screen.getByText("add").click();
      });
      expect(
        screen.getByTestId("toast-element").getAttribute("class"),
      ).toContain("appearance_info");

      const icon = screen.getByTestId("toast-icon-info");
      expect(icon.getAttribute("class")).toContain("color-on-info");
      expect(icon.firstChild?.nodeName).toEqual("svg");
    });
  });
});
