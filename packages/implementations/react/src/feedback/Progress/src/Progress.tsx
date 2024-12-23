import React from "react";
import { progress } from "@rarui/styles";
import { ProgressComponents, ProgressProps } from "./progress.types";
import Circle from "./components/Circle";

const Progress: React.FC<ProgressProps> & ProgressComponents = ({
  className: _className,
  style: _style,
  percentage,
  color = "$info",
  ...props
}: ProgressProps) => {
  const dataTestid = (props as { "data-testid": string })?.["data-testid"];
  const completed = percentage >= 100;

  const { className, style } = progress.sprinkle({
    width: `${percentage}%`,
    backgroundColor: completed ? "$success" : color,
  });

  return (
    <div {...props} className={progress.classnames.progress}>
      <div
        className={[progress.classnames.bar, className].join(" ")}
        style={style}
        data-testid={dataTestid ? `${dataTestid}-bar` : ""}
      />
    </div>
  );
};

Progress.Circle = Circle;
Progress.displayName = "Progress";
Progress.Circle.displayName = "Progress.Circle";

export { Progress };
