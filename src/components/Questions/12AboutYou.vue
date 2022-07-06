// Step 12

<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    Tell us a little about you as a person.
  </h1>
  <p class="mb-10">
    This is about you, not your job. Try and make this short, but informative.
    It'll be displayed in your profile and in your video meetings.
  </p>
  <textarea
    name="about-you"
    id="about-you"
    cols="30"
    rows="10"
    class="border border-black rounded-md w-full text-base p-3 outline-0 mb-14"
  ></textarea>
</template>

<script>
export default {
  name: "AboutYou",
};
</script>