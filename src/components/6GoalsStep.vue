// Step 5

<template>
  <p class="text-[15px] mb-2">5 of 15</p>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10">
    What's your primary goal at the moment, {{ userFirstName }}?
  </h1>
  <p class="mb-10">
    It'll really help us find the right people for you, from the start, if we
    know this. Select from the choices here, or type your own and hit ENTER.
  </p>

  <input
    type="text"
    placeholder="Start typing..."
    @keyup.enter="handleGoal"
    v-model="goalInput"
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
    <div v-for="goal in goals" :key="goal">
      <input
        type="checkbox"
        name="goals"
        :id="goal.replace(/\s+/g, '-')"
        class="opacity-5"
      />
      <label :for="goal.replace(/\s+/g, '-')" class="radio-option">{{
        goal
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoalsStep",
  props: ["userFirstName"],
  data() {
    return {
      goals: [
        "Brainstorming",
        "Find new business",
        "Investing",
        "Find new projects",
        "Mentor someone",
        "Find a co-founder",
        "Raise funding",
        "Meet interesting people",
        "Develop your career",
        "Start a business",
      ],
      goalInput: "",
    };
  },
  methods: {
    handleGoal(event) {
      let newGoal = event.target.value;
      let formatNewGoal = newGoal.charAt(0).toUpperCase() + newGoal.slice(1);
      this.goals.unshift(formatNewGoal);
      this.goalInput = "";
      //   mark as checked as soon as submitted??

      //   let spacelessGoal = formatNewGoal.replace(/\s+/g, "-");
    },
  },
};
</script>