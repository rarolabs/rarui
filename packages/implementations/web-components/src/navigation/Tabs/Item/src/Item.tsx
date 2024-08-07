import { Component, Prop, Element, h } from "@stencil/core";

@Component({
  tag: "rarui-tabs-item",
  scoped: true,
})
export class RaruiTabs {
  @Element() el: HTMLUListElement;
  @Prop() label: string;

  render() {
    return (
      <rarui-box color="$primary">
        <slot></slot>
      </rarui-box>
    );
  }
}
