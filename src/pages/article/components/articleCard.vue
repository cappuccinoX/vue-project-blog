<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="true" @click.native="showDetails">
            <p slot="title">{{title}}</p>
            <p class="article-content">{{ content | ellipsis}}</p>
        </Card>
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
    import remark from './remark'
    import {GET_REMARK_URL} from "../api";

    export default {
        props: {
            content: {},
            title: {},
            type: {},
            ID: {}
        },
        components: {
            remark
        },
        data() {
            return {
                ifShowArticleDetails: false,
                remark: [],
                remarkCount: 0
            }
        },
        filters: {
            ellipsis(value) {
                if (!value) {
                    return  '';
                }
                if (value.length > 400) {
                    return value.slice(0, 400) + '...'
                }
                return value
            }
        },
        created() {
        },
        methods: {
            async showDetails() {
                try {
                    this.ifShowArticleDetails = true
                    const cond = {
                        articleID: this.ID,
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

<style type="text/css" scoped>
    .ivu-card {
        height: 200px;
        width: 500px;
        cursor: pointer;
    }
    .details-container {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        height: 500px;
        font-size: 15px;
        overflow: auto;
    }
</style>
