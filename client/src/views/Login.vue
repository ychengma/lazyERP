<template>
    <div class='login'>
        <div class='box'>
            <el-form 
            size="small"
            ref="loginFormRef" 
            :model="dataForm"
            status-icon
            :rules="rules"
            label-width="80px">
                <el-form-item label="Nom" prop="userId">
                    <el-input v-model="dataForm.userId" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Mot de pass" prop="passwd">
                    <el-input v-model="dataForm.passwd" type="password"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(loginFormRef)">Se connecter</el-button>
                    <el-button @click="resetForm(loginFormRef)">Anuller</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref ,onMounted} from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router';
const loginFormRef = ref<FormInstance>()
const router = useRouter()
// rule: est l'objject de la vérification
const validateUserId = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Le nom ne peut pas être vide'))
  }else if(/^\w{4,10}$/.test(value)){
    callback()
  } else {
    callback(new Error('La tail du comopt faut superfier 5'))
  }
}
const validatePasswd = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else {
    callback()
  }
}

const dataForm = reactive({
  passwd: '',
  userId: '', 
})
//Ajouter une regle de la vérification
const rules = reactive<FormRules<typeof dataForm>>({
  passwd: [{ validator: validatePasswd, trigger: 'blur' }],
  userId: [{ validator: validateUserId, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
   
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
onMounted(()=>{
 
})
</script>

<style scoped lang="scss">
.login{
    width:100vw;
    height:100vh;
    background: linear-gradient(to bottom,#142334,#6894c7);
    display:flex;
    justify-content:center;
    align-items:center;
    .box{
        width:400px; 
        border:1px solid #fff;
        padding: 20px;
        ::v-deep .el-form-item__label{
          color: #fff;
        }
    }
}
</style>