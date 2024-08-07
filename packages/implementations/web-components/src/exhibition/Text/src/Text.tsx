import { Component, Prop, Element, h } from "@stencil/core";
import { text, CaptureCssProperties } from "@rarui/styles";

@Component({
  tag: "rarui-text",
})
export class RaruiText {
  private props: { [key: string]: any } = {};

  @Element() el: HTMLUListElement;
  @Prop() lineClamp: string;
  @Prop() as: "p" | "span" = "p";
  @CaptureCssProperties
  render() {
    const As = this.as;
    const { className, style, otherProps } = text.sprinkle({
      ...this.props,
      fontWeight: this.props.fontWeight ?? "$regular",
    });

    return (
      <As
        class={[
          className,
          text.classnames.text({
            lineClamp: !!this?.lineClamp,
          }),
        ].join(" ")}
        style={{ ...style, WebkitLineClamp: this?.lineClamp }}
        {...otherProps}
      >
        <slot></slot>
      </As>
    );
  }
}
