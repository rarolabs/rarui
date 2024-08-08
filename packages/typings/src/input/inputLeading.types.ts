import { InputProperties } from "./input.types";

interface InputLeadingTyping {
  /**
   * Sent Leading display position.
   */
  position: "start" | "end";
}

export type InputLeadingProperties = InputLeadingTyping &
  Pick<InputProperties, "divider" | "appearance" | "size">;
