import { Component, Prop, Element, h } from "@stencil/core";
import { button, ButtonVariants } from "@rarui/styles";

@Component({
  tag: "rarui-button",
  scoped: true,
})
export class RaruiButton {
  @Element() el: HTMLButtonElement;

  @Prop() appearance: ButtonVariants["appearance"] = "brand";
  @Prop() variant: ButtonVariants["variant"] = "solid";
  @Prop() size: ButtonVariants["size"] = "large";
  @Prop() full: ButtonVariants["full"];
  @Prop() disabled: HTMLButtonElement["disabled"];
  @Prop() type: HTMLButtonElement["type"];
  @Prop() href: HTMLAnchorElement["href"];
  @Prop() target: HTMLAnchorElement["target"];
  @Prop() as: string = "button";

  render() {
    const As = this.as;
    return (
      <As
        class={button.classnames.button({
          appearance: this.appearance,
          variant: this.variant,
          size: this.size,
          full: this.full,
        })}
        disabled={this.disabled}
        type={this.type}
        href={this.href}
        target={this.target}
      >
        <slot></slot>
      </As>
    );
  }
}
