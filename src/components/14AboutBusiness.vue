// Step 13

<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    Now tell us a little about your business.
  </h1>
  <p class="mb-10">
    Again, try and make this informative, but short. It'll be displayed in your
    profile and in your video meetings.
  </p>
  <textarea
    name="about-business"
    id="about-business"
    cols="30"
    rows="10"
    class="border border-black rounded-md w-full text-base p-3 outline-0 mb-14"
  ></textarea>
</template>

<script>
export default {
  name: "AboutBusiness",
};
</script>