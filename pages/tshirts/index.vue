<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 w-full">
    <div v-for="tshirt in tshirts" :key="tshirt.id">
      <item
        :name="tshirt.name"
        :price="tshirt.price"
        :image="tshirt.images[0].formats.small.url"
        :id="tshirt.id"
        type="tshirt"
      />
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