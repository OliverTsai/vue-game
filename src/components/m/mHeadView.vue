<template>
    <div class="headBg">
        <div class="headTitle">
            <div class="imgBox"><img src="../../assets/logo3.png"></div>
            <div class="balanceBox"><img src="../../assets/top-balance.png"></div>
            <div class="lvBox">
                <p>56</p>
                <!-- <img src="../../assets/top-lv.png"> -->
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.headBg{
    background-color: rgb(78, 67, 34);

    .headTitle{
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 0.5rem;
        gap:1rem;
    }

    .headBox{
        display: flex;
        gap:1rem;
    }
}

.imgBox{
    width: 6rem;
    height: 3rem;
    img{
        width:100%;
        height:100%;
    }
}

.balanceBox{
    width: 10rem;
    height: 100%;
    img{
        width:100%;
        height:100%;
    }
}

.lvBox{
    position: relative;
    width: 6rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    background-image: url('../../assets/top-lv.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    p{
        margin: 0;
        margin-left: 1rem;
        z-index: 10;
        // padding-top: 0.5rem;
    }
}

</style>