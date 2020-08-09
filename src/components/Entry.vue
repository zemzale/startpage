<template>
    <a v-bind:href="url" target="_blank">{{ name }}</a>
</template>

<script>
module.exports = {
    props: {
        name:String,
        url:String
    }
}
</script>

<style scoped>
a {
    color: var(--color-text);
    text-decoration: none;
    display: block;
}
</style>
