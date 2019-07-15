<template>
  <v-app dark class="my_backgound">
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
// import Start from "./components/Start";

export default {
  name: "wording",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
/* html {
  height: 100%;
  width: 100%;
}
body {
  margin: 0;
  height: 100%;
  width: 100%;
  -webkit-app-region: drag;
  background-color: rgba(255, 0, 0, 0.5);
} */

.my_backgound {
  background: rgba(0, 0, 0, 0);
}

/*
 transitionの[name="○○"]で指定した○○とプリフィックスが一致しなければならない．
 例えば，
 .fadeA-enter-active, .fadeA-leave-active {
  transition-duration: 0.5s; 
  transition-timing-function: ease; 
}
なら[name=fadeA]としなければならない．
 */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s; /* 変化の時間 */
  transition-timing-function: ease; /* 変化の進行割合を指定 easeは，開始と完了を滑らかにする */
}
.fade-enter,
.fade-leave-to {
  opacity: 0; /* 透明度 */
}
</style>
