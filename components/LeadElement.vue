<template>
  <div class="w-full flex flex-row gap-x-4 gap-y-2 items-center border p-4 text-lg duration-300  bg-gradient-to-br rounded-xl border-slate-700">
    <div class="flex gap-4 flex-grow items-center">
      <div class="text-lg w-10  text-slate-500">#{{ position }}</div>
      <div class="flex items-center gap-3 font-semibold text-lg">
        <p>
          {{ name }}
        </p>
      </div>
    </div>
    <div class="flex gap-4">
      <p>{{ score }} points</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  position: Number,
  name: String,
  score: Number
})
</script>

<style scoped>

</style>
