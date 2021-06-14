<template>
    <div class="card">
        <div class="card-header">
            <span>{{ title }}</span>
        </div>
        <div class="card-body">
            <ul>
                <li v-for="item in items" :key="item.link"><a :href="item.link">{{ item.name }}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    items: Array,
  }
}
</script>
