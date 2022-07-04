// Step 3

<template>
  <p class="text-[15px] mb-2">3 of 15</p>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10">
    How long have you been on this planet, {{ userFirstName }}?
  </h1>
  <p class="mb-10">
    We'd appreciate knowing this as it will help us monitor diversity on Meeow.
  </p>

  <div class="flex flex-wrap w-full gap-x-4">
    <div>
      <input type="radio" name="age" id="18-25" class="opacity-5" />
      <label for="18-25" class="radio-option">18-25</label>
    </div>
    <div>
      <input type="radio" name="age" id="26-35" class="opacity-5" />
      <label for="26-35" class="radio-option">26-35</label>
    </div>
    <div>
      <input type="radio" name="age" id="36-45" class="opacity-5" />
      <label for="36-45" class="radio-option">36-45</label>
    </div>
    <div>
      <input type="radio" name="age" id="46-55" class="opacity-5" />
      <label for="46-55" class="radio-option">46-55</label>
    </div>
    <div>
      <input type="radio" name="age" id="55+" class="opacity-5" />
      <label for="55+" class="radio-option">55+</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgeGroup",
  props: ["userFirstName"],
};
</script>

