import { badge } from ".";

describe("Badge Styles", () => {
  it("should generate correct default styles", () => {
    const className = badge.classnames.badge();
    expect(className).toMatchSnapshot();
  });

  it("should generate correct styles for each appearance variant", () => {
    const appearances = [
      "brand",
      "danger",
      "success",
      "warning",
      "info",
      "neutral",
      "inverted",
    ] as const;

    appearances.forEach((appearance) => {
      const className = badge.classnames.badge({ appearance });
      expect(className).toMatchSnapshot(`${appearance} appearance`);
    });
  });

  it("should generate correct styles for each size variant", () => {
    const sizes = ["large", "medium", "small", "dot"] as const;

    sizes.forEach((size) => {
      const className = badge.classnames.badge({ size });
      expect(className).toMatchSnapshot(`${size} size`);
    });
  });

  it("should generate correct styles for outlined variant", () => {
    const className = badge.classnames.badge({ variant: "outlined" });
    expect(className).toMatchSnapshot("outlined variant");
  });

  it("should generate correct compound variants", () => {
    const compoundVariants = [
      { appearance: "brand", variant: "outlined" },
      { appearance: "danger", variant: "outlined" },
      { appearance: "success", variant: "outlined" },
      { appearance: "warning", variant: "outlined" },
      { appearance: "info", variant: "outlined" },
      { appearance: "neutral", variant: "outlined" },
      { appearance: "inverted", variant: "outlined" },
    ];

    compoundVariants.forEach((variants) => {
      const className = badge.classnames.badge(variants as any);
      expect(className).toMatchSnapshot(
        `${variants.appearance} ${variants.variant} compound`,
      );
    });
  });
});
