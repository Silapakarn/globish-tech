<template>
  <div class="home">
    <div class="css_button_div">
      <router-link to="/content">
          <button type="submit" class="button-32">เริ่มเลย</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.home {
  background-image: url("../../src//assets/image 15.png");
  /* border: 5px solid rgb(255, 204, 0); */
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat;
  justify-content: center;
  margin: 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}

/* CSS */
.button-32 {
  font-size: 40px;
  /* margin: 10px; */
  padding: 1vh 14vh;
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
  color: white;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}

.button-32:disabled {
  filter: saturate(0.2) opacity(0.5);
  -webkit-filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
}

.css_button_div {
  justify-content: center;
  bottom: 0;
  align-items: end;
  display: flex;
  /* border: 2px solid red; */
  height: 100vh;
}
</style>
