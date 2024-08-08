import { HTMLAttributes, ReactNode } from "react";
import { InputProps } from "@rarui-react/input";
import { DatepickerProperties } from "@rarui/typings";
import { Middleware, Placement } from "@floating-ui/react";

export interface DatepickerTyping extends DatepickerProperties {
  /**
   * Represents all of the things React can render.
   * While ReactElement only represents JSX, ReactNode represents everything that can be rendered, allowing for a custom input component.
   */
  customInput?: ReactNode;
  /**
   * Specifies the placement of the datepicker popper.
   * This can be useful for positioning the datepicker relative to its input field.
   */
  popperPlacement?: Placement;
  /**
   * Specifies the modifiers for the datepicker popper.
   * This can be useful for customizing the behavior and appearance of the datepicker popper.
   */
  popperModifiers?: Middleware[];
}

export type DatepickerProps = DatepickerTyping &
  HTMLAttributes<HTMLDivElement> & {
    input?: InputProps;
  };
