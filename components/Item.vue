<template>
  <div class="border border-gray-400 p-4 flex flex-col">
    <h4 class="text-center font-secondary text-lg">
      {{ name }}
    </h4>
    <div class="border border-gray-200 py-2 w-full max-h-48 mt-2 flex">
      <img class="mx-auto" :src="imageUrl" :alt="name" />
    </div>
    <div class="flex items-baseline mt-4">
      <p class="font-secondary">{{ price }}€</p>
      <button
        class="snipcart-add-item ml-4 text-sm border px-2 py-1 border-gray-800"
        :data-item-id="id"
        :data-item-price="price"
        :data-item-url="itemUrl"
        :data-item-name="name"
        :data-item-image="imageUrl"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import { generateImageLink } from "../utils";

export default {
  name: "Item",
  props: {
    id: String,
    name: String,
    image: String,
    price: Number,
    type: String
  },
  computed: {
    imageUrl() {
      return generateImageLink(this.image);
    },
    itemUrl() {
        return `/${this.type}/${this.id}`
    }
  },
};
</script>