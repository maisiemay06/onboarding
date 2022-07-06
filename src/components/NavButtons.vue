<template>
  <!-- Intro Page Btn -->
  <button
    v-if="onboardingStep === 0"
    class="button mt-10 md:mt-16 absolute bottom-28"
    @click="nextStep"
  >
    Let's get started!
  </button>

  <!-- Permissions Btn -->
  <button
    v-else-if="onboardingStep === 19"
    class="button mt-10 md:mt-16 absolute bottom-24"
    @click="nextStep"
  >
    Give your browser permission
  </button>

  <div
    v-else-if="
      onboardingStep === 2 || onboardingStep === 6 || onboardingStep === 20
    "
    class="mt-10 w-4/5 md:absolute bottom-28 md:mt-0"
  >
    <button
      class="button mr-3 bg-[#ffffff] text-meeow-primary"
      @click="prevStep"
    >
      Back
    </button>
    <button class="button bg-[#ffffff] text-meeow-primary" @click="nextStep">
      Next
    </button>
  </div>

  <!-- Prev/Next Btns -->
  <div v-else class="mt-10 w-4/5 absolute bottom-28 md:mt-0">
    <button class="button mr-3 bg-meeow-primary text-white" @click="prevStep">
      Back
    </button>
    <button class="button bg-meeow-primary text-white" @click="nextStep">
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: "NavButtons",
  props: ["prevStep", "nextStep", "onboardingStep"],
};
</script>