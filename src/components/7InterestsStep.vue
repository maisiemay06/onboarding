// Step 5

<template>
  <p class="text-[15px] mb-2">5 of 15</p>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10">
    What are your interests, {{ userFirstName }}?
  </h1>
  <p class="mb-10">
    It'll really help us find the right people for you, from the start, if we
    know this. Select from the choices here, or type your own and hit ENTER.
  </p>

  <div class="flex flex-wrap w-full gap-x-4">
    <p class="text-lg font-semibold w-full">Business</p>
    <div v-for="businessInterest in interests.business" :key="businessInterest">
      <input
        type="checkbox"
        name="interests"
        :id="businessInterest.replace(/\s+/g, '-')"
        class="opacity-5"
      />
      <label
        :for="businessInterest.replace(/\s+/g, '-')"
        class="radio-option"
        >{{ businessInterest }}</label
      >
    </div>
    <p class="text-lg font-semibold w-full mt-5">Lifestyle</p>
    <div
      v-for="lifestyleInterest in interests.lifestyle"
      :key="lifestyleInterest"
    >
      <input
        type="checkbox"
        name="interests"
        :id="lifestyleInterest.replace(/\s+/g, '-')"
        class="opacity-5"
      />
      <label
        :for="lifestyleInterest.replace(/\s+/g, '-')"
        class="radio-option"
        >{{ lifestyleInterest }}</label
      >
    </div>
  </div>

  <p class="text-lg font-semibold w-full mt-5 mb-5">Choose your own</p>
  <input
    type="text"
    placeholder="Start typing..."
    @keyup.enter="handleInterest"
    v-model="interestInput"
    class="
      border-b
      focus:border-black
      w-full
      text-2xl
      md:text-[40px]
      pb-3
      outline-0
      mb-8
    "
  />
  <div class="flex flex-wrap w-full gap-x-4">
    <div v-for="userInterest in interests.userInterests" :key="userInterest">
      <input
        type="checkbox"
        name="interests"
        :id="userInterest.replace(/\s+/g, '-')"
        class="opacity-5"
        checked
      />
      <label :for="userInterest.replace(/\s+/g, '-')" class="radio-option">{{
        userInterest
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "InterestsStep",
  props: ["userFirstName"],
  data() {
    return {
      interests: {
        business: [
          "Example1",
          "Example2",
          "Example3",
          "Example4",
          "Example5",
          "Example6",
        ],
        lifestyle: [
          "Example7",
          "Example8",
          "Example9",
          "Example10",
          "Example11",
          "Example12",
        ],
        userInterests: [],
      },
      interestInput: "",
    };
  },
  methods: {
    handleInterest(event) {
      let newInterest = event.target.value;
      let formatNewInterest =
        newInterest.charAt(0).toUpperCase() + newInterest.slice(1);
      this.interests.userInterests.unshift(formatNewInterest);
      this.interestInput = "";
    },
  },
};
</script>