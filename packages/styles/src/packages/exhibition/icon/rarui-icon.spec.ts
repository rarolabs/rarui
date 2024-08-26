import { icon } from ".";
import { colorProperties } from "../../../properties";

describe("Icon Styles", () => {
  it("should apply base styles correctly", () => {
    const className = icon.classnames.icon();
    expect(className).toContain("icon");
  });

  it("should apply color properties correctly", () => {
    const colors = Object.keys(colorProperties);
    colors.forEach((color) => {
      const { className } = icon.sprinkle({ color: `$${color}` as any });
      expect(className).toContain(color);
      expect(className).toMatchSnapshot(`color-${color}`);
    });
  });

  it("should apply cursor property correctly", () => {
    const cursors = ["pointer", "default"];
    cursors.forEach((cursor) => {
      const { className, style } = icon.sprinkle({ cursor });
      const regex = new RegExp(`--cursor-xs__\\w{0,9}:${cursor}`);
      expect(`${style}`).toMatch(regex);
      expect(className).toMatchSnapshot(`cursor-${cursor}`);
    });
  });

  it("should apply responsive styles correctly", () => {
    const breakpoints = ["xs", "md", "lg", "xl"];
    breakpoints.forEach((breakpoint) => {
      const { className } = icon.sprinkle({
        color: "$primary",
      });
      expect(className).toContain("color-primary");
      expect(className).toMatchSnapshot(`responsive-${breakpoint}`);
    });
  });
});
