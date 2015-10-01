// add scripts

console.log("sanity check!");

// var queueArray = [[],[]];

function Stack(){
  this.items = [];
}

Stack.prototype.addItem = function(item){
  this.items.push(item);
};

Stack.prototype.removeItem = function(){
  return this.items.pop();
};

Stack.prototype.getItems = function(){
  return this.items;
};

function Queue(){
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(item){
  this.stack1.addItem(item);
};

Queue.prototype.dequeue = function(){
  if(this.stack2.items.length === 0 && this.stack1.items.length !== 0){
    for (var i = this.stack1.items.length-1; i >= 0 ; i--){
      var popped = this.stack1.removeItem();
      this.stack2.addItem(popped);
    }
     return this.stack2.removeItem();
  } else {
    return this.stack2.removeItem();
  }
};



// var stack1Array = queueArray[0];

// var stack2Array = queueArray[1];

// function enqueue(item){
//   stack1Array.push(item);
// }

// function dequeue(){
//   stack2Array.pop();
// }


