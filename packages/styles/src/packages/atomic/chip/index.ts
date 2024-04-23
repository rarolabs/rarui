import { styles, sprinkle } from "./rarui-chip.css";

export const chip = {
  ...sprinkle,
  classnames: { ...styles },
};

export type { ChipVariants, ChipSprinkle } from "./rarui-chip.types";
