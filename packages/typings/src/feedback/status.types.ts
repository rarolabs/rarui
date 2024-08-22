import { StatusVariants } from "@rarui/styles";

interface StatusTyping {
  /**
   * Specifies whether to display a dot indicator alongside the status text. When true, a dot is shown to visually represent the status.
   * @default true
   */
  dot?: boolean;
}

export type StatusProps = StatusTyping & StatusVariants;
