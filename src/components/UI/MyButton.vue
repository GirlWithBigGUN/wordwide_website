<template>
    <button id="btn" class="btn">
        <slot>

        </slot>
        <placeholder>
            
        </placeholder>
    </button>
</template>

<script>
export default {
    name:'my-button'
}

</script>

<style scoped>
.btn {
    padding: 10px 15px;
    background: none;
    color: rgb(255, 255, 255);
    border: 0px solid rgb(255, 255, 255);
    font-family: 'Comfortaa', sans-serif;
    font-size: 23px;
    -webkit-text-stroke-width: 0.25px;
    -webkit-text-stroke-color: white;
    letter-spacing: 0.0625em;
    cursor:pointer;
    
}
.btnscrolled {
    padding: 10px 15px;
    background: none;
    color: rgb(0, 0, 0);
    border: 0px solid rgb(255, 255, 255);
    font-family: 'Comfortaa', sans-serif;
    font-size: 23px;
    -webkit-text-stroke-width: 0.25px;
    -webkit-text-stroke-color: rgb(0, 0, 0);
    letter-spacing: 0.0625em;
    cursor:pointer;
}
</style>