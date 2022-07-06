<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    Good to meet you, {{ userFirstName }}!
  </h1>
  <h1 class="text-2xl md:text-[40px] mb-10 md:mb-20">
    Thanks for joining us... you're going to love Meeow
  </h1>
</template>

<script>
export default {
  name: "WelcomeFirstName",
  props: ["userFirstName"],
};
</script>