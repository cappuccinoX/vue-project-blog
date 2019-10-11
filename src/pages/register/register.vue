<template>
    <div class="wrap">
        <Card>
            <p class="title" slot="title">注册</p>
            <Form :rules="ruleValidate" :model="basicInfo">
                <FormItem label="账户名" prop="account">
                    <Input v-model="basicInfo.account" type="text"></Input>
                </FormItem>
                <FormItem label="邮箱" prop="email">
                    <Input v-model="basicInfo.email" type="text"></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input v-model="basicInfo.password" type="text"></Input>
                </FormItem>
                <FormItem label="请确认密码" prop="passwordCopy">
                    <Input v-model="basicInfo.passwordCopy" type="text"></Input>
                </FormItem>
                <FormItem label="验证码" prop="verificationCode">
                    <Input v-model="basicInfo.verificationCode" type="text"></Input>
                </FormItem>
                <FormItem>
                    <Button class="submit" type="primary">提交</Button>
                    <Button class="cancel">返回首页</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                basicInfo: {
                    account: '',
                    email: '',
                    password: '',
                    passwordCopy: '',
                    verificationCode: ''
                },
                ruleValidate: {
                    name: [{validator: this.accountValid}]
                }
            }
        },
        methods: {
            accountValid() {},
            emailValid() {},
            passwordValid() {},
            passwordCopyValid() {},
            verfi
        }
    }
</script>
<style lang="less" scoped>
    .wrap{
        width: 400px;
        height: 600px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .title{
        text-align: center;
        font-size: 20px;
    }
    .submit{
        margin-left: 25%;
        width: 82px;
    }
    .cancel {
        margin-left: 5%;
    }
</style>
