const categoriesRef = document.querySelector("#categories");
const titlesOfItemsRef = document.querySelectorAll(".item > h2");

const getQuantityOfCategories = element =>
    console.log(`В списке ${element.children.length} категории.`);

getQuantityOfCategories(categoriesRef);

const getItemInformation = titleList =>
    titleList.forEach(item => {
        console.log(`Категория: ${item.textContent}`);
        console.log(`Количество элементов: ${item.nextElementSibling.children.length}`);
    });

getItemInformation(titlesOfItemsRef);
