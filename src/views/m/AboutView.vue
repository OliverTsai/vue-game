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
        <div class="userImg"><img src="../../assets/user/user01.png"></div>
        <div class="mbodyListBox p-3">
          <button class="btn btn-primary" @click="buttonTXT('銀行')">銀行</button>
          <button class="btn btn-primary" @click="buttonTXT('衣櫃')">衣櫃</button>
          <button class="btn btn-primary" @click="buttonTXT('商店')">商店</button>
        </div>
      </div>
      <div>
        <router-link to="/game"><button class="btn btn-success">進入遊戲</button></router-link>
      </div>
      <div class="chatBag">
        <div class="chatRoom">
          <div class="chatTitle">
            <button class="btn btn-primary" @click="setActiveTab('一般')">一般</button>
            <button class="btn btn-primary" @click="setActiveTab('公會')">公會</button>
            <button class="btn btn-primary" @click="setActiveTab('私聊')">私聊</button>
            <button class="btn btn-primary" @click="setActiveTab('系統')">系統</button>
          </div>
        </div>
        <div v-for="(msg, index) in activeMessages" :key="index">
          {{ msg }}
        </div>
        <div class="inputArea">
          <input v-model="newMessage" type="text" placeholder="輸入訊息" />
          <button class="btn btn-primary" @click="addMessage">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import headView from '@/components/m/mHeadView.vue'

import { ref, onMounted, computed } from 'vue'

const generalMessages = ref(['一般訊息 1', '一般訊息 2'])
const guildMessages = ref(['公會訊息 1', '公會訊息 2'])
const privateMessages = ref(['私聊訊息 1', '私聊訊息 2'])
const systemMessages = ref(['系統訊息 1', '系統訊息 2'])

const activeTab = ref('一般')
const newMessage = ref('')

// 根據當前的 Tab 顯示對應的訊息
const activeMessages = computed(() => {
  switch (activeTab.value) {
    case '公會':
      return guildMessages.value
    case '私聊':
      return privateMessages.value
    case '系統':
      return systemMessages.value
    default:
      return generalMessages.value
  }
})

// 設置當前活動的 Tab
function setActiveTab(tab) {
  activeTab.value = tab
}

function buttonTXT(TXT){
  alert(TXT)
}

// 將輸入的訊息新增到對應的陣列
function addMessage() {
  if (!newMessage.value.trim()) return
  switch (activeTab.value) {
    case '公會':
      guildMessages.value.push(newMessage.value)
      break
    case '私聊':
      privateMessages.value.push(newMessage.value)
      break
    case '系統':
      systemMessages.value.push(newMessage.value)
      break
    default:
      generalMessages.value.push(newMessage.value)
  }
  newMessage.value = '' // 清空輸入欄位
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
.chatBag{
  background-image: url('../../assets/chat-bg.png');
  background-size: cover; /* 背景自動縮放填滿 */
  background-position: center; /* 背景居中 */
  background-repeat: no-repeat; /* 背景不重複 */
  .chatRoom {
    display: flex;
    justify-content: center;
    height: 100%;

    .chatTitle{
      display: flex;
      padding: 1rem;
    }

    .chatBody{
      height: 5rem;
    }
  }
}

.inputArea {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}
</style>