<template>
    <ul>
        <Entry
            v-for="entry in entries"
            :key="entry.id"
            v-bind:name="entry.name"
            v-bind:url="entry.url"
        />
    </ul>
</template>

<script>
import Entry from './Entry.vue'

export default {
    props: {
        entries: Array
    },
    components: {
        Entry
    }
}
</script>
