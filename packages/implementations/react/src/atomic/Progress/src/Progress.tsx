import React from "react";
import { progress } from "@rarui/styles";
import { ProgressProps } from "./progress.types";

const Progress: React.FC<ProgressProps> = ({
  className: _className,
  style: _style,
  percentage,
  ...props
}: ProgressProps) => {
  const dataTestid = (props as { "data-testid": string })?.["data-testid"];

  const { className, style, otherProps } = progress.sprinkle({
    width: `${percentage}%`
  });
  const completed: boolean = percentage >= 100;
  return (
    <div {...props} className={progress.classnames.progress()}>
      <div
        className={[
          progress.classnames.progressBar({ completed }),
          className
        ].join(" ")}
        style={style}
        {...otherProps}
        data-testid={dataTestid ? `${dataTestid}-bar` : ""}
      />
    </div>
  );
};

export { Progress };
