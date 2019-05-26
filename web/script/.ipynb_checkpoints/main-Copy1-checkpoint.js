console.log('hello worlddd');
var vc = {};

vc.data = function() {
  return { 
    title: "",
    dataMac: "Return of the Mac",
    inputA: 0,
    inputB: 0,
    result1: 0
  };
};

vc.methods = {
  getInput: function(event) {
    console.dir(event);
    this.title = event.target.value;
  },

  returnData: function(){
    return "Hello World";
  },
  
  returnMac: function(){
    return this.dataMac;
  },
  
  getResultMethod: function(){
    console.log("IN: methods: getResultMethod");
    this.result1 = parseInt(this.inputA) + parseInt(this.inputB);
    return this.dataMac;
  }
};

vc.computed = {
  getResultComputed: function(){
    console.log("IN: computed:getResultComputed");
    this.result1 = parseInt(this.inputA) + parseInt(this.inputB);
    return this.result1;
  },

  getResult4: function(){
    console.log("IN: computed: getResult4");
    //this.result1 = parseInt(this.inputA) + parseInt(this.inputB);
    return this.dataMac;
  }
};

vc.watch = {
  inputA: function(){
    console.log("IN: watch: inputA");
    this.result1 = parseInt(this.inputA) + parseInt(this.inputB);
    //return this.result1;
  }
};




console.log(app_1);