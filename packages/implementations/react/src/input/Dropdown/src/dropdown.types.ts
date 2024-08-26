import { HTMLAttributes, ReactNode } from "react";
import { Placement } from "@floating-ui/react";
import { DropdownProps as DropdownTyping } from "@rarui/typings";
import { DropdownItem } from "./components";

export interface DropdownComponents {
  Item: typeof DropdownItem;
}

interface DropdownProperties extends DropdownTyping {
  /**
   * An HTML element, or a function that returns one. It's used to set the position of the dropdown.
   * @TJS-type React.ReactNode | ((data: { open: boolean, setVisibility: (visibility: boolean) => void }) => React.ReactNode);
   */
  children:
    | ReactNode
    | ((data: {
        open: boolean;
        setVisibility: (visibility: boolean) => void;
      }) => ReactNode);
  /**
   * The content of the dropdown.
   * @TJS-type React.ReactNode
   */
  content: ReactNode;
  /**
   * Position of the dropdown.
   * @default bottom
   */
  position?: Placement;
}

export type DropdownProps = DropdownProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "content">;
