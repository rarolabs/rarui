import { chip } from ".";

describe("Chip Styles", () => {
  it("should apply base styles correctly", () => {
    const className = chip.classnames.chip();
    expect(className).toContain("chip");
  });

  it("should apply size variants correctly", () => {
    const sizes = ["medium", "small"] as const;
    sizes.forEach((size) => {
      const className = chip.classnames.chip({ size });
      expect(className).toContain(size);
      expect(className).toMatchSnapshot(`size-${size}`);
    });
  });

  it("should apply pill variant styles correctly", () => {
    const className = chip.classnames.chip({ pill: true });
    expect(className).toContain("pill");
    expect(className).toMatchSnapshot("pill");
  });

  it("should apply selected variant styles correctly", () => {
    const className = chip.classnames.chip({ selected: true });
    expect(className).toContain("selected");
    expect(className).toMatchSnapshot("selected");
  });

  it("should apply textOverflow variant styles correctly", () => {
    const className = chip.classnames.chip({ textOverflow: true });
    expect(className).toContain("textOverflow");
    expect(className).toMatchSnapshot("textOverflow");
  });

  it("should apply content styles correctly", () => {
    const className = chip.classnames.content({ textOverflow: true });
    expect(className).toContain("content");
    expect(className).toMatchSnapshot("content");
  });

  it("should apply close button styles correctly", () => {
    const className = chip.classnames.close;
    expect(className).toMatchSnapshot("close");
  });

  it("should apply overlay styles correctly", () => {
    const className = chip.classnames.overlay;
    expect(className).toMatchSnapshot("overlay");
  });
});
