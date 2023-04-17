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

  get length() {
    return this.queue.length;
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
  for (let i = 0; i < queue.length; i++) {
    queueItems[i].textContent = queue.queue[i];
  }
  if (queueItems[queue.length]) {
    queueItems[queue.length].textContent = '';
  }

  addButton.disabled =
    queue.length === queueItems.length ? true : false;
  removeButton.disabled = queue.length > 0 ? false : true;
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

const validateInput = (val, errorElement) => {
  const value = Number(val.trim());
  if (isNaN(value) || value < 1 || value > 100) {
    errorElement.innerHTML =
      'Please enter a number between 1 and 100';
    return false;
  }
  if (!value) {
    errorElement.innerHTML = 'Input can not be empty.';
    return false;
  }
  return true;
};

const handleAddButton = () => {
  const errorElement = document.querySelector('.error');
  errorElement.innerHTML = '';

  if (!validateInput(inputValue.value, errorElement)) return;

  queue.addValue(inputValue.value);
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
