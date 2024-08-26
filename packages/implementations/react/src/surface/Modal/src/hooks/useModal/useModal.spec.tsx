import React from "react";
import { renderHook } from "@testing-library/react";

import { Modal } from "../../Modal";
import { useModal } from "./useModal";

const mockedOnDismiss = jest.fn();

const makeSut = () =>
  renderHook(() => useModal(), {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <Modal onDismiss={mockedOnDismiss} open>
        {children}
      </Modal>
    ),
  });

describe("GIVEN useAccordion", () => {
  beforeAll(() => {
    // eslint-disable-next-line
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("WHEN the hook runs", () => {
    it("THEN should correctly return onDismiss and selected properties", () => {
      const { result } = makeSut();
      expect(result.current.onDismiss).toBeDefined();
      expect(result.current.open).toBeDefined();
    });

    it("AND should return error handling for incorrect hook usage", () => {
      try {
        // eslint-disable-next-line
        renderHook(() => useModal());
      } catch (e: any) {
        // eslint-disable-next-line
        expect(e.message).toEqual(
          "ModalHeader or ModalBody components must be wrapped in <Modal />",
        );
      }
    });
  });
});
