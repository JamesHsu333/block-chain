<template lang="pug">
  .app-wrapper
    .logo-container
      img(src="./../assets/logo.png" style="width:100%; padding: 20px;")
    sidebar.sidebar-container
    .main-container
      .fixed-header
        navbar
      app-main
</template>
<script>
import AppMain from "./AppMain";
import Sidebar from "./SideBar/index";
import Navbar from "./Navbar"
export default {
    components: {
        AppMain,
        Sidebar,
        Navbar
    }
}
</script>