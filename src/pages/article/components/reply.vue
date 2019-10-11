<template>
    <Modal
            v-model="showReply"
            :closable="false"
            :mask-closable="false"
            @on-ok="submit"
            @cancel="cancel"
            title="评论"
            ok-text="提交"
    >
        <Input
                type="textarea"
                :maxlength="200"
                placeholder="请输入评论"
                :rows="3"
        />
    </Modal>
</template>
<script>
    export default {
        props: {
            that: {}
        },
        data() {
            return {
                showReply: false
            }
        },
        methods: {
            submit() {
                this.showReply = false
            },
            cancel() {
                this.showReply = false
            }
        }
    }
</script>
