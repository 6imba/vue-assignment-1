<template>
    <!-- <SpinnerComponent v-if="!users"/>
    <UsersList v-if="users" :users="users" @sort-users="sortUsers"/> -->

    <!-- {{$store.state.users_module}} <br>
    Null value: {{$store.state.users_module.users}} <br>
    {{$store.state.users == null}} -->
    <!-- <SpinnerComponent v-if="!$store.state.users"/> -->

    <SpinnerComponent v-if="!getUsersState"/>
    <UsersList v-if="getUsersState"/>
</template>
  
<script>
    import SpinnerComponent from './SpinnerComponent.vue'
    import UsersList from './UsersList.vue'
    import {mapGetters,mapActions} from 'vuex'

    export default {
        name: 'HomePage',
        components: {
            SpinnerComponent,
            UsersList
        },
        methods:{
            ...mapActions(["setUsersState"]),
        },
        mounted(){
            this.setUsersState()
        },
        computed: mapGetters(["getUsersState"])

    }
</script>
  
  