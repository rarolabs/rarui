import { TextareaHTMLAttributes } from "react";
import { TextareaProperties } from "@rarui/typings";

export type TextareaProps = TextareaProperties &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
