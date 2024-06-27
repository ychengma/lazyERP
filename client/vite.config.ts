import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue' 
import path from "path"
 
// https://vitejs.dev/config/
export default defineConfig(({command,mode}) => {
  let env = loadEnv(mode,process.cwd())
  console.log("------",env)
  return {
    plugins: [
    vue(),
	],
    resolve:{
      alias:{
        "@":path.resolve('./src')  //ajouter les alias
      }
    },
    css:{
      preprocessorOptions:{
        scss:{
          javascriptEnable:true,
          additionalData:'@import "./src/style/variable.scss";',
        }
      }
    },
    server:{  //congifurer un proxy pour le contournement des restrictions de domine
      port:8080,
      host:'0.0.0.0',
      open:true,
      proxy:{
          [env.VITE_APP_BASE_API]:{
            target:env.VITE_SERVER,
            changeOrigin:true,
            //rewrite:(path)=> path.replace('/^\/aip/','')
            //rewrite:(path)=> path.replace(env.VITE_APP_BASE_API,'/api')
          }
      }
    }
  }
})