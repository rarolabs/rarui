<template>
  <a :class="link.classnames.link({ appearance, size })" v-bind="props">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { link } from "@rarui/styles/src";
import { LinkHTMLAttributes } from "vue";

export interface LinkProps extends /* @vue-ignore */ LinkHTMLAttributes {
  /**
   * Change the visual style of the link.
   * @default default
   */
  appearance?: "default" | "neutral" | "inverted";
  /**
   * Change the size of the link.
   * @default large
   */
  size?: "large" | "medium" | "small";
}

const { ...props } = withDefaults(defineProps<LinkProps>(), {
  appearance: "default",
  size: "large",
});
</script>
