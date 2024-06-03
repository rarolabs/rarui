type DirectionOptions = "horizontal" | "vertical";

export interface ContextProps {
  /**
   * The direction of the steps
   */
  direction: DirectionOptions;
  /**
   * Sets the direction of the steps
   */
  setDirection: (direction: DirectionOptions) => void;
}
