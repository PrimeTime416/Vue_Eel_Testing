//Main configuration file for vue.js

console.log('IN: main');
var vc = {};

vc.data = function() {
  return { 
    title: "",
    inputA: 0,
    message: 'hello from vue and eel'
  };
};

vc.methods = {
  getInput: function(event) {
    console.log("IN: methods: getInput");
    console.dir(event);
    this.title = event.target.value;
  },
  
  getResultMethod: function(){
    console.log("IN: methods: getResultMethod");
  }
};

vc.computed = {
  getResultComputed: function(){
    console.log("IN: computed:getResultComputed");
  },

  getResult4: function(){
    console.log("IN: computed: getResult4");
  }
};

vc.watch = {
  inputA: function(){
    console.log("IN: watch: inputA");
  }
};

export {vc  as test};