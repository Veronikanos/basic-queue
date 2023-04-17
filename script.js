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

  initSlots(slotsNumber, classes) {
    const markup = [];
    for (let i = 0; i < slotsNumber; i++) {
      markup.push(
        `<div class=${classes[0]}><div class=${
          classes[1]
        }><span class=${classes[2]}></span></div><span>${
          i + 1
        }</span></div>`
      );
    }
    // console.log(markup.join(''));
    queueBlock.insertAdjacentHTML('beforeend', markup.join(''));
  }
}

const queue = new Queue();
queue.initSlots(5, [
  'wrapper-items',
  'border-container',
  'queue-item',
]);

// const queueItems = queue.children;
const queueItems = document.querySelectorAll('.queue-item');
console.log(queueItems);

const showVisualization = () => {
  for (let i = 0; i < queue.queue.length; i++) {
    // console.log(queue.queue.length);
    queueItems[i].textContent = queue.queue[i];
  }
  if (queueItems[queue.queue.length]) {
    queueItems[queue.queue.length].textContent = '';
  }

  addButton.disabled =
    queue.queue.length === queueItems.length ? true : false;
  removeButton.disabled = queue.queue.length > 0 ? false : true;
};

const showAnimation = () => {
  console.log(queue.queue.length);
  // if (queue.queue.length > 1) {
  queueItems.forEach((item) =>
    item.classList.add('queue-item-animate')
  );
  // }
};

const handleAnimation = () => {
  queueItems.forEach((item) =>
    item.classList.remove('queue-item-animate')
  );

  showVisualization();
};

queueBlock.addEventListener('animationend', handleAnimation);

const handleAddButton = (e) => {
  const errorElement = document.querySelector('.error');
  errorElement.innerHTML = '';

  if (!inputValue.value) {
    errorElement.innerHTML = 'Input can not be empty';
    return;
  }

  queue.addValue(inputValue.value);
  inputValue.value = '';
  // queueItems.forEach((item) =>
  //   item.classList.add('queue-item-animate')
  // );

  showVisualization();
};

const handleRemoveButton = () => {
  const errorElement = document.querySelector('.error');
  if (errorElement.innerHTML) errorElement.innerHTML = '';

  console.log(queueItems[queue.queue.length]);
  // if (queueItems[queue.queue.length].innerHTML) {
  //   queueItems[queue.queue.length].innerHTML = '';
  // }

  showAnimation();

  console.log(queue.queue);
  queue.removeValue();
  console.log(queue.queue);
  // showVisualization();
};

addButton.addEventListener('click', handleAddButton);
removeButton.addEventListener('click', handleRemoveButton);
