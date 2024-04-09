<template>
  <a :class="link.classnames.link({ appearance, size })">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { link } from "@rarui/styles";
import { LinkProps } from "./link.types";

withDefaults(defineProps<LinkProps>(), {
  appearance: "default",
  size: "large",
});
</script>
