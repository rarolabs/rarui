import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "rarui-button",
  styleUrl: "button.css",
  shadow: true,
})
export class RaruiButton {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
