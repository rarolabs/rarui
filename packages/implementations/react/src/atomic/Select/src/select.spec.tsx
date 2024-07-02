import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Select } from "./Select";
import { SelectProps } from "./select.types";

const selectName = "myName";
const selectId = "myId";
const mockedOptions = [
  {
    label: "Option 1",
    value: "option-1",
  },
  {
    label: "Option 2",
    value: "option-2",
  },
  {
    label: "Option 3",
    value: "option-3",
  },
];

const mockedValues = ["option-1"];

const makeSut = (
  rest?: Partial<Omit<SelectProps, "id" | "name">>,
  id = selectId,
  name = selectName,
  options = [],
) => {
  render(
    <Select
      {...rest}
      data-testid="select-element"
      id={id}
      name={name}
      options={rest?.options || options}
      onChange={rest?.onChange || jest.fn()}
    />,
  );
};

describe("GIVEN <Select />", () => {
  it("THEN should correctly render the size base", () => {
    makeSut();
    expect(
      screen
        .getByTestId<HTMLSelectElement>("select-element")
        .getAttribute("class"),
    ).toContain("size_medium");
  });

  it("AND should correctly render the size large", () => {
    makeSut({ size: "large" });
    expect(
      screen
        .getByTestId<HTMLSelectElement>("select-element")
        .getAttribute("class"),
    ).toContain("size_large");
  });

  it("AND should correctly render the size medium", () => {
    makeSut({ size: "medium" });
    expect(
      screen
        .getByTestId<HTMLSelectElement>("select-element")
        .getAttribute("class"),
    ).toContain("size_medium");
  });

  it("AND should correctly render the size small", () => {
    makeSut({ size: "small" });
    expect(
      screen
        .getByTestId<HTMLSelectElement>("select-element")
        .getAttribute("class"),
    ).toContain("size_small");
  });

  it("AND should render the id", () => {
    makeSut();
    expect(
      screen.getByTestId<HTMLSelectElement>("select-element").id,
    ).toContain(selectId);
  });

  it("AND should correctly send the selected options in the onChange prop", () => {
    const mockedOnChange = jest.fn();
    makeSut({
      onChange: mockedOnChange,
      options: mockedOptions,
      placeholder: "Placeholder",
      multiple: true,
    });
    fireEvent.click(screen.getByTestId("select-element"));
    fireEvent.click(screen.getByLabelText(mockedOptions[0].label));
    expect(mockedOnChange).toHaveBeenCalledWith([mockedOptions[0].value]);
    fireEvent.click(screen.getByLabelText(mockedOptions[0].label));
    expect(mockedOnChange).toHaveBeenCalledWith([]);
  });

  it("AND should correctly render items when value is changed", () => {
    makeSut({
      value: mockedValues,
      options: mockedOptions,
      multiple: true,
    });
    expect(
      screen.getByTestId<HTMLSelectElement>(
        `option-selected-${mockedValues[0]}`,
      ),
    ).toBeDefined();
  });

  it("AND should correctly send the selected and remove options in the onChange prop", () => {
    const mockedOnChange = jest.fn();
    makeSut({
      onChange: mockedOnChange,
      options: mockedOptions,
      placeholder: "Placeholder",
      multiple: true,
    });
    fireEvent.click(screen.getByTestId("select-element"));
    fireEvent.click(screen.getByText(mockedOptions[0].label));
    expect(mockedOnChange).toHaveBeenCalledWith([mockedOptions[0].value]);
    fireEvent.click(
      screen.getByTestId(
        `option-selected-${mockedOptions[0].value}-button-close`,
      ),
    );
    expect(mockedOnChange).toHaveBeenCalledWith([]);
  });
});
