<template>
  <button
    :class="button.classnames.button({ size, appearance, variant })"
    :disabled="disabled"
  >
    <slot />
    <span :class="button.classnames.overlay" />
  </button>
</template>

<script lang="ts" setup>
import { button } from "@rarui/styles";
import { ButtonProps } from "./button.types";

withDefaults(defineProps<ButtonProps>(), {
  appearance: "brand",
  size: "large",
  variant: "solid",
  disabled: true,
});
</script>
