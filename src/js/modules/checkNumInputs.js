
function checkNumInputs(input) {
    const  numInput = document.querySelectorAll(input);

    numInput.forEach(item => {
        item.addEventListener('input', () => {
          item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;
