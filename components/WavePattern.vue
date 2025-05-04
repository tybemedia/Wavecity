<template>
  <div :class="['wave-pattern', position]">
    <svg viewBox="0 0 1200 40" preserveAspectRatio="none" class="w-full h-8">
      <path
        d="M0,0 C300,30 600,40 900,30 C1200,20 1500,10 1800,20 L1800,40 L0,40 Z"
        :fill="color"
      />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  position: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'bottom'].includes(value)
  },
  color: {
    type: String,
    default: '#4FD1C5' // Default teal color
  }
})
</script>

<style scoped>
.wave-pattern {
  width: 100%;
  overflow: hidden;
}
.wave-pattern.bottom {
  transform: rotate(180deg);
}
</style> 