<template dark>
  <!-- <v-app> -->
  <v-container>
    <v-layout row>
      <!-- text-XX-centerで中央寄せにする -->
      <v-flex text-sm-center text-md-center text-lg-center text-xl-center sm6 md6 lg6 xl6 pa-3>
        <v-btn fab class="btn_size white--text" v-on:click="startCommnet()" color="red">
          <v-icon v-if="show" size="60">play_arrow</v-icon>
          <v-icon v-else size="60">pause</v-icon>
        </v-btn>
      </v-flex>

      <v-flex text-sm-center text-md-center text-lg-center text-xl-center sm6 md6 lg6 xl6 pa-3>
        <!-- <router-link to="/settings"> -->
        <v-btn fab class="btn_size white--text" color="green" v-on:click="goSettignsWindow">
          <v-icon size="60">settings</v-icon>
        </v-btn>
        <!-- </router-link> -->
      </v-flex>
    </v-layout>
  </v-container>
  <!-- </v-app> -->
</template>

<script>
let rtm;
export default {
  data() {
    return {
      show: true,
      icons: [
        { color: "red", icon_name: "play_arrow" },
        { color: "blue", icon_name: "pause" },
        { color: "green", icon_name: "settings" }
      ]
    };
  },
  methods: {
    original2: function() {
      const Store = require("electron-store");
      const store = new Store();
      store.set("unicorn", "ユニコーン");
      console.log(store.get("unicorn"));
      //=> '🦄'
      // Use dot-notation to access nested properties
      store.set("foo.bar", true);
      console.log(store.get("foo"));
      //=> {bar: true}

      store.delete("unicorn");
      console.log(store.get("unicorn"));
    },
    // 何故かtoで画面遷移するとiconが中心からずれるため
    goSettignsWindow: function() {
      this.$router.replace("/settings");
    },
    startCommnet: function() {
      const { RTMClient } = require("@slack/rtm-api");
      const Store = require("electron-store");
      const store = new Store();
      // 設定ファイルから呼び出す
      const token = store.get("SLACK_XOXB_TOKEN");
      console.log(token);
      //ture 通信を開始してメッセージを受信
      if (this.show) {
        rtm = new RTMClient(token);
        rtm.start().catch(console.error);
        // メッセージ受信を開始
        rtm.on("message", event => {
          console.log(event);
        });
        // false 通信を切断
      } else {
        rtm.disconnect();
      }
      console.log(this.show);
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.btn_size {
  width: 20vw;
  height: 20vw;
}

/* .play_icon {
  color: rgba(255, 0, 0, 0.473);
}
.play_icon:hover {
  color: red;
}

.pause_icon {
}
.pause_icon:hover {
  color: blue;
} */
</style>

