class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
} // Node Class

class LinkedList {

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    // creates a new node
    var node = new Node(element);
    let current;

    if (this.head == null)

      this.head = node;

    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;

    }
    this.size++;
  }

  findPic(index) {
    let current = this.head;
    let counter;
    for (counter = 1; counter <= this.size; counter++) {
      if (counter == index) {
        return current.element;
      } else {
        current = current.next;
      }

    }
  } // find(index)

}


let skins = new LinkedList();

skins.add('url(../images/darius/god-king.jpg)');
skins.add('url(../images/darius/AcademySkin.jpg)');

console.log(skins.findPic(1));
console.log(skins.findPic(2));
