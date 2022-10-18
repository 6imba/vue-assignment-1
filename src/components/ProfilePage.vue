<template>
    <div>
        <!-- {{getUserState}} -->
        <h2>{{getUserState.first_name}} {{getUserState.last_name}}</h2>
        <img :src="getUserState.avatar" width="400" height="400">
        <p>{{getUserState.email}}</p>
    </div>
</template>
  
<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: 'ProfilePage',
        computed: mapGetters(["getUserState"]),
        methods: {
            ...mapActions(["setUserState"]),
        },
        beforeMount(){
            this.setUserState()
        }
    }
</script>
  
<style scoped>

</style>
  