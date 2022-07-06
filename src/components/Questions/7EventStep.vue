// Step 8

<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    Are you joining Meeow as part of an event?
  </h1>
  <p class="mb-4">
    If you're attending a festival or some other event and you'd like to be
    associated with this, let us know. Feel free to choose more than 1.
  </p>
  <p class="mb-10">You can change this in your profile at any time.</p>
  <input
    type="text"
    placeholder="Start typing..."
    @keyup.enter="handleEvent"
    v-model="eventInput"
    class="
      border-b
      focus:border-black
      w-full
      text-2xl
      md:text-[40px]
      pb-3
      outline-0
    "
  />
  <p class="text-xs mt-3">Type your own and hit ENTER.</p>
  <div class="flex flex-wrap w-full gap-x-4">
    <div v-for="userEvent in userEvents" :key="userEvent">
      <input
        type="checkbox"
        name="events"
        :id="userEvent.replace(/\s+/g, '-')"
        class="opacity-5"
        checked
      />
      <label :for="userEvent.replace(/\s+/g, '-')" class="radio-option">{{
        userEvent
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventStep",
  data() {
    return {
      userEvents: [],
      eventInput: "",
    };
  },
  methods: {
    handleEvent(event) {
      let userEvent = event.target.value;
      let capEvent = userEvent.charAt(0).toUpperCase() + userEvent.slice(1);
      this.eventInput = "";
      this.userEvents.unshift(capEvent);
    },
  },
};
</script>