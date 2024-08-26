import { avatar } from ".";

describe("Avatar Styles", () => {
  it("container class should have the correct styles", () => {
    expect(avatar.classnames.container).toMatchSnapshot();
  });

  describe("avatar recipe", () => {
    it("should apply base styles", () => {
      const className = avatar.classnames.avatar();
      expect(className).toMatchSnapshot();
    });

    it("should apply correct styles for small size", () => {
      const className = avatar.classnames.avatar({ size: "small" });
      expect(className).toMatchSnapshot();
    });

    it("should apply correct styles for medium size", () => {
      const className = avatar.classnames.avatar({ size: "medium" });
      expect(className).toMatchSnapshot();
    });

    it("should apply correct styles for large size", () => {
      const className = avatar.classnames.avatar({ size: "large" });
      expect(className).toMatchSnapshot();
    });

    it("should apply correct styles for xLarge size", () => {
      const className = avatar.classnames.avatar({ size: "xLarge" });
      expect(className).toMatchSnapshot();
    });
  });

  describe("badge recipe", () => {
    it("should apply correct styles for small size", () => {
      const className = avatar.classnames.badge({ size: "small" });
      expect(className).toMatchSnapshot();
    });

    it("should apply correct styles for medium size", () => {
      const className = avatar.classnames.badge({ size: "medium" });
      expect(className).toMatchSnapshot();
    });

    it("should apply correct styles for large size", () => {
      const className = avatar.classnames.badge({ size: "large" });
      expect(className).toMatchSnapshot();
    });

    it("should apply correct styles for xLarge size", () => {
      const className = avatar.classnames.badge({ size: "xLarge" });
      expect(className).toMatchSnapshot();
    });
  });
});
