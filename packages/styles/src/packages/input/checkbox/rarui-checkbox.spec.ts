import { checkbox } from ".";

describe("Checkbox Styles", () => {
  it("should apply base styles correctly", () => {
    const className = checkbox.classnames.checkbox({ size: "medium" });
    expect(className).toContain("checkbox");
  });

  it("should apply size variants correctly", () => {
    const sizes = ["medium", "large"] as const;
    sizes.forEach((size) => {
      const className = checkbox.classnames.checkbox({ size });
      expect(className).toContain(size);
      expect(className).toMatchSnapshot(`size-${size}`);
    });
  });

  it("should apply error variant styles correctly", () => {
    const className = checkbox.classnames.checkbox({ error: true });
    expect(className).toContain("error");
    expect(className).toMatchSnapshot("error");
  });

  it("should apply indeterminate state styles correctly", () => {
    const className = checkbox.classnames.checkbox({ indeterminate: true });
    expect(className).toContain("indeterminate");
    expect(className).toMatchSnapshot("indeterminate");
  });

  it("should apply pseudo-class styles correctly", () => {
    const className = checkbox.classnames.checkbox({ size: "medium" });
    expect(className).toMatchSnapshot("pseudo-classes");
  });

  it("should apply label styles correctly", () => {
    const className = checkbox.classnames.label({ error: false });
    expect(className).toContain("label");
    expect(className).toMatchSnapshot("label");
  });

  it("should apply overlay styles correctly on hover", () => {
    const className = checkbox.classnames.overlay;
    expect(className).toMatchSnapshot("overlay");
  });

  it("should apply container styles correctly", () => {
    const className = checkbox.classnames.container;
    expect(className).toMatchSnapshot("container");
  });
});
