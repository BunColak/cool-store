<template>
  <nav class="flex p-4 justify-between">
    <div>
      <nuxt-link to="/" class="block h-16">
        <img class="h-full" src="~/assets/images/logo.png" alt="Logo" />
      </nuxt-link>
    </div>
    <div>
      <button class="snipcart-checkout flex items-center relative">
        <i class="material-icons">shopping_cart</i>
        <div
          v-show="showCount"
          class="absolute top-3 -right-3 bg-red-500 text-white w-6 h-6 rounded-full"
        >
          <span
            ref="count"
            class="snipcart-items-count font-bold font-secondary"
          ></span>
        </div>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showCount: false,
    };
  },
  mounted() {
    setInterval(() => {
      this.showCount =
        this.$refs.count &&
        this.$refs.count.textContent &&
        this.$refs.count.textContent !== "0";
    }, 1000);
  },
};
</script>