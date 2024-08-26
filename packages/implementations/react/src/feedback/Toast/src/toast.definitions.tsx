import {
  InfoCircleFilledIcon,
  CheckCircleFilledIcon,
  DangerFilledIcon,
  BookmarkFilledIcon,
  WarningFilledIcon,
} from "@rarui/icons";

export const getSourceIcon = {
  info: InfoCircleFilledIcon,
  success: CheckCircleFilledIcon,
  warning: WarningFilledIcon,
  error: DangerFilledIcon,
  neutral: BookmarkFilledIcon,
  invert: BookmarkFilledIcon,
};

export const getAppearanceIconButton = {
  solid: "inverted",
  ghost: "neutral",
  tonal: "neutral",
} as { [key: string]: "inverted" | "neutral" };

export const getColorIcon = {
  solid: {
    info: "$on-info",
    success: "$on-success",
    warning: "$on-warning",
    error: "$on-error",
    neutral: "$invert",
    invert: "$primary",
  },
  ghost: {
    info: "$info",
    success: "$success",
    warning: "$warning-alt",
    error: "$error",
    neutral: "$invert",
    invert: "$primary",
  },
  tonal: {
    info: "$info",
    success: "$success",
    warning: "$warning-alt",
    error: "$error",
    neutral: "$invert",
    invert: "$primary",
  },
} as const;
