<template>
  <div class="question">
            <div class="header">
                <h1>TEST1</h1>
            </div>
            <div class="Question">
              <div class="title">
                <h1>Q1</h1>
                <h2>{{ QUESTION_Q1 }}</h2>
              </div>
              <!-- <div>Checked names: {{ checkedNames }}</div> -->
              <div class="content">
                <button type="submit" class="button_Q" @click="handleButtonClick(10)">{{ CHOICE_A_Q1 }}</button>
                <button type="submit" class="button_Q" @click="handleButtonClick(20)">{{ CHOICE_B_Q1 }}</button>
                <button type="submit" class="button_Q" @click="handleButtonClick(30)">{{ CHOICE_C_Q1 }}</button>
              </div>
            </div>
            <!-- <div class="button_custom">
              <router-link to="/">
                <button type="submit" class="button-31">กลับ</button>
              </router-link>
              <router-link to="/q2">
                <button type="submit" class="button-32">ต่อไป</button>
              </router-link>AboutView
            </div> -->
        </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { QUESTION } from '@/utils/constants'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Q1',
  setup () {
    const checkedNames = ref<any[]>([])
    const store = useStore()
    var QUESTION_Q1 = QUESTION.QUESTION_Q1
    var CHOICE_A_Q1 = QUESTION.CHOICE_A_Q1
    var CHOICE_B_Q1 = QUESTION.CHOICE_B_Q1
    var CHOICE_C_Q1 = QUESTION.CHOICE_C_Q1

    const handleButtonClick = (value: any) => {
      if (!checkedNames.value.includes(value)) {
        checkedNames.value.push(value)
        store.commit('addSelectedValue', value) // Dispatch the mutation to add a value
      } else {
        checkedNames.value = checkedNames.value.filter((name) => name !== value)
        store.commit('removeSelectedValue', value) // Dispatch the mutation to remove a value
      }
    }

    return { checkedNames, handleButtonClick, QUESTION_Q1, CHOICE_A_Q1, CHOICE_B_Q1, CHOICE_C_Q1 }
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
  height: 800px;
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

</style>
