import axios from 'axios';
import {useRoute} from 'vue-router'
import router from '../../routes.js'


const state = {
    user: '',
}

const getters = {
    getUserState: state => state.user
}

const mutations = {
    setUserState: (state,user) => {
        state.user = user
    }
}

const actions = {
    async setUserState({commit}){
        try{
            const route = useRoute();
            let response = await axios.get(`https://reqres.in/api/users/${route.params.id}`)
            commit("setUserState", response.data.data)
        }catch(e){
            if(e.request.status){
                alert("User not found!")
                router.push('/')
            }
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}