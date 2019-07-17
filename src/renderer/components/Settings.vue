<template>
  <v-form>
    <!-- <div></div> -->
    <v-btn fab class="white--text" color="red" v-on:click="goStartWindow()">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-container>
      <v-layout>
        <v-flex xs12 sm12 md12 lg12 xl12 pa-3>
          <v-text-field
            dark
            label="BOTのトークンを登録します．"
            placeholder="xoxbの方のトークンを登録します．"
            v-model="slackToken"
          >{{ slackToken }}</v-text-field>
        </v-flex>
        <v-flex xs3 sm3 md3 lg3 xl3 pa-3>
          <v-btn class="white--text" color="red" @click="setSlackToken">登録</v-btn>
        </v-flex>
      </v-layout>
      <!-- <p>{{ slackToken }}</p> -->
    </v-container>
  </v-form>
  <!-- <h1>ここに設定画面を作っていくよ</h1> -->
</template>

<script>
export default {
  data() {
    return {
      slackToken: ""
    };
  },
  // 起動時に自動で呼ばれる
  created: function() {
    const Store = require("electron-store");
    const store = new Store();
    this.slackToken = store.get("SLACK_XOXB_TOKEN");
    console.log(this.slackToken);
  },

  methods: {
    setSlackToken: function() {
      const Store = require("electron-store");
      const store = new Store();
      store.set("SLACK_XOXB_TOKEN", this.slackToken);
      console.log(store.get("SLACK_XOXB_TOKEN"));
    },
    // 何故かtoで画面遷移するとiconが中心からずれるため
    goStartWindow: function() {
      this.$router.replace("/");
    }
  }
};
</script>


<style scoped>
</style>


