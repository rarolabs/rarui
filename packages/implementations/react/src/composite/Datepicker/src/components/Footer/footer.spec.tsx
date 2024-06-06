import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Footer } from "./Footer";
import { FooterProps } from "./footer.types";

const makeSut = (props: FooterProps) => {
  render(<Footer {...props} data-testid="today-button" />);
};

describe("GIVEN <Datepicker.Footer />", () => {
  describe("WHEN rendered", () => {
    it("THEN should call the setselected function by clicking the day button", () => {
      const mockSetSelected = jest.fn();
      makeSut({ setSelected: mockSetSelected });
      fireEvent.click(screen.getByTestId("today-button"));
      expect(mockSetSelected).toHaveBeenCalled();
    });
  });
});
