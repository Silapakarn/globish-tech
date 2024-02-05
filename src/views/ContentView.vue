<template>
  <Carousel ref="carouselRef" class="carousel">
    <Slide v-for="slide in 7" :key="slide">
      <div class="slide_content">
        <component :is="getSlideComponent(slide)" />
        <div class="button_custom">
          <template v-if="slide === 1">
            <router-link to="/">
                <button type="submit" class="button-31">กลับ</button>
            </router-link>
            <button type="submit" class="button-32" @click="moveToNextSlide">ต่อไป</button>
          </template>
          <template v-else-if="slide === 7">
            <div></div>
          </template>
          <template v-else>
            <button type="submit" class="button-31" @click="moveToPreviousSlide">กลับ</button>
            <button type="submit" class="button-32" @click="moveToNextSlide">ต่อไป</button>
          </template>

        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import Q1 from './Q1.vue'
import Q2 from '@/views/Q2.vue'
import Q3 from '@/views/Q3.vue'
import Q4 from '@/views/Q4.vue'
import Q5 from '@/views/Q5.vue'
import Q6 from '@/views/Q6.vue'
import Q7 from '@/views/Q7.vue'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'ContentView',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Q1,
    Q2,
    Q3,
    Q4,
    Q5,
    Q6,
    Q7
  },
  setup () {
    const carouselRef = ref(null)

    const getSlideComponent = (slide) => {
      switch (slide) {
        case 1:
          return Q1
        case 2:
          return Q2
        case 3:
          return Q3
        case 4:
          return Q4
        case 5:
          return Q5
        case 6:
          return Q6
        case 7:
          return Q7
        default:
          return null
      }
    }

    const moveToPreviousSlide = () => {
      if (carouselRef.value) {
        carouselRef.value.prev()
      }
    }

    const moveToNextSlide = () => {
      if (carouselRef.value) {
        carouselRef.value.next()
      }
    }

    return {
      carouselRef,
      getSlideComponent,
      moveToPreviousSlide,
      moveToNextSlide
    }
  }
})
</script>

<style>
.carousel {
  display: flex;
  flex-direction: column;

}

.slide_content {
  margin-top: 5vh;
  height: 80vh;
}

.button_custom {
  /* margin-left: 2vh; */
  margin: 3vh;
  /* margin-left: 1vh; */
  display: flex;
  width: 90%;
  justify-content: space-between;
  /* flex-wrap: wrap; */
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid rgb(125, 214, 255);
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
