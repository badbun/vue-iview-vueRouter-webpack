<style scoped lang="less">
    .nav{
        height:100%;
        float:left;
        width:165px;
        background-color: #3b444e;
        li{
            padding-left: 26px;
            height:50px;
            line-height:50px;
            color:#86939b;
            border-left:3px solid #3b444e;
            font-size: 14px;
            &:hover,&.active{
                border-left:3px solid #31c37c;
                background-color: #2e3741;
                cursor: pointer;
                color:#7ce1aa;
            }
        }
    }
</style>
<template>
    <ul class="nav">
        <li v-link="{path: '/index',activeClass: 'active'}">申报表填写</li>
        <!--<li v-link="{path: '/menu1/step1',activeClass: 'active'}">申报表发送</li>-->
        <li id="test" v-link="{path: '/menu1/step1',activeClass: 'active'}">申报表发送</li>
        <li v-link="{path: '/sbjgcx',activeClass: 'active'}">申报结果查询</li>
    </ul>
</template>
<script></script>