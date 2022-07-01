<template>
  <div
    class="
      flex flex-col
      justify-start
      items-start
      text-left
      h-[100vh]
      text-base
      p-6
      pt-44
      md:p-20 md:pt-60
    "
  >
    <!-- Onboarding Steps -->
    <intro-step v-if="onboardingStep == 0"></intro-step>
    <first-name
      v-if="onboardingStep == 1"
      @setFirstName="(name) => (userFirstName = name)"
    ></first-name>
    <last-name
      v-if="onboardingStep == 2"
      @setLastName="(name) => (userLastName = name)"
    ></last-name>

    <!-- Buttons -->
    <button
      v-if="onboardingStep == 0"
      class="button mt-10 md:mt-16"
      @click="nextStep"
    >
      Let's get started!
    </button>
    <div v-else class="md:absolute md:bottom-28 mt-10 md:mt-0">
      <button class="button mr-3" @click="prevStep">Back</button>
      <button class="button" @click="nextStep" :disabled="!userFirstName">
        Next
      </button>
    </div>
  </div>

  <!-- Logo -->
  <img
    src="./assets/meeow-logo.png"
    alt="Meeow Logo"
    class="
      fixed
      top-12
      right-8
      h-5
      md:top-auto md:bottom-28 md:right-16 md:h-10
    "
  />
</template>

<script>
import IntroStep from "./components/IntroStep.vue";
import FirstName from "./components/FirstName.vue";
import LastName from "./components/LastName.vue";

export default {
  name: "App",
  components: {
    IntroStep,
    FirstName,
    LastName,
  },
  data() {
    return {
      onboardingStep: 2,
      userFirstName: "",
    };
  },
  methods: {
    prevStep() {
      this.onboardingStep -= 1;
    },
    nextStep() {
      this.onboardingStep += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: "Sofia Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.button {
  background-color: #3843f1;
  padding: 16px 40px;
  border-radius: 9999px;
  color: white;
  font-size: 14px;
  display: inline-block;
}

.button:disabled {
  background-color: #d8d8d8;
}
</style>
