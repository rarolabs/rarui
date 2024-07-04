import { TextareaHTMLAttributes } from "react";
import { TextareaVariants } from "@rarui/styles";

export interface TextareaProperties extends TextareaVariants {
  /**
   * Number of lines to be rendered for the user to input text
   * @default 2
   */
  lines?: number;
}

export type TextareaProps = TextareaProperties &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
