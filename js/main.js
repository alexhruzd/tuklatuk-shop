let listInput = document.querySelectorAll('.section_mailing .input_row');
console.log(listInput);
for (element of listInput) {
    element.addEventListener('input', (event) => {
        let input = event.target;
        let label = input.nextElementSibling;

        if (input.value !== '') {
            label.classList.add('change_input');
        } else {
            label.classList.remove('change_input');
        }
    });
}