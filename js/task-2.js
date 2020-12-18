const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector("#ingredients");

const insertListItemMarkup = array =>
  array.map(item => {
    const itemListMarkup = document.createElement("li");
    itemListMarkup.textContent = item;
    return itemListMarkup;
  });

listRef.append(...insertListItemMarkup(ingredients));
