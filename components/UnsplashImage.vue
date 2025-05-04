<template>
  <img
    :src="url"
    :alt="alt"
    :class="className"
    loading="lazy"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
})
</script> 