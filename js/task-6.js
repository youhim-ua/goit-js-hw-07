const inputRef = document.querySelector('#validation-input');
const validationLength = inputRef.getAttribute("data-length");

inputRef.addEventListener('change', event => { 
    const lengthInput = event.target.value.length;
    console.dir(event);
    if (lengthInput > Number(validationLength) || lengthInput < Number(validationLength)) {
        inputRef.classList.add("invalid");
    } else { 
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    }
})


// inputRef.addEventListener('change', event => {
//     const lengthInput = event.target.value.length;
//     if (lengthInput <= validationLength && lengthInput > 0) {
//         inputRef.classList.add("valid");
//         inputRef.classList.remove("invalid");
//     } else if (lengthInput > validationLength) {
//         inputRef.classList.add("invalid");
//     } else { 
//         inputRef.classList.remove("valid");
//     }
// });