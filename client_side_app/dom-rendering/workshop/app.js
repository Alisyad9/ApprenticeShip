import { createEl } from './createEl.js';

import dogs from './dogs.js';

console.log(dogs);

const container = document.getElementById('app');

// const element = dogs.map((dog) => {
//   const h2 = document.createElement('h2');
//   h2.textContent = dog.name;

//   const image = document.createElement('img');
//   image.src = dog.image;

//   const li = document.createElement('li');
//   li.append(h2, image);

//   return li;
// });

const element = dogs.map((dog) => {
  const h2 = createEl('h2', {}, dog.name.toLocaleUpperCase());

  const image = createEl('img', { src: dog.image });
  const li = createEl('li', { className: 'card' }, h2, image);
  return li;
});

// const tittle = document.createElement('h1');

// tittle.textContent = 'these are the dogs';

// const list = document.createElement('ul');
// list.append(...element);

const title = createEl('h1', {}, 'The are the dogs');
const list = createEl('ul', {}, ...element);

container.append(title, list);
