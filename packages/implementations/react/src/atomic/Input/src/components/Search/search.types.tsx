import { InputHTMLAttributes } from "react";
import { InputProperties } from "../../input.types";

export interface Search {}

export type SearchProperties = Search &
  Pick<InputProperties, "divider" | "appearance" | "size">;

export type _SearchProps = SearchProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
