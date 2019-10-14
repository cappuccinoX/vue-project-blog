<template>
    <div class="article-container">
        <List item-layout="vertical">
            <ListItem v-for="(item, index) in data" :key="index" @click.native="showDetails(index)">
                <ListItemMeta :title="item.title" :description="item.content | ellipsis"></ListItemMeta>
            </ListItem>
        </List>
        <Drawer
                v-model="ifShowArticleDetails"
                width="640"
                :closable="false"
                :title="title"
        >
            <div class="details-container">
                <p>{{content}}</p>
            </div>
            <remark
                :remark="remark"
                :remarkCount="remarkCount"
            />
        </Drawer>
    </div>
</template>
<script>
    import remark from './remark';
    import {GET_REMARK_URL} from '../api';

    export default {
        props: {
            data: {}
        },
        components: {
            remark,
        },
        data() {
            return {
                ifShowArticleDetails: false,
                remark: [],
                remarkCount: 0,
                title: '',
                content: ''
            }
        },
        filters: {
            ellipsis(value) {
                if (!value) {
                    return  '';
                }
                if (value.length > 100) {
                    return value.slice(0, 100) + '...'
                }
                return value
            }
        },
        created() {
        },
        methods: {
            async showDetails(index) {
                try {
                    this.ifShowArticleDetails = true;
                    this.title = this.data[index].title;
                    this.content = this.data[index].content;
                    const cond = {
                        articleID: this.data[index].articleID,
                        limit: 10,
                        offset: 0
                    }
                    const result = await this.$axios.post(GET_REMARK_URL, cond)
                    if (result.data.data.code === 10000) {
                        for(const item of result.data.data.data) {
                            item.date = this.$moment(item.date).format('YYYY-MM-DD HH:mm:ss')
                        }
                        this.remark = result.data.data.data
                        this.remarkCount = result.data.data.data.length
                    } else {
                        this.$Message.error('获取评论失败')
                    }
                } catch (e) {
                    this.$Message.error(e.message)
                }

            }
        }
    }
</script>

<style lang="less" scoped>
    .details-container {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        height: 500px;
        font-size: 15px;
        overflow: auto;
    }
    .article-container {
        background: #eee;
        padding: 20px;
        width: 800px;
        -webkit-border-radius: 5px;
        -moz-border-radius:5px;
        border-radius: 5px;
        /deep/.ivu-list-item-meta-content {
            cursor: pointer;
        }
    }
</style>
