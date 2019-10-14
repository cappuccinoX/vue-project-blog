<template>
    <div class="card-container">
        <Card>
            <p slot="title" style="text-align: center">标签</p>
            <a href="#" v-for="(item, index) in tags" :key="index" class="tag-container" @click="search(item.type)">
                <span>{{item.text}}</span>
            </a>
<!--            <a class="tag-container" @click="search('frontEnd')">前端</a>-->
<!--            <a class="tag-container" @click="search('backEnd')">后端</a>-->
        </Card>
    </div>
</template>
<script>
    export default {
        props: {
            data: {}
        },
        data () {
            return {
                tags: [
                    {type: 'frontEnd', text: '前端'},
                    {type: 'backEnd', text: '后端'},
                    {type: 'db', text: '数据库'},
                    {type: 'cloud', text: '云服务'},
                    {type: 'UI', text: 'UI技术'}
                ]
            }
        },
        methods: {
            search(type) {
                this.$emit('search', 'tag', type)
            }
        }
    }
</script>
<style lang="less" scoped>
    .card-container {
        width: 300px;
        height: 300px;
    }
    .tag-container {
        padding: 10px 10px 10px 10px;
        margin: 10px 0 10px 10px;
        background-color: #676B67;
        -webkit-border-radius: 5px;
        -moz-border-radius:5px;
        border-radius: 5px;
        text-align: center;
        color: #ffffff;
        display: inline-block;
    }
</style>
