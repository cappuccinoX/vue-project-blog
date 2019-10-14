<template>
    <Input v-model="searchVal">
        <Select v-model="searchKey" slot="prepend" style="width: 100px">
            <Option v-for="(item, index) in optionList" :key="index" :value="item.name">{{item.text}}</Option>
        </Select>
        <Button slot="append" icon="ios-search" @click="search"></Button>
    </Input>
</template>
<script>
    export default {
        data() {
            return {
                optionList: [
                    {name: 'title', text: '文章标题'},
                ],
                searchVal: '',
                searchKey: '',
            }
        },
        methods: {
            search() {
                this.$emit('search', this.searchKey, this.searchVal)
            }
        }
    }
</script>
