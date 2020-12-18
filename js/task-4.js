const counterValue = document.querySelector('#value');
const decrementButtonRef = document.querySelector("button[data-action='decrement']");
const incrementButtonRef = document.querySelector("button[data-action='increment']");

const increment = () => {
    const result = Number(counterValue.textContent) + 1;
    return counterValue.textContent = result;
}
const decrement = () => {
    const result = Number(counterValue.textContent) - 1;
    return counterValue.textContent = result;
}

decrementButtonRef.addEventListener('click', decrement);
incrementButtonRef.addEventListener('click', increment);
