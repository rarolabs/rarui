import {
  Component,
  Prop,
  Element,
  State,
  Event,
  EventEmitter,
  Host,
  h,
} from "@stencil/core";
import { tabs, TabsVariants } from "@rarui/styles";

@Component({
  tag: "rarui-tabs",
  scoped: true,
})
export class RaruiTabs {
  @Element() el: HTMLUListElement;
  @Prop() position: TabsVariants["position"] = "left";
  @Prop() underlined: TabsVariants["underlined"];
  @Prop() full: TabsVariants["full"];
  @Prop() defaultTab: number = 0;

  @State() selected: number = this.defaultTab;
  @Event() selectedTab: EventEmitter<number>;

  private _tabsChildrens: any[];

  componentWillLoad() {
    this._tabsChildrens = Array.from(
      this.el.querySelectorAll("rarui-tabs-item"),
    );
    this._tabsChildrens.forEach((child) => child.remove());
  }

  render() {
    return (
      <Host>
        <ul
          class={tabs.classnames.ul({
            position: this.position,
            underlined: this.underlined,
          })}
        >
          {this._tabsChildrens.map((tabChildren, index) => (
            <li class={tabs.classnames.li({ full: this.full })}>
              <button
                type="button"
                class={tabs.classnames.button({
                  underlined: this.underlined,
                  selected: this.selected === index,
                })}
                onClick={() => {
                  this.selected = index;
                  this.selectedTab.emit(index);
                }}
              >
                {tabChildren.label}
              </button>
            </li>
          ))}
        </ul>
        <div innerHTML={this._tabsChildrens[this.selected].outerHTML} />
      </Host>
    );
  }
}
