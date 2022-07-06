<template>
  <div class="text-center">
    <h1 class="font-semibold text-2xl md:text-[40px] mb-5">
      Congrats, {{ userFirstName }}!
    </h1>
    <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
      You're now a fully fledged Meeowist!
    </h1>
    <p class="mb-2 md:mb-4">
      It'd be a good idea to play through our interactive video to make sure you
      understand exactly how Meeow works and how to get the most from your
      membership.
    </p>
    <img
      src="../assets/tolstoy-placeholder.png"
      alt="tolstoy placeholder img"
    />
    <h2>What would you like to do first?</h2>
    <button class="button">Book on-demand networking</button>
    <button class="button">Find Meeows that will inspire</button>
  </div>
</template>

<script>
export default {
  name: "CompletedTransition",
  props: ["userFirstName"],
};
</script>