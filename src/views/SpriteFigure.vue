<template>
    <!--    <div class="box">-->
    <!--        <img src="../assets/sprite.png" alt="Sprite">-->
    <!--        <div class="img"></div>-->
    <!--    </div>-->
    <div class="box">
        <span class="icon1"></span>
        <span class="icon2"></span>
        <span class="icon3"></span>
        <span class="icon4"></span>
    </div>
</template>

<script>
    export default {
        name: "SpriteFigure"
    }
</script>

<style scoped>
    .box {
        width: 100%;
        height: 100%;
        background-color: coral;
        margin: 60px auto;
    }

    span {
        display: inline-block;
        width: 154px;
        height: 154px;
        background-image: url(../assets/sprite.png);
        background-repeat: no-repeat;
    }

    .icon1 {
        background-position: 0 0;
    }
    .icon2 {
        background-position: 0 -154px;
    }
    .icon3 {
        background-position: -154px 0;
    }
    .icon4 {
        background-position: -308px -154px;
    }

    /*img {*/
    /*    margin-top: 60px;*/
    /*    background-position: -180px ,-180px;*/
    /*}*/

</style>
