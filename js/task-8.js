const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesSectionRef = document.getElementById("boxes");
const inputRef = document.querySelector("#controls input");

const random = () => Math.floor(Math.random() * 255);
const createBoxes = (amount) => { 
    const basicSize = 30;
    const resultedMarkup = [];
    for (let i = 0; i < amount; i += 1) {
        let itemMarkup = document.createElement("div");
        let resultedSize = basicSize + 10 * i;
        itemMarkup.style.cssText = `width: ${resultedSize}px; height: ${resultedSize}px; 
            background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        resultedMarkup.push(itemMarkup); 
    }
    return boxesSectionRef.append(...resultedMarkup);
}
const destroyBoxes = () => boxesSectionRef.innerHTML = null;
    
renderBtnRef.addEventListener('click', () => {
    const amount = inputRef.value;
    createBoxes(amount);
});
destroyBtnRef.addEventListener('click', destroyBoxes);
