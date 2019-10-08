<template>
    <div class="article-card-container">
       <article-card ref="child-article-card"></article-card>
    </div>
</template>
<script>
    import articleCard from './components/articleCard'
    import axios from 'axios'
    import { GET_ARTICLE_URL } from './api/index'
    export default {
        components: {
            articleCard
        },
        data() {
            return{
                content: '',
                title: ''
            }
        },
        created () {
            this.getArticle()
        },
        methods: {
            async getArticle() {
                try {
                    const result = await this.$axios.get(GET_ARTICLE_URL)
                    console.log(result.data.data)
                    if (result.data.data.code === 10000) {
                        // this.content = result.data.data.data.content;
                        // this.title = result.data.data.title;
                        console.log('aaaasss')
                        console.log(this.$refs.child-article-card.content) 
                        // this.$refs.child-article-card.title = result.data.data.data.title
        
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