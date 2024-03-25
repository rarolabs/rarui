<template>
  <button
    :class="button.classnames.button({ size, variant, appearance })"
    :bind="$props"
  >
    {{ children }}
    <span :class="button.classnames.overlay" />
  </button>
</template>

<script lang="ts" setup>
import { button } from "@rarui/styles/src";
import type { ButtonHTMLAttributes, Component } from "vue";

interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  /**
   * The content of the button.
   * @TJS-type Component | string
   */
  children: Component | string;
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
  /**
   * Disables the button, disallowing user interaction.
   * @default false
   */
  disabled?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  appearance: "brand",
  size: "large",
  variant: "solid",
});
</script>
