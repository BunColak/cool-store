<template>
  <div class="flex flex-col p-4 w-full">
    <div class="w-2/3 h-auto mx-auto">
      <img class="h-full" :src="imageUrl" :alt="tshirt.name" />
    </div>
    <div class="mt-4 text-center">
      <h2 class="font-secondary text-3xl">{{ tshirt.name }}</h2>
      <p class="mt-2">{{ tshirt.description }}</p>
      <p class="font-secondary mt-2 text-lg">{{ tshirt.price }}€</p>
      <p class="font-secondary mt-2 text-lg text-red-600" v-if="stockInfo">
        {{ stockInfo }}
      </p>
      <button
        class="snipcart-add-item button mt-2"
        :data-item-id="tshirt.id"
        :data-item-price="tshirt.price"
        :data-item-url="$route.path"
        :data-item-name="tshirt.name"
        :data-item-image="imageUrl"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { generateImageLink } from "../../utils";

export default {
  name: "TshirtItem",
  apollo: {
    tshirt: {
      prefetch: true,
      query: gql`
        query GetTshirt($id: ID!) {
          tshirt(id: $id) {
            id
            name
            description
            price
            stock
            images {
              formats
            }
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
  computed: {
    imageUrl() {
      if (this.tshirt)
        return generateImageLink(this.tshirt.images[0].formats.medium.url);
    },
    stockInfo() {
      return this.tshirt.stock <= 3
        ? `Only ${this.tshirt.stock} left in stock!`
        : "";
    },
  },
};
</script>