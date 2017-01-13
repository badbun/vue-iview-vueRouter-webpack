<template>
    this is first{{aaa}}
    <div style="border:1px solid red;color:#000" @click="ent">跳啊跳</div>
</template>
<script>
    import config from 'config/config';

    export default {
        ready: function() {
            var params = {
                "aaa": "1",
                "bbb": "2"
            };
            config.service.test(params, function (response) {
                console.log(response);
            })
        },
        data: function() {
            return {
                aaa : "123"
            }
        },
        methods: {
            ent: function (){
                this.$route.router.go('/menu1/step2');
            }
        }
    }
</script>