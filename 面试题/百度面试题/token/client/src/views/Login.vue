<template>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios'
  
  const username = ref('')
  const password = ref('')
  
  const onSubmit = (values) => {
    console.log(values);
    axios.post('http://localhost:3000/login',values).then((res)=>{
      console.log(res);//后端返回的结果
    })
  }
  </script>
  
  <style lang="css" scoped>
  
  </style>


