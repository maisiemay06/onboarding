// Step 11

<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    How would you describe what you do?
  </h1>
  <p class="mb-10">
    Start typing and either choose one from our list, or type your own and hit
    ENTER. Please be careful with spelling.
  </p>
  <input
    type="text"
    placeholder="What's your job title?"
    class="
      border-b
      focus:border-black
      w-full
      text-2xl
      md:text-[40px]
      pb-3
      outline-0
      mb-14
    "
  />
  <input
    type="text"
    placeholder="What industry is this in?"
    class="
      border-b
      focus:border-black
      w-full
      text-2xl
      md:text-[40px]
      pb-3
      outline-0
      mb-14
    "
  />
  <input
    type="text"
    placeholder="And the company name?"
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
  name: "JobTitle",
};
</script>