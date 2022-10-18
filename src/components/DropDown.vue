<template>
    <div class="dropdown">
        <label for="sorting">Sort By:</label>
        <select id="sorting" @change="sortUsers" v-model="sort">
            <option value="none">None</option>
            <option value="first_name">FirstName</option>
            <option value="last_name">LastName</option>
        </select>
    </div>
</template>
  
<script>
    import {mapActions} from 'vuex'

    export default {
      name: 'DropDown',
      data(){
        return{
            sort:'none'
        }
      },
      methods:{
            ...mapActions(["sortUsersAction"]),
            sortUsers(){
                this.sortUsersAction(this.sort)
            }
        },
    }
</script>
  
<style scoped>
    .dropdown{
        text-align: right;
        margin: 30px;
    }
    
</style>
  