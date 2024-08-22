import { TextareaHTMLAttributes } from "react";
import { TextareaProps as TextareaTyping } from "@rarui/typings";

type TextareaProperties = TextareaTyping;
export type TextareaProps = TextareaProperties &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
