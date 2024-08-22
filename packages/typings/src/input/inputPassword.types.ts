import { InputProperties } from "../input/input.types";

export type InputPasswordProperties = Pick<
  InputProperties,
  "divider" | "appearance" | "size" | "border"
>;
