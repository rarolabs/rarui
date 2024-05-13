import React from "react";
import { progress } from "@rarui/styles";
import { CircleProps } from "./circle.types";

const circunference = 67 * Math.PI * 2;

const Circle: React.FC<CircleProps> = ({
  className: _className,
  style: _style,
  percentage,
  size = "large",
  ...props
}) => {
  const dataTestid = (props as { "data-testid": string })?.["data-testid"];

  const { className, style, otherProps } = progress.circleSprinkle({
    stroke: percentage >= 100 ? "$success" : "$info"
  });

  return (
    <div className={progress.classnames.container({ size })} {...props}>
      <svg className={progress.classnames.circle()} viewBox="0 0 140 140">
        <circle
          className={progress.classnames.circleBg()}
          cx="70"
          cy="70"
          strokeWidth={8}
          r="66"
          fill="none"
          strokeLinecap="round"
        />
        <circle
          className={[progress.classnames.circleFg(), className].join(" ")}
          style={style}
          {...otherProps}
          cx="70"
          cy="70"
          strokeWidth={8}
          r="66"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${(percentage * circunference) / 100} ${circunference - percentage}`}
          data-testid={dataTestid ? `${dataTestid}-bar` : ""}
        />
        <text x="70" y="73">
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export { Circle };
