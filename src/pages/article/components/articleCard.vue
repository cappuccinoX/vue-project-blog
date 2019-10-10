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
            <remark></remark>
<!--            <div class="remark-container">-->
<!--                <Input-->
<!--                        maxlength="200"-->
<!--                        show-word-limit-->
<!--                        placeholder="请输入评论"-->
<!--                />-->
<!--            </div>-->
        </Drawer>
    </div>
</template>
<script>
    import remark from './remark'
    export default {
        props: {
            content: {},
            title: {}
        },
        components: {
            remark
        },
        data() {
            return {
                ifShowArticleDetails: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
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
            showDetails() {
                this.ifShowArticleDetails = true
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
    .remark-container {
    }
</style>
