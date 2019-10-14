<template>
    <div class="remark-container">
        <Card>
            <p><slot><b>添加评论</b></slot></p>
            <Input
                    type="textarea"
                    :maxlength="remarkMaxLength"
                    placeholder="请输入评论"
                    :rows="rows"
            />
            <Button class="submit-remark" type="primary" @click.native="submitRemark">提交</Button>
            <Divider orientation="left">{{`${remarkCount}条评论`}}</Divider>
            <reply
                    ref="childReply"
            ></reply>
            <div v-for="(item, index) in remark" :key="index" class="remark">
                <Row>
                    <Col span="2"><img src="../../../assets/staticImages/profileImage.jpg" style="width: 40px; height: 40px"/></Col>
                    <Col span="4">
                        <p>{{item.name}}</p>
                        <p>{{item.date}}</p>
                    </Col>
                </Row>
                <p>
                    {{item.message}}
                    <Button style="float: right" size="small" @click.native="reply">回复</Button>
                    <Divider></Divider>
                </p>
            </div>
        </Card>
    </div>
</template>
<script>
    import reply from './reply'
    export default {
        props:{
            remark: {},
            remarkCount: {}
        },
        components: {
            reply
        },
        data() {
            return {
                remarkMaxLength: 200,
                rows: 3, // 评论输入框默认行数
                showReply: false
            }
        },
        methods: {
            reply() {
                this.$refs.childReply.showReply = true
            },
            submitRemark() {
                // 判断是否登录

            }
        }
    }
</script>
<style lang="less" scoped>
    .remark-container {
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .submit-remark {
        margin-top: 10px
    }
</style>
