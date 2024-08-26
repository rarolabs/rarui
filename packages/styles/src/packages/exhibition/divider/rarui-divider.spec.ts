import { divider } from ".";
import { borderColorProperties } from "../../../properties";

describe("Divider Styles", () => {
  it("should apply base styles correctly", () => {
    const className = divider.classnames.divider();
    expect(className).toContain("divider");
  });

  it("should apply border style variants correctly", () => {
    const borderStyles = ["solid", "dashed"];
    borderStyles.forEach((borderStyle) => {
      const { className } = divider.sprinkle({ borderStyle });
      expect(className).toContain(borderStyle);
      expect(className).toMatchSnapshot(`borderStyle-${borderStyle}`);
    });
  });

  it("should apply border width variants correctly", () => {
    const borderWidths = ["1", "2"] as const;
    borderWidths.forEach((borderWidth) => {
      const { className } = divider.sprinkle({
        borderTopWidth: `$${borderWidth}`,
        borderLeftWidth: `$${borderWidth}`,
      });
      expect(className).toContain(borderWidth);
      expect(className).toMatchSnapshot(`borderWidth-${borderWidth}`);
    });
  });

  it("should apply border color correctly", () => {
    const borderColors = Object.keys(borderColorProperties);
    borderColors.forEach((borderColor) => {
      const { className } = divider.sprinkle({
        borderColor: `$${borderColor}` as any,
      });

      expect(className).toContain(borderColor);
      expect(className).toMatchSnapshot(`borderColor-${borderColor}`);
    });
  });

  it("should apply dynamic width and height properties correctly", () => {
    const dimensions = [
      { width: "100px", height: "1px" },
      { width: "50%", height: "2px" },
    ];
    dimensions.forEach(({ width, height }) => {
      const { className, style } = divider.sprinkle({ width, height });
      const regex = new RegExp(
        `--width-xs__\\w{0,9}:${width};--height-xs__\\w{0,9}:${height}`,
      );
      expect(`${style}`).toMatch(regex);
      expect(className).toMatchSnapshot(`dimension-${width}-${height}`);
    });
  });

  it("should apply responsive styles correctly", () => {
    const breakpoints = ["xs", "md", "lg", "xl"];
    breakpoints.forEach((breakpoint) => {
      const { className } = divider.sprinkle({
        borderColor: "$primary",
      });
      expect(className).toContain("borderColor-primary");
      expect(className).toMatchSnapshot(`responsive-${breakpoint}`);
    });
  });
});
