<style>
    .xxx{
        background-color: #2e3741;
    }
</style>
<template>
    this is second
</template>
<script>
    export default {
        ready: function () {
            document.getElementById("test").className = 'xxx';
            document.getElementById("test").style.color = '#7ce1aa';
            document.getElementById("test").style.borderLeft = '3px';
            document.getElementById("test").style.borderLeftColor = '#31c37c';
            document.getElementById("test").style.borderLeftStyle = 'solid';
        }
        ,
        route: {
            canDeactivate: function (transition) {
                if(transition.to.path != 'menu1/step2'){
                    document.getElementById("test").className = '';
                    document.getElementById("test").style.color = '';
                    document.getElementById("test").style.borderWidth = '';
                    document.getElementById("test").style.borderColor = '';
                    document.getElementById("test").style.borderStyle = '';
                    transition.next();
                }
            }
        }
    }
</script>