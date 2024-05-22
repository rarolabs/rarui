type DirectionOptions = "horizontal" | "vertical";

export interface ContextProps {
  direction: DirectionOptions;
  setDirection: (direction: DirectionOptions) => void;
}
