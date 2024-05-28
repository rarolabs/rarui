import { RecipeVariants } from "@vanilla-extract/recipes";
import { bannerStyles } from "./rarui-banner.css";

export type BannerVariants = RecipeVariants<typeof bannerStyles.banner>;
