<template>
  <v-form>
    <!-- <div></div> -->
    <v-btn fab class="white--text" color="red" to="/">
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
          ></v-text-field>
        </v-flex>
        <v-flex xs3 sm3 md3 lg3 xl3 pa-3>
          <v-btn class="white--text" color="red" @click="setSlackToken">登録</v-btn>
        </v-flex>
      </v-layout>
      <p>{{ slackToken }}</p>
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
  // mounted: {
  //   setSlackToken: function() {
  //     const Store = require("electron-store");
  //     const store = new Store();
  //     this.slackToken = store.get("SLACK_XOXB_TOKEN");
  //     // store.set("SLACK_XOXB_TOKEN", this.slackToken);
  //     // console.log(store.get("SLACK_XOXB_TOKEN"));
  //   }
  // },
  methods: {
    setSlackToken: function() {
      const Store = require("electron-store");
      const store = new Store();
      store.set("SLACK_XOXB_TOKEN", this.slackToken);
      console.log(store.get("SLACK_XOXB_TOKEN"));
      //=> '🦄'
      // Use dot-notation to access nested properties
      // store.set("foo.bar", true);
      // console.log(store.get("foo"));
      //=> {bar: true}

      // store.delete("unicorn");
      // console.log(store.get("unicorn"));
    }
  }
};
</script>


<style scoped>
</style>


