import { Component, Prop, Element, h } from "@stencil/core";
import { box, CaptureCssProperties } from "@rarui/styles";

@Component({
  tag: "rarui-box",
})
export class RaruiBox {
  private props: { [key: string]: any } = {};

  @Element() el: HTMLElement;
  @Prop() as: string = "div";
  @CaptureCssProperties
  render() {
    const As = this.as;
    const { className, style, otherProps } = box.sprinkle(this.props);

    return (
      <As class={className} style={style} {...otherProps}>
        <slot></slot>
      </As>
    );
  }
}
