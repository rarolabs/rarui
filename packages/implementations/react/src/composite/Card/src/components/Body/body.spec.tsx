import React from "react";
import { render, screen } from "@testing-library/react";

import { CardBody } from "./Body";
import { CardBodyProps } from "./body.types";

const makeSut = (props: CardBodyProps) => {
  render(<CardBody {...props} data-testid="card-body-element" />);
};

describe("GIVEN <Card.Body />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut({ children: "My content" });
      expect(screen.getByText("My content")).toBeDefined();
    });
  });
});
