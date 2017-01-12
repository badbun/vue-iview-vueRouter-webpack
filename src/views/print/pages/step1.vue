<template>
    this is first{{aaa}}
</template>
<script>
    import config from '../../../config/config';

    export default {
        ready: function() {
            var params = {
                "aaa": "1",
                "bbb": "2"
            };
            config.test(params, function (response) {
                console.log(response);
            })
        },
        data: function() {
            return {
                aaa : "123"
            }
        },
        methods: {

        }
    }
</script>