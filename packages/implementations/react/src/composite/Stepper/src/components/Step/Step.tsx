import React from "react";
import { stepper } from "@rarui/styles";
import { Box } from "@rarui-react/box";
import { Text } from "@rarui-react/text";

import { StepperStepProps } from "./step.types";
import { useStepper } from "../../hooks";

const StepperStep: React.FC<StepperStepProps> = ({
  className: _className,
  style: _style,
  active = false,
  done = false,
  children,
  title,
  description,
  ...props
}) => {
  const { direction = "horizontal" } = useStepper();

  return (
    <li className={stepper.classNames.step({ direction })} {...props}>
      <div
        className={stepper.classNames.circle({ active, done })}
        data-testid="step-circle"
      >
        {children}
      </div>
      {(title || description) && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems={direction === "horizontal" ? "center" : "flex-start"}
        >
          {title && (
            <Text
              fontSize="$xs"
              fontWeight="$medium"
              color={active || done ? "$primary" : "$secondary"}
            >
              {title}
            </Text>
          )}
          {description && (
            <Text
              fontSize="$xxs"
              color={active || done ? "$primary" : "$secondary"}
            >
              {description}
            </Text>
          )}
        </Box>
      )}
    </li>
  );
};
export { StepperStep };
