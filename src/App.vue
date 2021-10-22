<template>
  <div id="nav">
    <router-link to="/" class="pe-3">Movies</router-link>
    <router-link to="/watch-list" class="pe-3">Watch list</router-link>
  </div>
  <div id="content">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./scss/base";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    position: relative;

    &.router-link-exact-active {
      color: $primaryColor;

      &::after {
        content: "";
        position: absolute;
        width: 50%;
        height: 2px;
        background: $primaryColor;
        top: 1.3rem;
        left: 0;
      }
    }
  }
}

#content {
  // Changed in deployment
  .va-button--normal .va-button__left-icon {
    font-size: 24px !important;
  }
}
</style>
