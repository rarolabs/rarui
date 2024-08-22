import { TextareaVariants } from "@rarui/styles";

export interface TextareaProps extends TextareaVariants {
  /**
   * Number of lines to be rendered for the user to input text
   * @default 2
   */
  lines?: number;
}
