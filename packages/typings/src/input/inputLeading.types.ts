import { InputProps } from "./input.types";

interface InputLeadingTyping {
  /**
   * Sent Leading display position.
   */
  position: "start" | "end";
}

export type InputLeadingProps = InputLeadingTyping &
  Pick<InputProps, "divider" | "appearance" | "size">;
