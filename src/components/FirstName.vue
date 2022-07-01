// Step 1

<template>
  <p class="text-[15px] mb-2">1 of 15</p>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    Firstly, what's your first name
  </h1>
  <input
    type="text"
    placeholder="Start typing..."
    @input="handleFirstName"
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
  emits: ["setFirstName"],
  methods: {
    handleFirstName(event) {
      let name = event.target.value;
      let capName = name.charAt(0).toUpperCase() + name.slice(1);
      this.$emit("setFirstName", capName);
    },
  },
};
</script>