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
      class="h-5 min-w-2 md:h-[10px] flex-1 bg-meeow-primary rounded-sm"
      v-for="i in stepsCompleted"
      :key="i"
    ></div>
    <div
      class="h-5 min-w-2 md:h-[10px] flex-1 bg-[#F4F4F4] rounded-sm"
      v-for="i in stepsLeft"
      :key="i"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["onboardingStep"],
  data() {
    return {};
  },
  computed: {
    stepsCompleted() {
      if (this.onboardingStep > 5) {
        // discount AIME info page 6
        return this.onboardingStep - 2;
      } else if (this.onboardingStep > 1) {
        // discount Welcome page 2
        return this.onboardingStep - 1;
      } else {
        return this.onboardingStep;
      }
    },
    stepsLeft() {
      if (this.onboardingStep > 5) {
        // discount AIME info page 6
        return 19 - this.onboardingStep;
      } else if (this.onboardingStep > 1) {
        // discount Welcome page 2
        return 18 - this.onboardingStep;
      } else {
        return 17 - this.onboardingStep;
      }
    },
  },
};
</script>