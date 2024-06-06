import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Header } from "./Header";
import { HeaderProps } from "./header.types";
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";

const makeSut = (props?: Partial<HeaderProps>) => {
  render(
    <Header
      {...(props as ReactDatePickerCustomHeaderProps)}
      date={new Date()}
      data-testid="header-element"
    />,
  );
};

describe("GIVEN <Datepicker.Header />", () => {
  describe("WHEN rendered", () => {
    it("THEN should call the function of advancing the month", () => {
      const mockedIncreaseMonth = jest.fn();
      makeSut({
        increaseMonth: mockedIncreaseMonth,
      });
      fireEvent.click(screen.getByTestId("increase-button"));
      expect(mockedIncreaseMonth).toHaveBeenCalled();
    });

    it("AND should disable the moving button the month", () => {
      const mockedIncreaseMonth = jest.fn();
      makeSut({
        increaseMonth: mockedIncreaseMonth,
        nextMonthButtonDisabled: true,
      });
      fireEvent.click(screen.getByTestId("increase-button"));
      expect(mockedIncreaseMonth).not.toHaveBeenCalled();
      expect(
        screen.getByTestId<HTMLButtonElement>("increase-button").disabled,
      ).toBeTruthy();
    });

    it("AND should call the function of advancing the year", () => {
      const mockedIncreaseYear = jest.fn();
      makeSut({
        showYearPicker: true,
        increaseYear: mockedIncreaseYear,
      });
      fireEvent.click(screen.getByTestId("increase-button"));
      expect(mockedIncreaseYear).toHaveBeenCalled();
    });

    it("AND should disable the year's advance button", () => {
      const mockedIncreaseYear = jest.fn();
      makeSut({
        showYearPicker: true,
        increaseYear: mockedIncreaseYear,
        nextYearButtonDisabled: true,
      });
      fireEvent.click(screen.getByTestId("increase-button"));
      expect(mockedIncreaseYear).not.toHaveBeenCalled();
      expect(
        screen.getByTestId<HTMLButtonElement>("increase-button").disabled,
      ).toBeTruthy();
    });

    it("AND should call the function of returning the month", () => {
      const mockedDecreaseMonth = jest.fn();
      makeSut({
        decreaseMonth: mockedDecreaseMonth,
      });
      fireEvent.click(screen.getByTestId("decrease-button"));
      expect(mockedDecreaseMonth).toHaveBeenCalled();
    });

    it("AND should disable the Mes Return button", () => {
      const mockedDecreaseMonth = jest.fn();
      makeSut({
        decreaseMonth: mockedDecreaseMonth,
        prevMonthButtonDisabled: true,
      });
      fireEvent.click(screen.getByTestId("decrease-button"));
      expect(mockedDecreaseMonth).not.toHaveBeenCalled();
      expect(
        screen.getByTestId<HTMLButtonElement>("decrease-button").disabled,
      ).toBeTruthy();
    });

    it("AND should call the function of returning the year", () => {
      const mockedDecreaseYear = jest.fn();
      makeSut({
        showYearPicker: true,
        decreaseYear: mockedDecreaseYear,
      });
      fireEvent.click(screen.getByTestId("decrease-button"));
      expect(mockedDecreaseYear).toHaveBeenCalled();
    });

    it("AND should disable the back button the year", () => {
      const mockedDecreaseYear = jest.fn();
      makeSut({
        showYearPicker: true,
        decreaseYear: mockedDecreaseYear,
        prevYearButtonDisabled: true,
      });
      fireEvent.click(screen.getByTestId("decrease-button"));
      expect(mockedDecreaseYear).not.toHaveBeenCalled();
      expect(
        screen.getByTestId<HTMLButtonElement>("decrease-button").disabled,
      ).toBeTruthy();
    });
  });

  describe("WHEN show label", () => {
    it("THEN should display the label month and year", () => {
      makeSut({
        date: new Date("2024-06-06T16:03:58.763Z"),
      });
      expect(screen.getByText("Junho 2024")).toBeDefined();
    });

    it("AND should display the label year", () => {
      makeSut({
        date: new Date("2024-06-06T16:03:58.763Z"),
        showMonthYearPicker: true,
      });
      expect(screen.getByText("2024")).toBeDefined();
    });

    it("AND should display the label years", () => {
      makeSut({
        date: new Date("2024-06-06T16:03:58.763Z"),
        showYearPicker: true,
      });
      expect(screen.getByText("2017 - 2028")).toBeDefined();
    });
  });
});
