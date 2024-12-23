import { HTMLAttributes, ReactNode } from "react";
import { DatepickerProps as DatepickerTyping } from "@rarui/typings";
import { Middleware, Placement } from "@floating-ui/react";
import { InputProps } from "../../Input/src";

export interface DatepickerProperties extends DatepickerTyping {
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

export type DatepickerProps = DatepickerProperties &
  HTMLAttributes<HTMLDivElement> & {
    input?: InputProps;
  };
