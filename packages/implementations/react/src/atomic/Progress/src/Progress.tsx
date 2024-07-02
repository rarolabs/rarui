import React from "react";
import { progress } from "@rarui/styles";
import { ProgressComponents, ProgressProps } from "./progress.types";
import Circle from "./components/Circle";

const Progress: React.FC<ProgressProps> & ProgressComponents = ({
  className: _className,
  style: _style,
  percentage,
  backgroundColor = "$info",
  ...props
}: ProgressProps) => {
  const dataTestid = (props as { "data-testid": string })?.["data-testid"];
  const completed = percentage >= 100;

  const { className, style, otherProps } = progress.sprinkle({
    width: `${percentage}%`,
    backgroundColor: completed ? "$success" : backgroundColor,
  });

  return (
    <div {...props} className={progress.classnames.progress}>
      <div
        className={[progress.classnames.progressBar, className].join(" ")}
        style={style}
        {...otherProps}
        data-testid={dataTestid ? `${dataTestid}-bar` : ""}
      />
    </div>
  );
};

Progress.Circle = Circle;
Progress.displayName = "Progress";
Progress.Circle.displayName = "Progress.Circle";

export { Progress };
