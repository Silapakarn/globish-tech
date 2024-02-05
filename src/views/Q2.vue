<template>
  <div class="question">
            <div class="header">
                <h1>TEST1</h1>
            </div>
            <div class="Question">
              <div class="title">
                <h1>Q2</h1>
                <h2>คุณต้องการพัฒนาภาษาอังกฤษเพื่ออะไร ?</h2>
              </div>
              <!-- <div>Checked names: {{ checkedNames }}</div> -->
              <div class="content">
                <button type="submit" class="button_Q" @click="handleButtonClick(30)">การทำงาน</button>
                <button type="submit" class="button_Q" @click="handleButtonClick(10)">เที่ยวต่างประเทศ</button>
                <button type="submit" class="button_Q" @click="handleButtonClick(20)">ใช้ในชีวิตประจำวัน</button>
              </div>
            </div>
            <!-- <div class="button_custom">
              <router-link to="/q1">
                <button type="submit" class="button-31">กลับ</button>
              </router-link>
              <router-link to="/q3">
                <button type="submit" class="button-32">ต่อไป</button>
              </router-link>
            </div> -->
        </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Q2',
  setup () {
    const store = useStore()
    const selectedValues = store.getters.getSelectedValues
    console.log('🚀 ~ Q2:', selectedValues)
    const checkedNames = ref<any[]>([])

    const handleButtonClick = (value: any) => {
      console.log('🚀 ~ handleButtonClick ~ value:', value)
      if (!checkedNames.value.includes(value)) {
        checkedNames.value.push(value)
        store.commit('addSelectedValue', value) // Dispatch the mutation to add a value
      } else {
        checkedNames.value = checkedNames.value.filter((name) => name !== value)
        store.commit('removeSelectedValue', value) // Dispatch the mutation to remove a value
      }
    }

    return { checkedNames, handleButtonClick }
  }
})
</script>

<style scoped>
.question {
  width: 720px;
  height: 70vh;
  background-color: rgb(125, 214, 255);
  justify-content: center;
}

.carousel {
 /* border: 2px solid rgb(255, 0, 170); */
 width: 720px;
 height: 1600px;
}

.header h1 {
  color: rgb(125, 214, 255);
}

.Question {
  margin-left: 5vh;
  /* margin-top: 5vh; */
  padding: 2vh;
  border: 1px solid rgb(19, 19, 19);
  /* color: rgb(255, 0, 0); */
  background-color: rgb(255, 255, 255);
  height: 850px;
  width: 40vh;
  border-radius: 20px;

}
.title h1 {
  /* border: 2px solid rgb(30, 255, 0); */
  padding-top: 4vh;
  color: rgb(202, 202, 202);
  font-size: 60px;
  font-style:oblique;
}

.title h2 {
  padding-top: 1vh;
  color: rgb(39, 39, 39);
  font: bolder;
  font-style: italic;
}

.button_custom {
  /* margin-left: 2vh; */
  margin-top: 50px;
  margin: 3vh;
  /* margin-left: 1vh; */
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  /* border: 2px solid rgb(255, 145, 0); */
}

.content{
  /* border: 2px solid rgb(255, 145, 0); */
  margin-top: 4vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
}

.button_Q {
  width: 90%;
  margin-top: 1vh;
  padding: 40px;
  border-radius: 30px;
  border: 2px solid rgb(232, 232, 232);
  background-color: white;
  font-size: 25px;
  text-align: left;
}

.button_Q:hover {
  background-color: #f47055;
  color: #fff;
}

/* CSS */
.button-32 {
  font-size: 30px;
  /* margin: 10px; */
  padding: 1vh 1vh;
  background-color: #ffb700;
  border: 1px solid black;
  border-radius: 50px;
  color: #000;
  cursor: pointer;
  font-weight:bolder;
  text-align: center;
  transition: 200ms;
  width: 100%;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-bottom: 12vh;
}

.button-32:not(:disabled):hover,
.button-32:not(:disabled):focus {
  outline: 0;
  background: #f49c03;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}

.button-32:disabled {
  filter: saturate(0.2) opacity(0.5);
  -webkit-filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
}

.button-31 {
  font-size: 30px;
  /* margin: 10px; */
  padding: 1vh 6vh;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 50px;
  color: #000;
  cursor: pointer;
  font-weight:bolder;
  text-align: center;
  transition: 200ms;
  width: 100%;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-bottom: 12vh;
}

.button-31:not(:disabled):hover,
.button-31:not(:disabled):focus {
  outline: 0;
  background: #f49c03;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}

.button-31:disabled {
  filter: saturate(0.2) opacity(0.5);
  -webkit-filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
}

</style>
