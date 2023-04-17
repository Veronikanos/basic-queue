const queueBlock = document.querySelector('#queue');
const addButton = document.querySelector('#addBtn');
const removeButton = document.querySelector('#removeBtn');
const inputValue = document.querySelector('#inputValue');

class Queue {
  constructor() {
    this.queue = [];
  }

  addValue(newValue) {
    this.queue.push(newValue);
  }

  removeValue() {
    this.queue.shift(this.queue[0]);
  }

  initSlots(slotsNumber, wrapperClass, ...classes) {
    const markup = [];
    for (let i = 0; i < slotsNumber; i++) {
      markup.push(
        `<div class=${wrapperClass}><div class=${classes}></div><span>${
          i + 1
        }</span></div>`
      );
    }
    // console.log(markup.join(''));
    queueBlock.insertAdjacentHTML('beforeend', markup.join(''));
  }
}

const queue = new Queue();
queue.initSlots(2, 'wrapper-items', 'queue-item');

// const queueItems = queue.children;
const queueItems = document.querySelectorAll('.queue-item');
console.log(queueItems);

const showVisualization = () => {
  for (let i = 0; i < queue.queue.length; i++) {
    // console.log(queue.queue.length);
    queueItems[i].textContent = queue.queue[i];
  }

  addButton.disabled =
    queue.queue.length === queueItems.length ? true : false;
  removeButton.disabled = queue.queue.length > 0 ? false : true;
};

const handleAddButton = (e) => {
  const errorElement = document.querySelector('.error');
  errorElement.innerHTML = '';

  if (!inputValue.value) {
    errorElement.innerHTML = 'Input can not be empty';
    return;
  }

  queue.addValue(inputValue.value);
  inputValue.value = '';
  showVisualization();
};

const handleRemoveButton = () => {
  queue.removeValue();
  const errorElement = document.querySelector('.error');
  if (errorElement.innerHTML) errorElement.innerHTML = '';

  queueItems[queue.queue.length].innerHTML = '';
  showVisualization();
};

addButton.addEventListener('click', handleAddButton);
removeButton.addEventListener('click', handleRemoveButton);
