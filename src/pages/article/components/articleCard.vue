<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="true">
            <p slot="title">{{title}}</p>
            <p class="article-content">{{ content | ellipsis}}</p>
        </Card>
    </div>
</template>
<script>
    export default {
        props: {
            content: {},
            title: {}
        },
        data() {
            return {
               content: `Content of no border type. Content of no border type. Content of no border type. Content of no border type.\n
                   Content of no border type. Content of no border type. Content of no border type. Content of no border type.\n
                   Content of no border type. Content of no border type. Content of no border type. Content of no border type.\n
                   Content of no border type. Content of no border type. Content of no border type. Content of no border type.\n
                   Content of no border type. Content of no border type. Content of no border type. Content of no border type.\n
                   Content of no border type. Content of no border type. Content of no border type. Content of no border type.\n
                   Content of no border type. Content of no border type. Content of no border type. Content of no border type.\n
                   Content of no border type. Content of no border type. Content of no border type. Content of no border type.`,
                title: 'Article1'
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

        }
    }
</script>

<style type="text/css" scoped>
    .ivu-card {
        height: 200px;
        width: 500px;
    }
</style>
