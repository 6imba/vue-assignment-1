import axios from 'axios'

const state = {
    defaultUsers: null,
    users: null,
}

const getters = {
    getUsersState: state => state.users
}

const mutations = {
    setUsersState: (state,usersList) => {
        // console.log(usersList)
        state.defaultUsers = usersList
        state.users = usersList
        // console.log(state.defaultUsers)
        // console.log(state.users)
        // console.log(state.users[1])
        // console.log(state.defaultUsers[1])
    },
    sortUsersMethods(state,base){
        if(base == "none"){
            state.users = state.defaultUsers
        }
        else{
            let names = state.users.map(user=>user[base])
            let sortName = names.sort()
            let sortList = sortName.map(name => state.users.find((user) => user[base] == name))
            state.users = sortList
        }
    }
}

const actions = {
    async setUsersState({commit}){
        let response = await axios.get("https://reqres.in/api/users?delay=1")
        commit("setUsersState", response.data.data)
    },
    sortUsersAction({commit},base){
        commit("sortUsersMethods", base)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}