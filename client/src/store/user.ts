import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    
    state: () => {
      return { 
        user: {userId:''},
        fold:false 
      }
    },
    actions:{ //la methode
        setUser(user:object){
          this.user = user
        },
        clearUser(){
          sessionStorage.clear()
          this.user.userId =''
        }
    }
})