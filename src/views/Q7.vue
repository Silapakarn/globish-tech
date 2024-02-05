<template>
  <div class="question">
            <div class="Question">
              <div class="title">
                <h1>Q7</h1>
                <h5>{{ QUESTION_Q7 }}</h5>
              </div>
              <!-- <div>Checked names: {{ checkedNames }}</div> -->
              <div class="content">
                <button
                  type="submit"
                  class="button_Q"
                  @click="handleButtonClick('Instagram')"
                  :class="{ clicked: checkedNames.includes('Instagram') }"
                >
                  {{ CHOICE_A_Q7 }}
                </button>
                <button
                  type="submit"
                  class="button_Q"
                  @click="handleButtonClick('Facebook')"
                  :class="{ clicked: checkedNames.includes('Facebook') }"
                >
                  {{ CHOICE_B_Q7 }}
                </button>
                <button
                  type="submit"
                  class="button_Q"
                  @click="handleButtonClick('อื่นๆ ( โปรดระบุ )')"
                  :class="{ clicked: checkedNames.includes('อื่นๆ ( โปรดระบุ )') }"
                >
                  {{ CHOICE_C_Q7 }}
                </button>
              </div>
                  <!-- <p>Message is: {{ recommendedByFriend }}</p> -->
                  <input
                    v-model="recommendedByFriend"
                    placeholder="เพื่อนแนะนำมา"
                    class="recommended_input"
                    :disabled="checkDisabled"
                  />
            </div>
            <div class="button_custom">
              <router-link to="/q6">
                <button type="submit" class="button-31">กลับ</button>
              </router-link>
              <router-link to="/result">
                <button type="submit" class="button-32" @click="changeText(recommendedByFriend)">ดูผลลัพธ์</button>
              </router-link>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { useStore } from 'vuex'
import { QUESTION } from '@/utils/constants'


export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Q7',
  setup () {
    const store = useStore()
    const checkedNames = ref<string[]>([])
    const recommendedByFriend = ref<string>('')
    var checkDisabled: any
    var QUESTION_Q7 = QUESTION.QUESTION_Q7
    var CHOICE_A_Q7 = QUESTION.CHOICE_A_Q7
    var CHOICE_B_Q7 = QUESTION.CHOICE_B_Q7
    var CHOICE_C_Q7 = QUESTION.CHOICE_C_Q7


    const handleButtonClick = (value: string) => {
      if (value === 'อื่นๆ ( โปรดระบุ )') {
        checkDisabled = false
      } else {
        checkDisabled = true
      }
      if (!checkedNames.value.includes(value)) {
        checkedNames.value.push(value)
        store.commit('addSelectedLastValue', value)
      } else {
        checkedNames.value = checkedNames.value.filter((name) => name !== value)
        store.commit('removeSelectedLastValue', value)
      }
    }

    const changeText = (value: string) => {
      store.commit('addText', value)
    }

    return { checkedNames, handleButtonClick, recommendedByFriend, changeText, checkDisabled, QUESTION_Q7, CHOICE_A_Q7, CHOICE_B_Q7, CHOICE_C_Q7 }
  }
})
</script>

<style scoped>
.question {
  width: 725px;
  background-color: rgb(125, 214, 255);
  justify-content: center;
}
.Question {
  padding: 2vh;
  border: 1px solid rgb(19, 19, 19);
  background-color: rgb(255, 255, 255);
  border-radius: 20px;

}
.title h1 {
  color: rgb(202, 202, 202);
  font-size: 50px;
  font-style:oblique;
}

.title h5 {
  padding-top: 1vh;
  color: rgb(39, 39, 39);
  font: bolder;
  font-style: italic;
}

.button_custom {
  display: flex;
  justify-content: space-between;
}

.content{
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
  font-style: italic;
  text-align: left;
}

.button_Q:hover,
.button_Q.clicked {
  background-color: #f47055;
  color: #fff;
}

/* CSS */
.button-32 {
  font-size: 30px;
  padding: 1vh 10vh;
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
  padding: 1vh 10vh;
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

.recommended {
  /* margin-top: 40px; */
  /* border: 2px solid rgb(255, 145, 0); */
}

.recommended_input {
  margin-top: 3vh;
  font-size: 15px;
  padding: 20px;
  width: 80%;
  border: 2px solid rgb(255, 255, 255);
  border-bottom: 2px solid #1b1b1b;
}

</style>
