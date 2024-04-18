<template>
  <div :class="badge.classnames.badge({ appearance, size, variant })">
    <slot v-if="props.size != 'dot'" />
  </div>
</template>

<script lang="ts" setup>
import { badge } from "@rarui/styles";
import { BadgeProps } from "./badge.types";

const props = withDefaults(defineProps<BadgeProps>(), {
  appearance: "brand",
  size: "medium",
  variant: "solid",
});
</script>
