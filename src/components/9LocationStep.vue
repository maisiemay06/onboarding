// Step 8

<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    Where in the world are you, {{ userFirstName }}?
  </h1>
  <p class="mb-10">
    We need to know where you are so we can match you with people closely... If
    that's what you want. You can change your city in yout profile, should you
    be travelling (why not).
  </p>
  <input
    type="text"
    placeholder="Start typing your town/city..."
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
  name: "LastName",
  props: ["userFirstName"],
};
</script>