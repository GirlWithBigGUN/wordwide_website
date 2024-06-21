<template>
    <button class="btn_two">
        <slot>

        </slot>
        <placeholder>
            
        </placeholder>
    </button>
</template>

<script>
export default {
    name:'my-button-gray'
}
</script>

<style scoped>
.btn_two {
    padding: 0px 0px;
    background: rgb(153, 151, 151,77%);
    color: rgb(255, 255, 255);
    border: 0px solid rgb(255, 255, 255);
    font-family: 'Comfortaa', sans-serif;
    font-size: 13px;
    letter-spacing: 0.0625em;
    border-radius: 30px;
    height: 30px;
    width: 15%;
    top:-1px;
    cursor:pointer;
}
</style>