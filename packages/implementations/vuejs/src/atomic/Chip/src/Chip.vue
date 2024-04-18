<template>
  <component
    :is="closeable || disabled ? 'button' : 'div'"
    :class="chip.classnames.chip({ pill, selected })"
    :disabled="disabled"
  >
    <slot v-if="avatar" name="avatar">
      <!-- fazer avatar -->
    </slot>
    <slot />
    <slot v-if="closeable" name="closeable">
      <!-- fazer icone -->
    </slot>
    <span :class="chip.classnames.overlay" />
  </component>
</template>

<script lang="ts" setup>
import { chip } from "@rarui/styles";
import { ChipProps } from "./chip.types";

defineOptions({
  inheritAttrs: false,
});

withDefaults(defineProps<ChipProps>(), {
  pill: false,
  disabled: false,
  closeable: false,
  avatar: "",
});
</script>
