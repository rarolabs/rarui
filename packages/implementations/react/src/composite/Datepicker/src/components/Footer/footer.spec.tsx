import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { DatepickerFooter } from "./Footer";
import { DatepickerFooterProps } from "./footer.types";

const makeSut = (props: DatepickerFooterProps) => {
  render(<DatepickerFooter {...props} />);
};

describe("GIVEN <Datepicker.Footer />", () => {
  describe("WHEN rendered", () => {
    it("THEN should call the setselected function by clicking the day button", () => {
      const mockSetSelected = jest.fn();
      makeSut({ setSelected: mockSetSelected });
      fireEvent.click(screen.getByTestId("today-button"));
      expect(mockSetSelected).toHaveBeenCalled();
    });
    it("THEN should call the clear function by clicking the clear button", () => {
      const mockClear = jest.fn();
      makeSut({ clear: mockClear });
      fireEvent.click(screen.getByTestId("clear-button"));
      expect(mockClear).toHaveBeenCalled();
    });
  });
});
