<template>
    <div class="article-card-container">
       <article-card ref="childArticleCard" v-for="(item, idx) in articleDetails" :key="idx"
                     :title="item.title"
                     :content="item.content"
       />
    </div>
</template>
<script>
    import articleCard from './components/articleCard'
    import { GET_ARTICLE_URL } from './api/index'
    export default {
        components: {
            articleCard
        },
        data() {
            return{
                articleDetails: []
            }
        },
        created () {
            this.getArticle()
        },
        methods: {
            async getArticle() {
                try {
                    const result = await this.$axios.get(GET_ARTICLE_URL)
                    if (result.data.data.code === 10000) {
                        for(const item of result.data.data.data) {
                            const map = {
                                title: item.title,
                                content: item.content
                            }
                            this.articleDetails.push(map)
                        }
                    } else {
                        this.$Message.error('Fail to get articles')
                    }
                } catch(e) {
                    this.$Message.error(e.message)
                }
            }
        }
    }
</script>
