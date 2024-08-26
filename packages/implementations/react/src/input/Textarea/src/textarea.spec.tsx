import React from "react";
import { render, screen } from "@testing-library/react";

import { Textarea } from ".";
import { TextareaProps } from "./textarea.types";

const makeSut = (rest?: TextareaProps) => {
  render(<Textarea {...rest} data-testid="textarea-element" />);
};

describe("GIVEN <Textarea />", () => {
  describe("WHEN rendered", () => {
    it("THEN should correctly render the appearance error", () => {
      makeSut({ appearance: "error" });
      expect(
        screen.getByRole<HTMLTextAreaElement>("textbox").getAttribute("class"),
      ).toContain("appearance_error");
    });

    it("AND should correctly render the appearance success", () => {
      makeSut({ appearance: "success" });
      expect(
        screen.getByRole<HTMLTextAreaElement>("textbox").getAttribute("class"),
      ).toContain("appearance_success");
    });

    it("AND should render the id", () => {
      makeSut({ id: "my-textarea" });
      expect(screen.getByRole<HTMLTextAreaElement>("textbox").id).toContain(
        "my-textarea",
      );
    });

    it("AND should render the amount of lines specified", () => {
      makeSut();
      expect(
        screen.getByRole<HTMLTextAreaElement>("textbox").getAttribute("rows"),
      ).toMatch(/\d/);
    });
  });
});
