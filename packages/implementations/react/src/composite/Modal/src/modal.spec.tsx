import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Modal } from "./Modal";
import { ModalProps } from "./modal.types";

const mockedOnDismiss = jest.fn();

const makeSut = (rest: Pick<ModalProps, "children">) => {
  render(
    <Modal
      {...rest}
      onDismiss={mockedOnDismiss}
      open
      data-testid="modal-element"
    />,
  );
};

describe("GIVEN <Modal />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the submitted content", () => {
      makeSut({ children: <Modal.Body>My content</Modal.Body> });
      expect(screen.getByText("My content")).toBeDefined();
    });

    it("AND should correctly call the onDismiss function when closing the modal", () => {
      makeSut({
        children: (
          <>
            <Modal.Header title="Modal title" />
            <Modal.Body>My content</Modal.Body>
          </>
        ),
      });
      fireEvent.click(screen.getByTestId("dismiss-modal-button"));
      expect(mockedOnDismiss).toHaveBeenCalledWith(false);
    });
  });
});
