<template>
  <button
    type="button"
    :class="[button.classnames.button({ size, variant, appearance })]"
  >
    {{ children }}
  </button>
</template>

<script lang="ts" setup>
import { button } from "@rarui/styles/src";

// interface Props extends Partial<HTMLButtonElement> {
interface ButtonProps {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: any;
  /**
   * Change the visual style of the button.
   * @default brand
   */
  appearance?:
    | "brand"
    | "brand-secondary"
    | "danger"
    | "success"
    | "warning"
    | "neutral"
    | "inverted";
  /**
   * Change the size of the button.
   * @default large
   */
  size?: "large" | "medium" | "small";
  /**
   * Change the variant of the button.
   * @default solid
   */
  variant?: "solid" | "outlined" | "text" | "tonal";
  // /**
  //  * Disables the button, disallowing user interaction.
  //  * @default false
  //  */
  // disabled?: boolean;
}

const { appearance, ...props } = withDefaults(defineProps<ButtonProps>(), {
  appearance: "brand",
  size: "large",
  variant: "solid",
});

// console.log(buttonProps);
// console.log(buttonProps);
</script>
