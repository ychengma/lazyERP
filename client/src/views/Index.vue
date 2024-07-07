<template>
    <div class="index">
        <div class="left">
            <div class="logo">
                <img src="../../public/hotel.png"/>
                <p>Richesse EEP</p>
            </div>
            <el-menu 
                  router
                  active-text-color="yellowgreen"
                  background-color="#142334"
                  class="el-menu-vertical-demo"
                  default-active="2"
                  text-color="#fff">
                 <el-menu-item index="0">
                  <el-icon><HomeFilled /></el-icon>
                  Acceuil</el-menu-item>
                 <el-menu-item index="0">Donne analyser</el-menu-item>
                  <el-sub-menu index="1">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>Gesstion de compte</span>
                    </template>   
                  <el-menu-item index="/index/users">
                    <el-icon><icon-menu /></el-icon>
                    <span>Gestion des users</span>
                  </el-menu-item>
                  <el-menu-item index="/index/users">
                    <el-icon><document /></el-icon>
                    <span>Gesstion des roles</span>
                  </el-menu-item> 
                </el-sub-menu>
            </el-menu>
        </div>
        <div class="right">
            <div class="top">
              <el-menu  
              router
              :ellipsis="false"
              mode="horizontal"
              background-color="#142334"
              text-color="#fff"
              active-text-color="#ffd04b" 
            >
        <el-menu-item index="/index/home">
          <el-icon><HomeFilled /></el-icon>
          Acceuil
        </el-menu-item>
        <el-menu-item index="/index/email">Email</el-menu-item>
        <el-menu-item index="/index/message">Message</el-menu-item>
        <el-sub-menu index="4">
              <template #title>Compte</template>
                    <el-menu-item index="/index/mine">Moi</el-menu-item>
                    <el-menu-item index="/index/change-pass">modifier le mots de pass</el-menu-item>
                    <el-menu-item index="" @click="logout">deconnecter</el-menu-item>
              </el-sub-menu>
            </el-menu>
            </div>
            <div class="content">
              <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {  Document,  Menu as IconMenu,  Location,  HomeFilled,} from '@element-plus/icons-vue' 

let logout = ()=>{
    
}
</script>

<style scoped lang="scss">
.index{
    width: 100vw;
    height: 100vh;
    display: flex;
    .left {
        width: 200px;
        background-color: #142334;
        color: #fff;
        .logo{
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          padding-left: 20px; 
          img{
            height: 40px;
            width: 50px;
          }
          p{
            font-size: 16px;
            text-align: center;
            height: 50px;
            line-height: 50px;
            padding-left: 10px;
        }
        }
        .el-menu{
          border-right: none;
        }
    }
    .right{
        flex: 1;
        display: flex;
        flex-direction: column;
        .top{
            height: 60px;
            background-color: #142334;
            color: #fff;
            display: flex;
            justify-content: flex-end;
            .el-menu{
              border-bottom: none;
            }
        }
        .content{
            flex: 1;
        }
    }
}
</style>