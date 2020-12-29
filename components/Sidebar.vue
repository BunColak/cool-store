<template>
    <aside class="w-1/5 flex-shrink-0 p-4 flex flex-col">
        <nuxt-link class="font-secondary my-4" active-class="font-bold" to="/tshirts">Tshirts</nuxt-link>
        <nuxt-link class="font-secondary my-4" active-class="font-bold" to="/jeans">Jeans</nuxt-link>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>