<template>
    <div class="remark-container">
        <Card>
            <p><slot><b>添加评论</b></slot></p>
            <Input
                    type="textarea"
                    maxlength="200"
                    placeholder="请输入评论"
                    rows="3"
            />
            <Button class="submit-remark" type="primary">提交</Button>
            <Divider orientation="left">{{remarkReviewTitle}}</Divider>
            <p>aaaaaaaaaaaa</p>
            <Button style="float: right; margin-bottom: 5px" size="small">回复</Button>
            <Divider></Divider>
            <p>bbbbbbbbbbbbbbbb</p>
            <Button style="float: right; margin-bottom: 5px" size="small">回复</Button>
            <Divider></Divider>
            <p>sfsfds</p>
            <Button style="float: right; margin-bottom: 5px" size="small">回复</Button>
            <Divider></Divider>
            <p>vvvvsdfs</p>
            <Button style="float: right; margin-bottom: 5px" size="small">回复</Button>
            <Divider></Divider>
            <p>aaaasdfsdfaaaaaaaa</p>
            <Button style="float: right; margin-bottom: 5px" size="small">回复</Button>
            <Divider></Divider>
            <p>nhgnhg</p>
            <Button style="float: right; margin-bottom: 5px" size="small">回复</Button>
        </Card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                remark: '',
                remarkReviewTitle: '20条评论'
            }
        }
    }
</script>
<style lang="less" scoped>
    .remark-container {
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px
    }
    .submit-remark {
        margin-top: 10px
    }
</style>
