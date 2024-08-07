import { Component, Prop, Element, h } from "@stencil/core";
import { title, CaptureCssProperties } from "@rarui/styles";

@Component({
  tag: "rarui-title",
})
export class RaruiTitle {
  private props: { [key: string]: any } = {};

  @Element() el: HTMLUListElement;
  @Prop() lineclamp: string;
  @Prop() as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h1";
  @CaptureCssProperties
  render() {
    const As = this.as;
    const { className, style, otherProps } = title.sprinkle({
      ...this.props,
      fontWeight: this.props.fontWeight ?? "$bold",
      textAlign: this.props.textAlign ?? "left",
    });

    return (
      <As
        class={[
          className,
          title.classnames.title({
            as: this.as,
          }),
        ].join(" ")}
        style={{ ...style, WebkitLineClamp: this?.lineclamp }}
        {...otherProps}
      >
        <slot></slot>
      </As>
    );
  }
}
