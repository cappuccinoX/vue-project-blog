<template>
    <div class="container">
        <div class="wrap">
            <Card>
                <p class="title" slot="title">注册</p>
                <Form :rules="ruleValidate" :model="basicInfo" ref="registerForm">
                    <FormItem label="账户名" prop="account">
                        <Input v-model="basicInfo.account" type="text"></Input>
                    </FormItem>
                    <FormItem label="邮箱" prop="email">
                        <Input v-model="basicInfo.email" type="text"></Input>
                    </FormItem>
                    <FormItem label="密码" prop="password">
                        <Input type="password" v-model="basicInfo.password"></Input>
                    </FormItem>
                    <FormItem label="请确认密码" prop="passwordCopy">
                        <Input type="password" v-model="basicInfo.passwordCopy"></Input>
                    </FormItem>
                    <FormItem label="验证码" prop="verificationCode">
                        <Input v-model="basicInfo.verificationCode" type="text"></Input>
                    </FormItem>
                    <FormItem>
                        <Button class="submit" type="primary" @click="submit('registerForm')">提交</Button>
                        <Button class="cancel">返回首页</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
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
                    account: [{validator: this.accountValid, trigger: 'blur'}],
                    email: [{validator: this.emailValid, trigger: 'blur'}],
                    password: [{validator: this.passwordValid, trigger: 'blur'}],
                    passwordCopy: [{validator: this.passwordCopyValid, trigger: 'blur'}]
                }
            }
        },
        methods: {
            accountValid(rule, value, callback) {
                if(!value) {
                    callback(new Error('请输入账户名'))
                } else {
                    callback()
                }
            },
            emailValid(rule, value, callback) {
                if(!value) {
                    callback(new Error('请输入邮箱地址'))
                } else {
                    callback()
                }
            },
            passwordValid(rule, value, callback) {
                if(!value) {
                    callback(new Error('请输入密码'))
                } else {
                    if(this.basicInfo.passwordCopy) {
                        this.$refs['registerForm'].validateField('passwordCopy')
                    }
                    callback()
                }
            },
            passwordCopyValid(rule, value, callback) {
                if(!value) {
                    callback(new Error('请再输入一次密码'))
                } else if(value !== this.basicInfo.password) {
                    callback(new Error('两次输入的密码不一致'))
                } else {
                    callback()
                }
            },
            verificationCodeValid() {},
            submit(name) {
                this.$refs[name].validate(valid => {
                    if(valid) {
                        this.$Message.success('succeed')
                        // todo 注册成功，跳转至主页，且是登录状态
                    } else {
                        this.$Message.error('请正确填写表单信息')
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .container {
        background-image: url('../../assets/staticImages/background2.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
        height: 100%;
    }
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
