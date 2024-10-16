import React from "react";
import { render, screen } from "@testing-library/react";

import { ModalFooter } from "./Footer";
import { ModalFooterProps } from "./footer.types";

const makeSut = (props: ModalFooterProps) => {
  render(<ModalFooter {...props} data-testid="footer-element" />);
};

describe("GIVEN <Modal.Footer />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut({ children: "My content" });
      expect(screen.getByText("My content")).toBeDefined();
    });
  });
});
