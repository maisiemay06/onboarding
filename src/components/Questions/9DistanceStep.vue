// Step 9

<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10">
    Given the choice, where would you prefer to meet people from?
  </h1>
  <p class="mb-4 md:mb-2">
    Whenever someone is wanting to network near you, at the same time as you're
    wanting to network, we'll match you.
  </p>
  <p class="mb-10">
    We'll also make people within your range aware of the Meeows you create.
  </p>

  <div class="flex flex-wrap w-full gap-x-4">
    <div>
      <input type="radio" name="distance" id="20-miles" class="opacity-5" />
      <label for="20-miles" class="radio-option">Within 20 miles</label>
    </div>
    <div>
      <input type="radio" name="distance" id="100-miles" class="opacity-5" />
      <label for="100-miles" class="radio-option">Within 100 miles</label>
    </div>
    <div>
      <input type="radio" name="distance" id="200-miles" class="opacity-5" />
      <label for="200-miles" class="radio-option">Within 200 miles</label>
    </div>
    <div>
      <input type="radio" name="distance" id="Nationally" class="opacity-5" />
      <label for="Nationally" class="radio-option">Nationally</label>
    </div>
    <div>
      <input type="radio" name="distance" id="Globally" class="opacity-5" />
      <label for="Globally" class="radio-option">Globally</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "DistanceStep",
};
</script>
