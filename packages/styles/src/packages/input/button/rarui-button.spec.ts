import { button } from ".";

describe("Button Styles", () => {
  it("should apply base styles correctly", () => {
    const className = button.classnames.button({
      size: "large",
      appearance: "brand",
      variant: "solid",
    });
    expect(className).toContain("button");
  });

  it("should apply full width variant styles", () => {
    const className = button.classnames.button({ full: true });
    expect(className).toContain("full");
    expect(className).toMatchSnapshot("full-width");
  });

  it("should apply appearance variants correctly", () => {
    const appearances = [
      "brand",
      "danger",
      "success",
      "warning",
      "neutral",
      "inverted",
    ] as const;
    appearances.forEach((appearance) => {
      const className = button.classnames.button({
        appearance,
        variant: "solid",
      });
      expect(className).toContain(appearance);
      expect(className).toMatchSnapshot(`appearance-${appearance}`);
    });
  });

  it("should apply size variants correctly", () => {
    const sizes = ["large", "medium", "small"] as const;
    sizes.forEach((size) => {
      const className = button.classnames.button({
        size,
        appearance: "brand",
        variant: "solid",
      });
      expect(className).toContain(size);
      expect(className).toMatchSnapshot(`size-${size}`);
    });
  });

  it("should apply variant styles correctly", () => {
    const variants = ["solid", "outlined", "text", "tonal"] as const;
    variants.forEach((variant) => {
      const className = button.classnames.button({
        appearance: "brand",
        variant,
      });
      expect(className).toContain(variant);
      expect(className).toMatchSnapshot(`variant-${variant}`);
    });
  });

  it("should apply compound variants correctly", () => {
    const compoundVariants = [
      { appearance: "brand", variant: "outlined" },
      { appearance: "danger", variant: "tonal" },
    ] as const;

    compoundVariants.forEach(({ appearance, variant }) => {
      const className = button.classnames.button({ appearance, variant });
      expect(className).toContain(appearance);
      expect(className).toContain(variant);
      expect(className).toMatchSnapshot(
        `compound-variant-${appearance}-${variant}`,
      );
    });
  });

  it("should apply pseudo-class styles correctly", () => {
    const className = button.classnames.button({
      appearance: "brand",
      variant: "solid",
    });
    expect(className).toMatchSnapshot("pseudo-classes");
  });
});
