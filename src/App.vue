<template>
    <div class="holder">
        <div class="card">
            <div class="card-header">
                <span>Fun</span>
            </div>
            <div class="card-body">
                <ul>
                    <li><a href="https://reddit.com/r/programming">/r/programming</a></li>
                    <li><a href="https://youtube.com">YouTube</a></li>
                    <li><a href="https://netflix.com">Netflix</a></li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <span>Code</span>
            </div>
            <div class="card-body">
                <ul>
                    <li><a href="https://github.com">GitHub</a></li>
                    <li><a href="https://gitlab.com">GitLab</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
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
