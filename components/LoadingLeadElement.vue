<template>
  <div class="animate-pulse w-full flex flex-row gap-x-4 gap-y-2 items-center border p-4 text-lg duration-300 bg-zinc-900 bg-gradient-to-br rounded-xl border-slate-700">
    <div class="flex gap-4 flex-grow items-center">
      <div class="text-lg w-10  text-slate-500">#{{ position }}</div>
      <div class="flex items-center gap-3 font-semibold text-lg">
        <p>
          Famille inconnue
        </p>
      </div>
    </div>
    <div class="flex gap-4">
      <p>? points</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  position: Number,
})
</script>
<style scoped>

</style>
