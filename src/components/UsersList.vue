<template>
    <h2>User List</h2>
    <DropDown/>
    <div class="grid-container">
        <div v-for="user in getUsersState" class="grid-item" :key="user.id">
            <img :src="user.avatar" alt="person image" >
            <h3><router-link :to="{path:'/profile/'+user.id}"> {{user.first_name}} {{user.last_name}} </router-link></h3>
        </div>
    </div>
</template>
  
<script>
    import DropDown from "./DropDown.vue"
    import {mapGetters} from 'vuex'
    export default {
      name: 'UsersList',
      props:{
        users:Array,
      },
      components:{
        DropDown,
      },
      computed: mapGetters(["getUsersState"])
    }
</script>
  
<style scoped>
    .grid-container {
        display: grid;
        /* background-color: red; */
        grid-template-columns: auto auto auto;
        gap: 50px;
        margin: 30px;
    }
    .grid-item{
        background-color: rgb(146, 146, 236);
    }
</style>
  