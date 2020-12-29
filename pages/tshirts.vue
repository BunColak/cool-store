<template>
  <div>
    <div v-for="tshirt in tshirts" :key="tshirt.id">
      <h4>{{ tshirt.name }}</h4>
      <p>{{ tshirt.description }}</p>
      <h5>{{tshirt.price}}€</h5>
      <button class="snipcart-add-item" v-bind="$snipcart.bindProduct(tshirt)" :data-item-image="`http://localhost:1337${tshirt.images[0].formats.small.url}`">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "IndexPage",
  apollo: {
    tshirts: {
      prefetch: true,
      query: gql`
        {
          tshirts {
            id
            name
            description
            stock
            price
            images {
              name
              formats
            }
          }
        }
      `,
    },
  },
};
</script>