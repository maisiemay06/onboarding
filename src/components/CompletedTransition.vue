<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-5">
    Thank you, {{ userFirstName }}!
  </h1>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    And congrats on becoming a fully fledged Meeowist!
  </h1>
</template>

<script>
export default {
  name: "CompletedTransition",
  props: ["userFirstName"],
};
</script>