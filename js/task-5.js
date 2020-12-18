const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output'); 

inputRef.addEventListener('input', event => 
    event.target.value !== ''
        ?  nameOutputRef.textContent = event.target.value
        :  nameOutputRef.textContent = 'незнакомец'   
);