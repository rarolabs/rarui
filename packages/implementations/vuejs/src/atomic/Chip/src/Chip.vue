<template>
  <component
    :is="closeable || disabled ? 'button' : 'div'"
    :class="chip.classnames.chip({ shape })"
    :disabled="disabled"
  >
    <slot v-if="avatar" name="avatar">
      <!-- fazer avatar -->
    </slot>
    <slot />
    <slot v-if="closeable" name="closeable">
      <!-- fazer icone -->
    </slot>
  </component>
</template>

<script lang="ts" setup>
import { chip } from "@rarui/styles";
import { ChipProps } from "./chip.types";

defineOptions({
  inheritAttrs: false,
});

withDefaults(defineProps<ChipProps>(), {
  shape: "pill",
  disabled: false,
  closeable: false,
  avatar: "",
});
</script>
