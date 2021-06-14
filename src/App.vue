<template>
    <div class="holder">
        <Card v-for="cat in categories" :key="cat.title" :title="cat.title" :items="cat.items" />
    </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'App',
  components: {
    Card,
  },
  data() {
    return {
        categories: [
            {
                title: "Fun",
                items: [
                    {
                        link: "https://reddit.com/r/programming",
                        name: "/r/programming",
                    },
                    {
                        link: "https://youtube.com",
                        name: "YouTube",
                    },
                    {
                        link: "https://netflix.com",
                        name: "Netflix",
                    }
                ]
            },
            {
                title: "Code",
                items: [
                    {
                        link: "https://github.com",
                        name: "GitHub",
                    },
                    {
                        link: "https://gitlab.com",
                        name: "GitLab",
                    },
                ]
            }
        ]
    }
  },
}
</script>

<style>
.holder {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.card-body {
    margin: 5px 5px 0px 5px;
}

.card {
    display: inline;
    margin: 10px;
}

.card-header {
    border-bottom: #11e6be solid 1px;
    padding-bottom: 2px;
}
body {
    background-color: #121212;
}
a {
    color: #f1f1f1;
    text-decoration: none;
}
a:hover {
    color: #121212;
}

li:hover {
    color: #121212;
    background-color: #11e6be;
    text-decoration: none;
}
ul {
    padding:0;
    margin:0;
    text-align: left;
    list-style-type: none;
}

#app {
  font-family: Roboto Mono, monospace;
  font-size: 20pt;
  text-align: center;
  color: #f1f1f1;
  margin-top: 60px;
}
</style>
