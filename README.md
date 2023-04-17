# Visual representation of queue

Hosted at gh-pages. [Live page is here](https://veronikanos.github.io/basic-queue/)

This project visually shows how the queue data structure works.

The total length of the elements is 31, which corresponds to my current age (according to the conditions of the task). Elements are numbered.

To add an item to the queue, enter to input field a number from 1 to 100 (inclusive) and click "Queue".

NOTE: if a number is not an integer, program will cut an number to whole number.

After an item is added to the queue, the input data is cleared in the input line.
If a wrong number or a value outside the above limits is entered, an error warning will appear.
To remove an item from the queue, click on the "Remove from queue" button.

It is impossible to click the "Queue" button if there are no free slots for new items.
The "Remove from queue" button cannot be clicked if there are no items in the queue.

When the page is reloaded, the state of the queue is preserved.

---

### HOW TO RUN THIS PROJECT LOCALLY

Clone this repo:
`git clone https://github.com/Veronikanos/basic-queue.git`

In the project directory, you can run:

#### `npm install`

then

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080 ](http://localhost:8080) to view it
in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
