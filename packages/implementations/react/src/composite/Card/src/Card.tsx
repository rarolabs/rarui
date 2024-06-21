import React from "react";
import { card } from "@rarui/styles";
import { CardComponents, CardProps } from "./card.types";
import { CardBody, CardHeader } from "./components";

const Card: React.FC<CardProps> & CardComponents = ({
  className: _className,
  style: _style,
  padding = "base",
  backgroundColor = "$primary",
  children,
  ...props
}: CardProps) => {
  const { className, style } = card.sprinkle({ ...props, backgroundColor });
  return (
    <div
      className={[card.classnames.card({ padding }), className].join(" ")}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Body = CardBody;
Card.Header = CardHeader;
Card.displayName = "Card";
Card.Body.displayName = "Card.Body";
Card.Header.displayName = "Card.Header";

export { Card };
