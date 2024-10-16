import React from "react";
import { progress } from "@rarui/styles";
import { ProgressCircleProps } from "./circle.types";
import { circunference } from "./circle.definitions";

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  className: _className,
  style: _style,
  percentage,
  color = "$info",
  size = "large",
  ...props
}) => {
  const completed = parseFloat(percentage.toFixed(1)) >= 100;
  const dataTestid = (props as { "data-testid": string })?.["data-testid"];

  const { className, style } = progress.sprinkle({
    stroke: completed ? "$success" : color,
  });

  return (
    <div className={progress.classnames.circle({ size })} {...props}>
      <svg viewBox="0 0 140 140">
        <circle
          className={progress.classnames.circleBase}
          cx="70"
          cy="70"
          strokeWidth={8}
          r="66"
          fill="none"
          strokeLinecap="round"
        />
        <circle
          className={[progress.classnames.circleProgress, className].join(" ")}
          style={style}
          cx="70"
          cy="70"
          strokeWidth={percentage === 0 ? 0 : 8}
          r="66"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${(percentage * circunference) / 100} ${circunference - percentage}`}
          data-testid={dataTestid ? `${dataTestid}-bar` : ""}
        />
        <text className={progress.classnames.circleText} x="70" y="73">
          {completed ? "100" : parseFloat(percentage.toFixed(1))}%
        </text>
      </svg>
    </div>
  );
};

export { ProgressCircle };
