<template>
  <div
    class="
      flex
      justify-between
      gap-1
      w-[55%]
      md:w-[68%]
      absolute
      top-12
      left-6
      md:left-20
    "
  >
    <div
      class="h-5 min-w-2 md:h-[10px] flex-1 bg-[#F4F4F4] rounded-sm"
      v-for="i in 17"
      :key="i"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
};
</script>