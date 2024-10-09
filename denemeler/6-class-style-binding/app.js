const app = Vue.createApp({

  data(){
    return{
      boxClass:"border red",
      showborder: false,
      redbg: false,
      bgcolor: "cyan",

    };
  },
  computed: {
    boxClasses(){
      return {border: this.showborder, red: this.redbg}
    }

  }



}).mount("#app");
