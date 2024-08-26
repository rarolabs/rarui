import { iconButton } from ".";

describe("IconButton Styles", () => {
  it("should apply base styles correctly", () => {
    const className = iconButton.classnames.iconButton();
    expect(className).toContain("iconButton");
    expect(className).toMatchSnapshot("base-styles");
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
      const className = iconButton.classnames.iconButton({ appearance });
      expect(className).toContain(appearance);
      expect(className).toMatchSnapshot(`appearance-${appearance}`);
    });
  });

  it("should apply size variants correctly", () => {
    const sizes = ["large", "medium", "small"] as const;
    sizes.forEach((size) => {
      const className = iconButton.classnames.iconButton({ size });
      expect(className).toContain(size);
      expect(className).toMatchSnapshot(`size-${size}`);
    });
  });

  it("should apply variant types correctly", () => {
    const variants = ["solid", "outlined", "ghost", "tonal"] as const;
    variants.forEach((variant) => {
      const appearances = [
        "brand",
        "danger",
        "success",
        "warning",
        "neutral",
        "inverted",
      ] as const;
      appearances.forEach((appearance) => {
        const className = iconButton.classnames.iconButton({
          appearance,
          variant,
        });
        expect(className).toContain(appearance);
        expect(className).toContain(variant);
        expect(className).toMatchSnapshot(`variant-${appearance}-${variant}`);
      });
    });
  });

  it("should apply rounded styles correctly", () => {
    const className = iconButton.classnames.iconButton({ rounded: true });
    expect(className).toContain("rounded");
    expect(className).toMatchSnapshot("rounded");
  });
});
