<template>
  <div class="question">
    <div class="header">
      <h1>TEST1</h1>
    </div>
    <div class="Question">
      <div class="content">
        <h1 class="font_result">ผลลัพธ์ของคุณคือ</h1>
        <template v-if="resultScore === 'A'">
          <div class="img_result">
            <img src="../assets/image 12.png" alt="Italian Trulli">
            <h1>{{ resultScore }}</h1>
            <h2 class="globish_text">คุณรู้จัก Globish ผ่าน</h2>
            <h2>{{ text }}</h2>
            <h2>{{ recommendedByFriend }}</h2>
          </div>
        </template>
        <template v-if="resultScore === 'B'">
          <div class="img_result">
            <img src="../assets/image 13.png" alt="Italian Trulli">
            <h1>{{ resultScore }}</h1>
            <h2 class="globish_text">คุณรู้จัก Globish ผ่าน</h2>
            <h2>{{ text }}</h2>
            <h2>{{ recommendedByFriend }}</h2>
          </div>
        </template>
        <template v-if="resultScore === 'C'">
          <div class="img_result">
            <img src="../assets/image 14.png" alt="Italian Trulli">
            <h1>{{ resultScore }}</h1>
            <h2 class="globish_text">คุณรู้จัก Globish ผ่าน</h2>
            <h2>{{ text }}</h2>
            <h2>{{ recommendedByFriend }}</h2>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, ref, watch } from 'vue'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'ExamplePagination',
  setup () {
    const store = useStore()
    const selectedValues = store.getters.getSelectedValues
    console.log('🚀 ~ setup ~ selectedValues:', selectedValues)
    const selectedLastValues = store.getters.getSelectedLastValues
    const textValues = ref(store.getters.getText)
    const lastValue = ref(getLastValue())

    watch(textValues, () => {
      lastValue.value = getLastValue()
    })

    function getLastValue () {
      // Find the last non-empty value in the array
      for (let i = textValues.value.length - 1; i >= 0; i--) {
        if (textValues.value[i] !== '') {
          return textValues.value[i]
        }
      }
      return ''
    }

    var recommendedByFriend = lastValue
    console.log('🚀 ~ setup ~ recommendedByFriend:', recommendedByFriend)
    const sum = selectedValues.reduce((accumulator: any, currentValue: any) => {
      return accumulator + currentValue
    }, 0)
    console.log('🚀 ~ sum ~ sum:', sum)

    var resultScore: any
    if (sum >= 60 && sum <= 90) {
      resultScore = 'C'
    // eslint-disable-next-line no-empty
    } else if (sum >= 91 && sum <= 130) {
      resultScore = 'B'
    } else if (sum >= 131 && sum <= 180) {
      resultScore = 'A'
    }
    console.log('🚀 ~ setup ~ resultScore:', resultScore)

    const text = selectedLastValues.join(', ')
    console.log('text:-------------> ', text)

    return { recommendedByFriend, resultScore, text }
  }
})
</script>

<style scoped>
.question {
  width: 720px;
  height: 100vh;
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
  border: 1px solid rgb(35, 35, 35);
  /* color: rgb(255, 0, 0); */
  background-color: rgb(255, 255, 255);
  height: 1200px;
  width: 40vh;
  border-radius: 20px;
}

.Question h1 {
  /* font-size: 40px; */
  font-style:italic;
  font: bold;
}

.content {
  /* border: 2px solid rgb(255, 0, 157); */
  /* margin-top: 10vh; */
}

.font_result {
  font-size: 60px;
  /* border: 2px solid rgb(0, 8, 255); */
  margin-top: 7vh;
}

.img_result img {
  margin-top: 5vh;
  width: 100%;
  /* border: 2px solid rgb(255, 128, 0); */
}

.img_result h1 {
  font-size: 40px;
}

.globish_text {
  margin-top: 4vh;
}

</style>
