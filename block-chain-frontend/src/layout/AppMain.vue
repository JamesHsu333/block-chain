<template lang="pug">
  section
    transition(name="fade-transform" mode="out-in")
      router-view(:key="key")
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>