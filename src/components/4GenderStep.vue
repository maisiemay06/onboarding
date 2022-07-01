// Step 4

<template>
  <p class="text-[15px] mb-2">4 of 15</p>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10">
    Which of the following most accurately describes you, {{ userFirstName }}?
  </h1>
  <p class="mb-10">
    This information will never be divulged without your express permission. It
    will of course help us monitor diversity on Meeow.
  </p>

  <div class="flex flex-wrap w-full gap-x-4">
    <div>
      <input type="radio" name="gender" id="female" class="opacity-5" />
      <label for="female" class="radio-option">Female</label>
    </div>
    <div>
      <input type="radio" name="gender" id="male" class="opacity-5" />
      <label for="male" class="radio-option">Male</label>
    </div>
    <div>
      <input type="radio" name="gender" id="non-binary" class="opacity-5" />
      <label for="non-binary" class="radio-option">Non-binary</label>
    </div>
    <div>
      <input type="radio" name="gender" id="transgender" class="opacity-5" />
      <label for="transgender" class="radio-option">Transgender</label>
    </div>
    <div>
      <input type="radio" name="gender" id="intersex" class="opacity-5" />
      <label for="intersex" class="radio-option">Intersex</label>
    </div>
    <div>
      <input type="radio" name="gender" id="other" class="opacity-5" />
      <label for="other" class="radio-option">Other</label>
    </div>
    <div>
      <input type="radio" name="gender" id="prefer-not" class="opacity-5" />
      <label for="prefer-not" class="radio-option">Prefer not to say</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstName",
  props: ["userFirstName"],
};
</script>