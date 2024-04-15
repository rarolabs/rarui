import { textSprinkle, styles } from "./rarui-text.css";

export const text = {
  classnames: { ...styles },
  ...textSprinkle,
};

export type { TextSprinkle } from "./rarui-text.css";
