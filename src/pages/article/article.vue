<template>
    <div class="article-card-container">
        <Row>
            <Col span="8">
                <search-box @search="search"></search-box>
            </Col>
        </Row><br>
        <Row :gutter="4">
            <Col span="14">
                <article-card
                        :data="tempArticleDetails"
                />
            </Col>
            <Col span="6">
                <tags
                    :data="articleDetails"
                    @search="search"
                />
            </Col>
        </Row>
    </div>
</template>
<script>
    import articleCard from './components/articleCard';
    import { GET_ARTICLE_URL } from './api/index';
    import tags from './components/tags';
    import searchBox from './components/searchBox';

    export default {
        components: {
            articleCard,
            tags,
            searchBox
        },
        data() {
            return{
                tempArticleDetails: [],
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
                        this.articleDetails = result.data.data.data
                        this.tempArticleDetails = this.articleDetails
                    } else {
                        this.$Message.error('Fail to get articles')
                    }
                } catch(e) {
                    this.$Message.error(e.message)
                }
            },
            search(type, value) {
                switch (type) {
                    case 'tag':
                        this.tempArticleDetails = this.articleDetails.filter(item => {
                            return item.type === value
                        })
                        break;
                    case 'title':
                        this.tempArticleDetails = this.articleDetails.filter(item => {
                            return item.title.toLowerCase().includes(value.toLowerCase())
                        })
                        break;
                    default:
                        this.tempArticleDetails = this.articleDetails
                        break;
                }

            }
        }
    }
</script>
<style>
    .article-card-container {
        width: 1500px;
    }
</style>
