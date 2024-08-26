import React from "react";
import { render, screen } from "@testing-library/react";

import { CardHeader } from "./Header";
import { CardHeaderProps } from "./header.types";

const makeSut = (props: CardHeaderProps) => {
  render(<CardHeader {...props} data-testid="card-header-element" />);
};

describe("GIVEN <Card.Header />", () => {
  describe("WHEN rendered", () => {
    it("THEN should render the submitted content", () => {
      makeSut({ children: "My content" });
      expect(screen.getByText("My content")).toBeDefined();
    });

    it("THEN should render the submitted title", () => {
      makeSut({ title: "My Title" });
      expect(screen.getByText("My Title")).toBeDefined();
    });

    it("THEN should render the submitted description", () => {
      makeSut({ description: "My Description" });
      expect(screen.getByText("My Description")).toBeDefined();
    });
  });
});
