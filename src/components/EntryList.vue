<template>
    <div>
        <h1>{{ title }}</h1>
        <ul>
            <Entry
                v-for="entry in entries"
                :key="entry.id"
                v-bind:name="entry.name"
                v-bind:url="entry.url"
            />
        </ul>
    </div>
</template>

<script>
import Entry from './Entry.vue'

export default {
    props: {
        title: String,
        entries: Array
    },
    components: {
        Entry
    }
}
</script>
