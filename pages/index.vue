<template>
    <div>
        <div v-for="tshirt in tshirts" :key="tshirt.id">
            <h4>{{tshirt.name}}</h4>
            <h5>hello</h5>
            <button class="snipcart-add-item" v-bind="$snipcart.bindProduct(tshirt)">Add to cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    async asyncData({ params, $strapi }) {
      const tshirts = await $strapi.find('tshirts')
      console.log(tshirts[0].images);
      return {tshirts}
    }
}
</script>