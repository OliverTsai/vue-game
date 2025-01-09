<template>
  <headView />
  <div class="mBg">
    <div class="mbodyListBox p-3">
      <!-- <div class="mbodyListRow">
        <div class="mbodyListLeft"><img src="../../assets/logo3.png"></div>
        <div class="mbodyListRight">Lv.50 10000000000000</div>
      </div> -->
      <div class="mbodyListRow mt-3">
        <div class="mbodyListBox p-3">
          <button class="btn btn-primary" @click="buttonTXT('公會')">公會</button>
          <button class="btn btn-primary" @click="buttonTXT('好友')">好友</button>
          <button class="btn btn-primary" @click="buttonTXT('儲值')">儲值</button>
        </div>
        <!-- <div class="userImg"><img src="../../assets/user/user01.png"></div> -->
        <div class="mbodyListBox p-3">
          <button class="btn btn-primary" @click="buttonTXT('銀行')">銀行</button>
          <button class="btn btn-primary" @click="buttonTXT('衣櫃')">衣櫃</button>
          <button class="btn btn-primary" @click="buttonTXT('商店')">商店</button>
        </div>
      </div>
      <div>
        <router-link to="/game"><button class="btn btn-success">進入遊戲</button></router-link>
      </div>
      <chat />
    </div>
  </div>
</template>

<script setup>

import headView from '@/components/m/mHeadView.vue'
import chat from '@/components/m/mChatView.vue'

import { onMounted } from 'vue'


function buttonTXT(TXT){
  alert(TXT)
}

// 第一次連接
onMounted(async () => {
  console.log('開始')
})

</script>

<style lang="scss">

.mBg{
  position: relative;
  background-image: url('../../assets/bg.png');
  background-size: cover; /* 背景自動縮放填滿 */
  background-position: center; /* 背景居中 */
  background-repeat: no-repeat; /* 背景不重複 */
  width: 100%; /* 設置寬度 */
  height: 100vh; /* 設置高度，覆蓋整個視窗 */
}

.mbodyListBox {
  display: flex;
  flex-direction:column;
  gap:2rem;
}

.mbodyListBox .mbodyListRow {
  display: flex;
  justify-content: space-between;
  padding: 3px 0px 3px 0px;
}

.mbodyListBox .mbodyListRow .mbodyListLeft {
  width: 6rem;
  height: 3rem;
  text-align: end;
  white-space: nowrap;
  text-overflow: ellipsis;

  img {
    width: 100%;
    height: 100%;
  }
}

.userImg {
  width: 9rem;
  height: 15em;
  img{
    width: 100%;
    height: 100%;
  }
}

.inputArea {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.footer {
  position: fixed;
  bottom: 0; /* 固定在底部 */
  left: 0;
  width: 100%; /* 佔滿寬度 */
  height: 10rem; /* 高度固定 */
  background-color: #333; /* 底部背景色 */
  color: white; /* 文字顏色 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; /* 文字居中 */
  z-index: 1000; /* 確保區塊在最上層 */
}
</style>