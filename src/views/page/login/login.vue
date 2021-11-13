<template>
  <div class="login-content">
    <div class="login-form">
      <h1>LOGIN</h1>
      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
      >
        <FormItem prop="account">
          <Input
            type="text"
            v-model="formInline.account"
            placeholder="Username"
          >
          <Icon
            type="ios-person-outline"
            slot="prepend"
          ></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="Password"
          >
          <Icon
            type="ios-lock-outline"
            slot="prepend"
          ></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            @click="handleSubmit('formInline')"
            class="form-submit"
          >登录</Button>
        </FormItem>
      </Form>
    </div>
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#0119d6"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi login-bg"
    >
    </vue-particles>
  </div>
</template>

<script>
import firstImg from '@/assets/img/1.jpg';
import secondImg from '@/assets/img/2.jpg';
import thirdImg from '@/assets/img/bg.jpg';
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'));
      } else {
        if (this.formCustom.passwdCheck !== '') {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwdCheck');
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password again'));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error('The two input passwords do not match!'));
      } else {
        callback();
      }
    };
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Age cannot be empty'));
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please enter a numeric value'));
        } else {
          if (value < 18) {
            callback(new Error('Must be over 18 years of age'));
          } else {
            callback();
          }
        }
      }, 1000);
    };

    return {
      formInline: {
        account: '',
        password: ''
      },
      ruleInline: {
        account: [
          {
            required: true,
            message: 'Please fill in the account name',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please fill in the password.',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: 'The password length cannot be less than 6 bits',
            trigger: 'blur'
          }
        ]
      },
      timer: null,
      imgCount: 0
    };
  },
  mounted() {
    // this.setInfini();
  },
  beforeDestroy() {
    // clearInterval(this.timer);
  },
  methods: {
    // setInfini(){
    // var dom = document.getElementById('loginBgId'),imgUrl;
    // this.timer = setInterval(() => {
    //     if (!this.imgCount) {
    //         imgUrl = firstImg;
    //         this.imgCount++;
    //     } else if (this.imgCount === 1) {
    //         imgUrl =secondImg;
    //         this.imgCount++;
    //     } else {
    //         imgUrl = thirdImg;
    //         this.imgCount = 0;
    //     }
    //     dom.style.backgroundImage = imgUrl;
    // }, 3000);
    // },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch('login', this.formInline)
            .then((res) => {
              if (res.code == '200') {
                const defaultRouter = Object.values(res.result.menu)[0].permission;
                this.$router.push({ name: defaultRouter });
              } else {
                this.$Message.error(res.desc);
              }

            })
            .catch((err) => { });
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.login-content {
  width: 100%;
  height: 100%;
  .login-bg {
    background-image: url('../../../assets/img/2.jpg');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    background-clip: content-box;
    background-size: cover;
  }
}

.login-form {
  color: #fff;
  width: 400px;
  //   height: 300px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  left: 50%;
  top: 50%;
  margin: -150px 0 0 -200px;
  padding: 60px;
  h1 {
    margin: 16px 0 20px 0;
    text-align: center;
    font-size: 30px;
  }
  .form-submit {
    width: 100%;
    background: none;
    border: none;
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  }
  .form-submit:focus {
    box-shadow: none;
  }
}
</style>
