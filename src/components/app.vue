<style scoped>
    @import '../styles/common.css';
    .warp{
        margin-left:166px;
        border:1px solid red;
        height:100%;
    }
</style>
<template>
    <diy-head></diy-head>
    <div class="main">
        <diy-side></diy-side>
        <section class="warp">
            <router-view></router-view>
        </section>
    </div>
</template>
<script>
    import diyHead from "./header";
    import diySide from "./side";
    export default {
        components: {
            diyHead,
            diySide
        },
        data: function() {
            return {

            }
        },
        ready: function() {

        }
    }
</script>
