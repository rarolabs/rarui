import React from "react";
import { render, screen } from "@testing-library/react";

import { ModalBody } from "./Body";
import { ModalBodyProps } from "./body.types";

const makeSut = (props: ModalBodyProps) => {
  render(<ModalBody {...props} data-testid="body-element" />);
};

describe("GIVEN <Modal.Body />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut({ children: "My content" });
      expect(screen.getByText("My content")).toBeDefined();
    });
  });
});
