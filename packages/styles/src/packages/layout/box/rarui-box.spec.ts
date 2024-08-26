import { box } from ".";

describe("Box Styles", () => {
  it("should apply default condition (xs) styles", () => {
    const className = box.sprinkle({ width: "100%" });
    expect(className).toMatchSnapshot("default condition (xs)");
  });

  it("should apply styles for different media queries", () => {
    const className = box.sprinkle({
      width: {
        xs: "100%",
        md: "50%",
        lg: "25%",
        xl: "10%",
      },
    });
    expect(className).toMatchSnapshot("media queries");
  });

  it("should apply pseudo-class selectors correctly", () => {
    const className = box.sprinkle({
      color: {
        xs: "$success",
        hover: "$brand",
        focus: "$info",
        active: "$primary",
      },
    });
    expect(className).toMatchSnapshot("pseudo-classes");
  });

  it("should apply static properties correctly", () => {
    const className = box.sprinkle({
      padding: "$xs",
      margin: "$md",
      backgroundColor: "$primary",
    });
    expect(className).toMatchSnapshot("static properties");
  });

  it("should apply shorthands correctly", () => {
    const className = box.sprinkle({
      p: "$xs",
      mx: "$md",
      pt: "$xl",
    });
    expect(className).toMatchSnapshot("shorthands");
  });

  it("should apply dynamic properties correctly", () => {
    const className = box.sprinkle({
      width: "100%",
      height: "auto",
      flexGrow: 1,
    });
    expect(className).toMatchSnapshot("dynamic properties");
  });

  it("should apply multiple properties and conditions together", () => {
    const className = box.sprinkle({
      backgroundColor: "$primary",
      padding: { xs: "$2xs", md: "$md" },
      margin: "$2xl",
      color: { hover: "$primary", focus: "$brand" },
    });
    expect(className).toMatchSnapshot("multiple properties and conditions");
  });
});
