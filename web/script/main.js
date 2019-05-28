//Main configuration file for vue.js

console.log('IN: main');
var vc = {};

vc.data = function() {
  return { 
    title: "",
    inputA: 0,
    counter: 0,
    message: 'Vue has succesfully Started!'
  };
};

vc.methods = {
  getInput: function(event) {
    console.log("IN: methods: getInput");
    console.dir(event);
    this.title = event.target.value;
  },
  
    getResultMethod: function(message){
//         this.counter = this.counter + 1;
        this.message = message ||  'From Python :)';
        console.log("IN: methods: getResultMethod", message);
    }
};

vc.computed = {
    getResultComputed: function(){
        eel.my_python_function(this.counter, this.counter + 1); // This calls the Python function that was decorated
        console.log("IN: computed:getResultComputed");
        return this.counter + 2;
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