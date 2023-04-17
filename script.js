const queueBlock = document.querySelector('#queue');
const addButton = document.querySelector('#addBtn');
const removeButton = document.querySelector('#removeBtn');
const inputValue = document.querySelector('#inputValue');

class Queue {
  constructor() {
    this.queue = [];
  }

  addValue(newValue) {
    this.queue.unshift(newValue);
  }

  removeValue() {
    this.queue.pop(this.queue[0]);
  }

  initSlots(slotsNumber, ...classes) {
    const markup = [];
    while (slotsNumber) {
      markup.push(`<div class=${classes}></div>`);
      slotsNumber--;
    }
    // console.log(markup.join(''));
    queueBlock.insertAdjacentHTML('beforeend', markup.join(''));
  }
}
const queue = new Queue();
queue.initSlots(31, 'queue-item');

const handleAddButton = (e) => {
  queue.addValue(inputValue.value);
  // console.log(queue);
};

const handleRemoveButton = () => {
  queue.removeValue();
  // console.log(queue);
};

addButton.addEventListener('click', handleAddButton);
removeButton.addEventListener('click', handleRemoveButton);
