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
      ],
      newText: "",
    }
  },
  methods: {
    
    // Rimuovere item
    removeItem(i){
      this.todo.splice(i, 1);
    },

    // Aggiungere item
    addItem(){
      // Creare un nuovo item
      let newItem = {text:this.newText, done:false};
      this.todo.unshift(newItem);
      this.newText = "";
      console.log(this.todo);
    },
  }  
}).mount('#app');

