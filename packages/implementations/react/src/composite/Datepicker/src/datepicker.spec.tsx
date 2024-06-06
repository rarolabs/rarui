import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Datepicker } from "./Datepicker";
import { DatepickerProps } from "./datepicker.types";

const mockedOnChange = jest.fn();

const makeSut = (rest?: Omit<DatepickerProps, "onChange">) => {
  render(
    <Datepicker
      {...rest}
      onChange={mockedOnChange}
      data-testid="datepicker-element"
    />,
  );
};

describe("GIVEN <Datepicker />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the submitted content", () => {
      makeSut({
        input: {
          // eslint-disable-next-line
          // @ts-ignore
          "data-testid": "input-element",
        },
        showTimeSelect: true,
      });
      fireEvent.click(screen.getByTestId("input-element"));
    });

    it("THEN should render a custom anchor", () => {
      makeSut({
        customInput: (
          <button data-testid="button-datepicker" type="button">
            Datepicker
          </button>
        ),
      });
      fireEvent.click(screen.getByTestId("button-datepicker"));
      fireEvent.click(screen.getByTestId("today-button"));
    });
  });
});
