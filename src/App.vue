<template>
    <navbar id="navbar"></navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import MyDialog from './components/UI/MyDialog.vue';

export default {
    components: {
    Navbar,
    MyDialog
    },
    data(){
        return{
            dialogVisible:false
        }
    },
    methods:{
        
    }
}


</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Comfortaa");
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}


</style>