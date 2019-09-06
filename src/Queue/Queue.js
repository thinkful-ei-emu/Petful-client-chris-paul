const _Node = require('./Node');
const { human_names } = require('./names')

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.data;
  }
}

// function peek(list){
//   return list.first.data;
// }
// function isEmpty(list){
//   if(list.first){
//     return false;
//   }
//   return true;
// }
function display(list){
  let result = [];
  let curr = list.first;
  while(curr){
    result.push(curr.data);
    curr = curr.next;
  }
  return result;
}

function adoptName(){
  let names = new Queue();
  let ranNum = Math.floor(Math.random()*5+1);
  for(let i=0; i<=ranNum; i++){
    names.enqueue(human_names[Math.floor(Math.random()*98+1)])
  }
  return names;
}
export { Queue, adoptName, display };