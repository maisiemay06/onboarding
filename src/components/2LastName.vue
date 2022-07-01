// Step 2

<template>
  <p class="text-[15px] mb-2">2 of 15</p>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    What's your last name, {{ userFirstName }}
  </h1>
  <input
    type="text"
    placeholder="Start typing..."
    @input="handleLastName"
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
</template>

<script>
export default {
  name: "FirstName",
  props: ["userFirstName"],
  emits: ["setLastName"],
  methods: {
    handleLastName(event) {
      let name = event.target.value;
      let capName = name.charAt(0).toUpperCase() + name.slice(1);
      this.$emit("setLastName", capName);
    },
  },
};
</script>