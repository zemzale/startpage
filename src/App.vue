<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
:root {
    --color-bg-main: #0b0c10;
    --color-bg-secondary: #1f2833;
    --color-text: #c5c6c7;
    --color-accent-main: #66fcf1;
    --color-accent-secondary: #45a29e;
}

html, body {
    height: 100%;
}

body {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin:0 auto;
    font-family: "Space Mono", monospace;
    font-size: 26px;
    background-color: var(--color-bg-main);
    color: var(--color-text);
}

.content {
    flex: 1 0 auto;
}

.footer {
    flex-shrink: 0;
    border-top: 3px solid var(--color-accent-secondary);
}

h1,
h2,
h3 {
    line-height:1.2
}
</style>
