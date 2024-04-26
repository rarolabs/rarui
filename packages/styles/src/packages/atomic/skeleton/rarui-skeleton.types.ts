import {
  Conditions,
  AddDollar,
  StandardLonghandProperties,
} from "../../../index.types";
import { borderRadiusProperties } from "../../../properties";

type SkeletonDynamicProperties = Pick<
  StandardLonghandProperties,
  "width" | "height" | "maxWidth" | "maxHeight" | "minWidth" | "minHeight"
>;

export interface SkeletonSprinkle extends SkeletonDynamicProperties {
  /**
   * The borderRadius property sets the skeleton.
   */
  borderRadius?:
    | AddDollar<keyof typeof borderRadiusProperties | string>
    | Conditions<AddDollar<keyof typeof borderRadiusProperties>>
    | string
    | Conditions<string>;
}
