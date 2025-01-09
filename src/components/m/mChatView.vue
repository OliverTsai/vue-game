<template>
    <div class="chatContainer">
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
</template>

<script setup>

import { ref, computed } from 'vue'

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

</script>

<style lang="scss">

.chatContainer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%; /* 滿屏寬度 */
    height: 10rem; /* 固定高度 */
    display: flex; /* 父容器使用 flex 布局，方便背景調整 */
    align-items: center;
    justify-content: center;

    .chatBag {
        position: relative;
        width: 100%; /* 填滿父容器 */
        height: 100%; /* 填滿父容器 */
        background-image: url('../../assets/chat-bg.png');
        background-size: 1080px 827px; /* 使用圖片的實際大小，確保比例正確 */
        background-position: center center; /* 圖片居中 */
        background-repeat: no-repeat; /* 防止圖片重複 */

        .chatRoom {
        display: flex;
        justify-content: center;
        // height: 100%;

        .chatTitle{
            display: flex;
            padding: 1rem;
        }

        .chatBody{
            height: 5rem;
        }
    }
    }
}

</style>