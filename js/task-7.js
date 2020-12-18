const rangeInputRef = document.querySelector("#font-size-control");
const textInputRef = document.querySelector("#text");
rangeInputRef.value = 16;

rangeInputRef.addEventListener("input", event =>
    textInputRef.style.fontSize = `${event.target.value}px`
);