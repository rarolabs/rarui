import { HTMLAttributes } from "react";
import { SkeletonProps as SkeletonTyping } from "@rarui/typings";

type SkeletonProperties = SkeletonTyping;
export type SkeletonProps = SkeletonProperties & HTMLAttributes<HTMLDivElement>;
