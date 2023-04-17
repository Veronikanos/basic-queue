const queueBlock = document.querySelector('#queue');
const addButton = document.querySelector('#addBtn');
const removeButton = document.querySelector('#removeBtn');
const inputValue = document.querySelector('#inputValue');

class Queue {
  queue = [];

  addValue(newValue) {
    this.queue.push(newValue);
  }

  removeValue() {
    this.queue.shift(this.queue[0]);
  }

  setQueue(savedQueue) {
    this.queue = savedQueue;
  }

  getQueue() {
    return this.queue;
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
    queueBlock.insertAdjacentHTML('beforeend', markup.join(''));
  }
}

const showVisualization = () => {
  const length = queue.getQueue().length;

  for (let i = 0; i < length; i++) {
    queueItems[i].textContent = queue.queue[i];
  }
  if (queueItems[length]) {
    queueItems[length].textContent = '';
  }

  addButton.disabled = length === queueItems.length ? true : false;
  removeButton.disabled = length > 0 ? false : true;
};

const showAnimation = () => {
  addButton.removeEventListener('click', handleAddButton);
  removeButton.removeEventListener('click', handleRemoveButton);

  queueItems.forEach((item) =>
    item.classList.add('queue-item-animate')
  );
};

const handleAnimationPlay = () => {
  queueItems.forEach((item) =>
    item.classList.remove('queue-item-animate')
  );

  showVisualization();
  addButton.addEventListener('click', handleAddButton);
  removeButton.addEventListener('click', handleRemoveButton);
};

const validateInput = (value, errorElement) => {
  if (isNaN(value) || value < 1 || value > 100) {
    errorElement.innerHTML =
      'Please enter a number between 1 and 100 (inclusive)';
    return false;
  }
  return true;
};

const handleAddButton = () => {
  const errorElement = document.querySelector('.error');
  errorElement.innerHTML = '';

  if (!validateInput(inputValue.value, errorElement)) return;
  const num = parseInt(Number(inputValue.value.trim()));

  queue.addValue(num);
  inputValue.value = '';

  showVisualization();
};

const handleRemoveButton = () => {
  const errorElement = document.querySelector('.error');
  if (errorElement.innerHTML) errorElement.innerHTML = '';

  showAnimation();
  queue.removeValue();
};

const queue = new Queue();

queue.initSlots(31, [
  'wrapper-items',
  'border-container',
  'queue-item',
]);

const queueItems = document.querySelectorAll('.queue-item');
queueBlock.addEventListener('animationend', handleAnimationPlay);

addButton.addEventListener('click', handleAddButton);
removeButton.addEventListener('click', handleRemoveButton);

window.addEventListener('load', () => {
  const queueArray = localStorage.getItem('queueArray');
  if (queueArray) {
    queue.setQueue(JSON.parse(queueArray));
  }
  showVisualization();
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('queueArray', JSON.stringify(queue.queue));
});
