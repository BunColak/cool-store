<template>
    <aside class="w-1/6 flex-shrink-0 p-4 flex-col hidden lg:flex">
        <nuxt-link class="font-secondary my-4" active-class="font-bold" to="/tshirts">Tshirts</nuxt-link>
        <nuxt-link class="font-secondary my-4" active-class="font-bold" to="/jeans">Jeans</nuxt-link>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>