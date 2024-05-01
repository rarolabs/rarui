import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Password, PasswordProps } from "./Password";

const makeSut = (rest?: PasswordProps) => {
  render(<Password {...rest} data-testid="input-password-element" />);
};

describe("GIVEN <Input.Password />", () => {
  describe("WHEN rendered", () => {
    it("THEN should display the password correctly to the user", () => {
      makeSut();
      expect(screen.queryByTestId("button-password-show")).toBeNull();
      const input = screen.getByTestId<HTMLInputElement>(
        "input-password-element",
      );
      fireEvent.change(input, { target: { value: "my password" } });
      expect(input.type).toEqual("password");
      fireEvent.click(screen.getByTestId("icon-show"));
      expect(input.type).toEqual("text");
    });

    it("AND should correctly send the input change event to the onChange function", () => {
      const mockedOnChange = jest.fn();
      makeSut({ onChange: mockedOnChange });
      const input = screen.getByTestId<HTMLInputElement>(
        "input-password-element",
      );
      fireEvent.change(input, { target: { value: "my password" } });
      expect(mockedOnChange).toHaveBeenCalled();
    });

    it("AND should position the password icon correctly", () => {
      makeSut();
      const input = screen.getByTestId("input-password-element");
      fireEvent.change(input, { target: { value: "my password" } });
      const button = screen.getByTestId("icon-show");
      expect(button.getAttribute("class")).toContain("position_end");
    });
  });
});
