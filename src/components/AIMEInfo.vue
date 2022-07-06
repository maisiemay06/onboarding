// AIME Info - page 5

<template>
  <div class="md:text-lg w-full md:w-2/5">
    <h1 class="font-semibold text-2xl md:text-6xl mb-14">
      {{ userFirstName }}, we'd like to introduce you to AIME
    </h1>
    <p class="mb-2 md:mb-4">
      AIME (pronounced "Amy") is the revolutionary AI matching genius behind
      Meeow.
    </p>
    <p class="mb-2 md:mb-4">
      The more you Meeow, the better AIME will be able to match you! Simple!
    </p>
    <p>
      Let's give AIME a head start by answering a few questions about what
      you're looking to achieve through networking on Meeow.
    </p>
  </div>
</template>

<script>
export default {
  name: "AimeInfo",
  props: ["userFirstName"],
};
</script>