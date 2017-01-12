<style scoped lang="less">
    .header-bar{
        position: relative;
        z-index:2;
        height:50px;
        line-height:50px;
        background-color:#fff;
        box-shadow:1px 1px 4px #a3a3a3;
        >li{
            display: inline-block;
            padding-right:5px;
            &:first-child:before{
                content: url("../../images/date_icon.png");
                display: inline-block;
                vertical-align: middle;
                padding:2px 5px 0 20px;
             }
            &:last-child{
                float:right;
                padding-right:17px;
             }
        }
    }
    .warp-middle{
        width:95%;
        max-width:1440px;
        .sz-col-4,.sz-col-3 li{
            height:270px;
            background-color: #fff;
            transition: all .3s ease;
            &:hover{
                transform: translateY(-6px);
                transition: all .3s ease;
            }
        }
        .sz-col-3{
            margin-top:25px;
            ul{
                margin-left:-1.3%;
                li{
                    width:32%;
                    float: left;
                    margin-left:1.3%;
                    margin-bottom:15px;
                }
             }
        }
    }
</style>
<template>
    <ul class="header-bar clear-fix">
        <li>当前税款所属期</li>
        <li>
            <i-select :model.sync="syncData.skssq" class="width-110">
                <i-option v-for="item in syncData.skssqList" :value="item">{{item | dateFilter}}</i-option>
            </i-select>
        </li>
        <li>
            <i-button>下载核定信息</i-button>
            <i-button>下载基本信息</i-button>
        </li>
        <li>增值税征收类型：货物劳物</li>
    </ul>
    <div class="content">
        <section class="warp-middle">
            <section class="sz-col-4"></section>
            <section class="sz-col-3">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </section>
        </section>
    </div>
    <!--<Row type="flex" justify="center" align="middle" style="border:1px solid red;">
        <i-col span="6">
            <h2>a</h2>
        </i-col>
        <i-col span="6">
            <h2>b</h2>
        </i-col>
        <i-col span="6">
            <h2>c</h2>
        </i-col>
        <i-col span="6">
            <h2>d</h2>
        </i-col>
    </Row>-->
</template>
<script>
    import config from 'config/config'
    import dateFilter from 'filter/dateFilter';
    import { iSelect,iOption } from 'iview';
    import mData from '../data';

    export default {
        components:{
            iSelect,
            iOption
        },
        filters: {
            dateFilter
        },
        data: function () {
            return {
                syncData: mData
            }
        },
        ready: function () {
            this.getHdxxList();
        },
        methods: {
            getHdxxList: function(){
                var requestData = {"a": "1","b": "2"};
                config.service.getHdxxList(requestData,function(response){
                    console.log(response);
                })
            }
        }
    }
</script>
