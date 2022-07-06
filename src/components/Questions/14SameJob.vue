// Step 14

<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    Are you open to meeting people in the same prefession as you?
  </h1>
  <p class="mb-10">
    Collaboration or idea exchange can be a powerful approach to your
    career/business. How do you feel about this?
  </p>
  <div class="flex flex-col md:flex-row text-lg">
    <div class="mb-5 md:mb-0 md:mr-10">
      <input
        type="radio"
        name="same-job"
        id="yes-same"
        class="mr-3 h-7 w-7 inline-block align-middle"
      />
      <label for="yes-same" class="inline-block align-middle"
        >Yes, I'm open to it</label
      >
    </div>
    <div>
      <input
        type="radio"
        name="same-job"
        id="no-different"
        class="mr-3 h-7 w-7 inline-block align-middle"
      />
      <label for="no-different" class="inline-block align-middle"
        >No, I'd rather not</label
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SameJob",
};
</script>