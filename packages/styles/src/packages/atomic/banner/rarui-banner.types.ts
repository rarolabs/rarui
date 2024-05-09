import { RecipeVariants } from "@vanilla-extract/recipes";
import { bannerStyles } from "./raui-banner.css";

export type BannerVariants = RecipeVariants<typeof bannerStyles.banner>;
