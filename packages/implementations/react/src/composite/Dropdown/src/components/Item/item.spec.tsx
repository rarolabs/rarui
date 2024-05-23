import React from "react";
import { render, screen } from "@testing-library/react";

import { Item } from "./Item";
import { ItemProps } from "./item.types";

const mockedConsoleLog = jest.fn();

const makeSut = (props: ItemProps) => {
  render(<Item {...props} data-testid="body-element" />);
};

describe("GIVEN <Dropdown.Item />", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(mockedConsoleLog);
  });

  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut({ children: "My content" });
      expect(screen.getByText("My content")).toBeDefined();
    });

    it("AND deve renderizar corretamente o nome enviado", () => {
      makeSut({ name: "My name" });
      expect(screen.getByText("My name")).toBeDefined();
    });

    it("AND deve renderizar corretamente o icon enviado", () => {
      makeSut({ icon: <svg data-testid="my-icon" /> });
      expect(screen.getByTestId("my-icon")).toBeDefined();
    });
  });

  describe("THEN should validate that the item works", () => {
    it("THEN should display a console log if the element sent in the as property is not a button or link", () => {
      makeSut({
        children: <div>My content</div>,
        // eslint-disable-next-line
        // @ts-ignore
        as: "p",
      });
      expect(mockedConsoleLog).toHaveBeenCalled();
    });
  });
});
