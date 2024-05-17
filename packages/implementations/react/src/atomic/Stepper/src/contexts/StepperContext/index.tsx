import React, { createContext, useContext, useMemo } from "react";

type DirectionOptions = "horizontal" | "vertical";

interface StepperContextProps {
  direction: "vertical" | "horizontal";
}

export const StepperContext = createContext<StepperContextProps>(
  {} as StepperContextProps
);

interface StepperProviderProps {
  children: React.ReactNode;
}

export const StepperContextProvider = ({ children }: StepperProviderProps) => {
  const direction: DirectionOptions = "horizontal";
  return (
    <StepperContext.Provider
      value={useMemo(
        () => ({
          direction
        }),
        [direction]
      )}
    >
      {children}
    </StepperContext.Provider>
  );
};

export const useStepper = (direction?: DirectionOptions) => {
  const context = useContext(StepperContext);
  if (direction) context.direction = direction;
  if (!context) {
    throw new Error(
      "This hook needs to be called within the StepperContextProvider"
    );
  }

  return { ...context };
};
