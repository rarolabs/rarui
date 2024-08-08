import { LabelVariants } from "@rarui/styles";

interface LabelTyping {
  /**
   * The for attribute specifies which form element a label is bound to.
   */
  htmlFor?: string;
}

export type LabelProperties = LabelTyping & LabelVariants;
