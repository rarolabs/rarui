import { skeletonSprinkle, styles } from "./rarui-skeleton.css";

export const skeleton = {
  classnames: { ...styles },
  ...skeletonSprinkle,
};

export type { SkeletonSprinkle } from "./rarui-skeleton.css";
