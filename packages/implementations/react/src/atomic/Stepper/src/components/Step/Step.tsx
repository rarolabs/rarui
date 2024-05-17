import React from "react";
import { stepper } from "@rarui/styles";
import { StepProps } from "./step.types";
import { useStepper } from "../../contexts/StepperContext";

const Step: React.FC<StepProps> = ({
  className: _className,
  style: _style,
  children,
  active = false,
  done = false,
  title,
  description,
  ...props
}) => {
  let appearance: "active" | "done" | "disabled" = "disabled";
  if (active) appearance = "active";

  if (done) appearance = "done";

  const { direction } = useStepper();
  const dataTestId = (props as { "data-testid": string })?.["data-testid"];
  return (
    <div className={stepper.classNames.step({ direction })}>
      <div className={stepper.classNames.stepContainer({ direction })}>
        <div
          data-testid={dataTestId ? `${dataTestId}-circle` : ""}
          className={stepper.classNames.circle({
            appearance
          })}
        >
          {children}
        </div>
      </div>
      <div className={stepper.classNames.textContainer({ direction })}>
        {title && (
          <div className={stepper.classNames.title({ appearance })}>
            {title}
          </div>
        )}
        {description && (
          <div className={stepper.classNames.description}>{description}</div>
        )}
      </div>
    </div>
  );
};
export { Step };
