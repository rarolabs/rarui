import { InputHTMLAttributes } from "react";
import { InputProperties } from "../../input.types";

export interface SearchTyping {}

export type SearchProperties = SearchTyping &
  Pick<InputProperties, "divider" | "appearance" | "size">;

export type _SearchProps = SearchProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
