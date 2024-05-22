import { sprinkle, styles } from "./rarui-progress.css";

export const progress = {
  classnames: {
    ...styles,
  },
  sprinkle,
};

export type { ProgressVariants } from "./rarui-progress.types";
export type { ProgressCircleVariants } from "./rarui-progress.types";
