import { DropdownVariants } from "@rarui/styles";

interface DropdownItemTyping {
  /**
   * The name of the dropdown item. This is typically the text that is displayed for the item.
   */
  name?: string;
}

export type DropdownItemProps = DropdownItemTyping &
  Pick<DropdownVariants, "selected">;
