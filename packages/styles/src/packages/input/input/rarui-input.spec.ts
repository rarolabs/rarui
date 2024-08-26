import { input } from ".";

describe("Input Styles", () => {
  it("should apply base container styles correctly", () => {
    const className = input.classnames.container();
    expect(className).toContain("container");
  });

  it("should apply appearance variants correctly", () => {
    const appearances = ["success", "error"] as const;
    appearances.forEach((appearance) => {
      const className = input.classnames.container({ appearance });
      expect(className).toContain(appearance);
      expect(className).toMatchSnapshot(`appearance-${appearance}`);
    });
  });

  it("should apply border variants correctly", () => {
    const borders = [true, false];
    borders.forEach((border) => {
      const className = input.classnames.container({ border });
      expect(className).toContain(border ? "true" : "false");
      expect(className).toMatchSnapshot(`border-${border}`);
    });
  });

  it("should apply size variants correctly", () => {
    const sizes = ["large", "medium", "small"] as const;
    sizes.forEach((size) => {
      const className = input.classnames.container({ size });
      expect(className).toContain(size);
      expect(className).toMatchSnapshot(`size-${size}`);
    });
  });

  it("should apply base input styles correctly", () => {
    const className = input.classnames.input();
    expect(className).toContain("input");
  });

  it("should apply input size variants correctly", () => {
    const sizes = ["large", "medium", "small"] as const;
    sizes.forEach((size) => {
      const className = input.classnames.input({ size });
      expect(className).toContain(size);
      expect(className).toMatchSnapshot(`input-size-${size}`);
    });
  });

  it("should apply leading styles correctly", () => {
    const className = input.classnames.leading();
    expect(className).toContain("leading");
  });

  it("should apply leading appearance variants correctly", () => {
    const appearances = ["success", "error"] as const;
    appearances.forEach((appearance) => {
      const className = input.classnames.leading({ appearance });
      expect(className).toContain(appearance);
      expect(className).toMatchSnapshot(`leading-appearance-${appearance}`);
    });
  });

  it("should apply leading position variants correctly", () => {
    const positions = ["start", "end"] as const;
    positions.forEach((position) => {
      const className = input.classnames.leading({ position });
      expect(className).toContain(position);
      expect(className).toMatchSnapshot(`leading-position-${position}`);
    });
  });
});
