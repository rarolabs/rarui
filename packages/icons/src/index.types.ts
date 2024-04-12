import { SVGProps } from "react";

export type Sizes = "small" | "medium" | "large";
export interface IconProperties {
  size?: Sizes | number;
}

export type IconProps = IconProperties & SVGProps<SVGSVGElement>;
