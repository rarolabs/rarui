import React from "react";
import { avatar } from "@rarui/styles";
import { Badge } from "@rarui-react/badge";
import { AvatarProps } from "./avatar.types";

const Avatar: React.FC<AvatarProps> = ({
  className: _className,
  style: _style,
  children,
  size = "medium",
  badge,
  ...props
}) => (
  <div className={avatar.classnames.container}>
    <div {...props} className={avatar.classnames.avatar({ size })}>
      {children}
    </div>
    {badge && (
      <div className={avatar.classnames.badge({ size })}>
        <Badge
          {...badge}
          size={size === "small" || size === "medium" ? "dot" : "small"}
          data-testid="avatar-badge"
        >
          {badge.children}
        </Badge>
      </div>
    )}
  </div>
);

Avatar.displayName = "Avatar";

export { Avatar };
