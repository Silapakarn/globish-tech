<template>
  <div class="question">
            <div class="Question">
              <div class="title">
                <h1>Q3</h1>
                <h4>{{ QUESTION_Q3 }}</h4>
              </div>
              <!-- <div>Checked names: {{ checkedNames }}</div> -->
              <div class="content">
                <button type="submit" :class="{ 'button_Q': true, 'clicked': checkedNames.includes(30) }" @click="handleButtonClick(30)">{{ CHOICE_A_Q3 }}</button>
                <button type="submit" :class="{ 'button_Q': true, 'clicked': checkedNames.includes(20) }" @click="handleButtonClick(20)">{{ CHOICE_B_Q3 }}</button>
                <button type="submit" :class="{ 'button_Q': true, 'clicked': checkedNames.includes(10) }" @click="handleButtonClick(10)">{{ CHOICE_C_Q3 }}</button>
              </div>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import 'vue3-carousel/dist/carousel.css'
import { QUESTION } from '@/utils/constants'


export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Q3',
  setup () {
    const store = useStore()
    const checkedNames = ref<any[]>([])
    var QUESTION_Q3 = QUESTION.QUESTION_Q3
    var CHOICE_A_Q3 = QUESTION.CHOICE_A_Q3
    var CHOICE_B_Q3 = QUESTION.CHOICE_B_Q3
    var CHOICE_C_Q3 = QUESTION.CHOICE_C_Q3

    const handleButtonClick = (value: any) => {
      if (!checkedNames.value.includes(value)) {
        checkedNames.value.push(value)
        store.commit('addSelectedValue', value) // Dispatch the mutation to add a value
      } else {
        checkedNames.value = checkedNames.value.filter((name) => name !== value)
        store.commit('removeSelectedValue', value) // Dispatch the mutation to remove a value
      }
    }

    return { checkedNames, handleButtonClick, QUESTION_Q3,  CHOICE_A_Q3, CHOICE_B_Q3, CHOICE_C_Q3 }
  }
})
</script>

<style scoped>
.question {
  background-color: rgb(125, 214, 255);
  justify-content: center;
}

.Question {
  padding: 2vh;
  border: 1px solid rgb(19, 19, 19);
  background-color: rgb(255, 255, 255);
  width: 60vh;
  border-radius: 20px;
}
.title h1 {
  padding-top: 2vh;
  color: rgb(202, 202, 202);
  font-size: 60px;
  font-style:oblique;
}

.title h4 {
  padding-top: 1vh;
  font-size: 19px;
  color: rgb(39, 39, 39);
  font: bolder;
  font-style: italic;
}

.button_custom {
  margin-top: 50px;
  margin: 3vh;
  display: flex;
  justify-content: space-between;
}

.content{
  margin-top: 2vh;
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
  font-size: 15px;
  text-align: left;
}

.button_Q:hover,
.button_Q.clicked {
  background-color: #f47055;
  color: #fff;
}

</style>
