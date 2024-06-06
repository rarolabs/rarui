import { ButtonHTMLAttributes } from "react";

export interface FooterProperties {
  setSelected?: () => void;
}

export type FooterProps = FooterProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
