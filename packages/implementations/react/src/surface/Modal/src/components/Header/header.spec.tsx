import React from "react";
import { render, screen } from "@testing-library/react";

import { Modal } from "../../Modal";
import { ModalHeader } from "./Header";
import { ModalHeaderProps } from "./header.types";

const makeSut = (props?: ModalHeaderProps) => {
  render(
    <Modal onDismiss={jest.fn} open>
      <ModalHeader {...props} data-testid="header-element" />
    </Modal>,
  );
};

describe("GIVEN <Accordion.Header />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted title", () => {
      makeSut({ title: "My Title" });
      expect(screen.getByText("My Title")).toBeDefined();
      expect(screen.getByTestId("header-title")).toBeDefined();
    });

    it("AND should not render the submitted title", () => {
      makeSut();
      expect(screen.queryByTestId("header-title")).toBeNull();
    });

    it("AND should render the submitted subtitle", () => {
      makeSut({ subtitle: "My subtitle" });
      expect(screen.getByText("My subtitle")).toBeDefined();
      expect(screen.queryByTestId("header-subtitle")).toBeDefined();
    });

    it("AND should not render the submitted subtitle", () => {
      makeSut();
      expect(screen.queryByTestId("header-subtitle")).toBeNull();
    });
  });
});
