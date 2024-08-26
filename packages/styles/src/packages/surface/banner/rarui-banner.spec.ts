import { banner } from ".";

describe("Banner Styles", () => {
  it("should generate correct default styles", () => {
    const className = banner.classnames.banner();
    expect(className).toMatchSnapshot();
  });

  it("should generate correct styles for each appearance variant", () => {
    const appearances = [
      "brand",
      "info",
      "neutral",
      "inverted",
      "warning",
      "error",
    ] as const;

    appearances.forEach((appearance) => {
      const className = banner.classnames.banner({ appearance });
      expect(className).toMatchSnapshot(`${appearance} appearance`);
    });
  });

  it("should generate correct styles for floating variant", () => {
    const className = banner.classnames.banner({ floating: true });
    expect(className).toMatchSnapshot("floating true");
  });

  it("should generate correct compound variants", () => {
    const compoundVariants = [
      { appearance: "neutral", floating: true },
      { appearance: "inverted", floating: true },
    ];

    compoundVariants.forEach((variants) => {
      const className = banner.classnames.banner(variants as any);
      expect(className).toMatchSnapshot(
        `${variants.appearance} ${variants.floating} compound`,
      );
    });
  });
});
