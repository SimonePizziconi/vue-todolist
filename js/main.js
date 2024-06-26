// Inizializiamo Vue
const { createApp } = Vue;


createApp({
  data() {
    return {
      // Creiamo un array che contenga più oggetti
      todo: [
        {
          text: "Fare i compiti",
          done: true
        },
        {
          text: "Mangiare",
          done: false
        },
        {
          text: "Studiare",
          done: true
        },
        {
          text: "Portare fuori il cane",
          done: false
        }
      ]
      
    }
  },
  methods: {
    removeItem(i){
      this.todo.splice(i, 1);
    }
  }
}).mount('#app');