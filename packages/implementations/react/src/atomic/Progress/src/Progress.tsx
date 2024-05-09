import React from "react";
import { progressBar } from "@rarui/styles";
import { ProgressProps } from "./progress.types";

const Progress: React.FC<ProgressProps> = ({
  className: _className,
  style: _style,
  percentage,
  ...props
}: ProgressProps) => {
  const { className, style, otherProps } = progressBar.sprinkle({
    width: `${percentage}%`
  });
  const completed: boolean = percentage >= 100;
  return (
    <div {...props} className={progressBar.classnames.progress()}>
      <div
        className={[
          progressBar.classnames.progressBar({ completed }),
          className
        ].join(" ")}
        style={style}
        {...otherProps}
      />
    </div>
  );
};

export { Progress };
