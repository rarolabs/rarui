import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { ColorPicker } from "./ColorPicker";

const mockProps = { onChange: () => {}, color: "#FFFF00" };
const makeSut = (props = mockProps) => {
  render(<ColorPicker onChange={props.onChange} color={props.color} />);
};

describe("GIVEN <ColorPicker />", () => {
  describe("WHEN rendered", () => {
    it("THEN should display colorPicker if anchor receives hover event", async () => {
      makeSut();
      await act(() => {
        fireEvent.click(screen.getByTestId("colorPicker-trigger"));
      });
      const colorPicker = screen.getByTestId("colorPicker-element");
      expect(colorPicker).toBeDefined();
    });

    it("THEN should calculate the RGB color from HEX", async () => {
      makeSut();
      await act(() => {
        const input = screen.getByTestId("colorPicker-trigger");
        fireEvent.click(input);
        fireEvent.change(input, { target: { value: "#000000" } });
      });

      const red = screen.getByTestId<HTMLInputElement>("input-red").value;
      const green = screen.getByTestId<HTMLInputElement>("input-green").value;
      const blue = screen.getByTestId<HTMLInputElement>("input-blue").value;
      expect(red).toEqual("0");
      expect(green).toEqual("0");
      expect(blue).toEqual("0");
    });

    it("THEN should calculate the HEX color from RGB", async () => {
      makeSut();
      const input = screen.getByTestId<HTMLInputElement>("colorPicker-trigger");
      await act(() => {
        fireEvent.click(screen.getByTestId("colorPicker-trigger"));
      });
      await act(() => {
        const red = screen.getByTestId<HTMLInputElement>("input-red");
        const green = screen.getByTestId<HTMLInputElement>("input-green");
        const blue = screen.getByTestId<HTMLInputElement>("input-blue");
        fireEvent.change(red, { target: { value: "255" } });
        fireEvent.change(green, { target: { value: "255" } });
        fireEvent.change(blue, { target: { value: "255" } });
      });

      expect(input.value.toLocaleLowerCase()).toEqual("#ffffff");
    });
  });
});
