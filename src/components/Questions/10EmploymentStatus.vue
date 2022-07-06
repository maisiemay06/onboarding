// Step 10

<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10">
    What's your employment status, {{ userFirstName }}?
  </h1>
  <p class="mb-10">
    This will really help Meeow match you to conversations with the right type
    of people.
  </p>

  <div class="flex flex-wrap w-full gap-x-4">
    <div>
      <input type="radio" name="employment" id="full-time" class="opacity-5" />
      <label for="full-time" class="radio-option">Full-time Employed</label>
    </div>
    <div>
      <input type="radio" name="employment" id="part-time" class="opacity-5" />
      <label for="part-time" class="radio-option">Part-time Employed</label>
    </div>
    <div>
      <input
        type="radio"
        name="employment"
        id="self-employed"
        class="opacity-5"
      />
      <label for="self-employed" class="radio-option">Self-employed</label>
    </div>
    <div>
      <input type="radio" name="employment" id="full-side" class="opacity-5" />
      <label for="full-side" class="radio-option">Full-time + Side-gig</label>
    </div>
    <div>
      <input type="radio" name="employment" id="part-side" class="opacity-5" />
      <label for="part-side" class="radio-option">Part-time + Side gig</label>
    </div>
    <div>
      <input
        type="radio"
        name="employment"
        id="company-director"
        class="opacity-5"
      />
      <label for="company-director" class="radio-option"
        >Company Director</label
      >
    </div>
    <div>
      <input type="radio" name="employment" id="retired" class="opacity-5" />
      <label for="retired" class="radio-option">Retired</label>
    </div>
    <div>
      <input type="radio" name="employment" id="unemployed" class="opacity-5" />
      <label for="unemployed" class="radio-option">Unemployed</label>
    </div>
    <div>
      <input type="radio" name="employment" id="other" class="opacity-5" />
      <label for="other" class="radio-option">Other</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgeGroup",
  props: ["userFirstName"],
};
</script>

