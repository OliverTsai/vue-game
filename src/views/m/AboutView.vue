<template>
  <div class="mbodyListBox p-3">
    <div class="mbodyListRow">
      <div class="mbodyListLeft"><img src="../../assets/logo3.png"></div>
      <div class="mbodyListRight">Lv.50 10000000000000</div>
    </div>
    <div class="mbodyListRow">
      <div class="mbodyListBox p-3">
        <button class="btn btn-primary">公會</button>
        <button class="btn btn-primary">好友</button>
        <button class="btn btn-primary">儲值</button>
      </div>
      <div class="userImg"><img src="../../assets/user/user01.png"></div>
      <div class="mbodyListBox p-3">
        <button class="btn btn-primary">銀行</button>
        <button class="btn btn-primary">衣櫃</button>
        <button class="btn btn-primary">商店</button>
      </div>
    </div>
    <div>
      <button class="btn btn-success">進入遊戲</button>
    </div>
    <div class="chatRoom">
      <div class="chatTitle">
        <button class="btn btn-primary">一般</button>
        <button class="btn btn-primary">公會</button>
        <button class="btn btn-primary">私聊</button>
        <button class="btn btn-primary">系統</button>
      </div>
    </div>
    <div v-for="raw in raws" :key="raw.name">
      {{ raw.msg }}
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const raws = ref([
  {name: '一般', msg: '一般訊息'},
  {name: '公會', msg: '公會訊息'},
  {name: '私聊', msg: '私聊訊息'},
  {name: '系統', msg: '系統訊息'},
])

// 第一次連接
onMounted(async () => {
  console.log('開始')
})

</script>

<style lang="scss">

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

.chatRoom {
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: rgb(255, 230, 0);

  .chatTitle{
    display: flex;
    padding: 1rem;
  }

  .chatBody{
    height: 5rem;
  }
}
</style>