let listInput = document.querySelectorAll('.section_mailing .input_row');
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


let carouselExterior = document.querySelector('.carousel_exterior');

let countSlide = carouselExterior.querySelectorAll('.carousel-item');
document.getElementById('countSlide').innerHTML = (countSlide.length.toString()).padStart(2, '0');

document.getElementById('numSlide').innerHTML = '01';

let control_block = carouselExterior.querySelector('.control_block');

let numSlide = 0;
control_block.addEventListener('click', (event) => {
    if (event.target === carouselExterior.querySelector('.arrow_next')) {
        numSlide++;
        if (numSlide > countSlide.length - 1) {
            numSlide = 0; 
        }

    } else {
        numSlide--;
        if (numSlide < 0) {
            numSlide = countSlide.length - 1;
        }
    }

    document.getElementById('numSlide').innerHTML = ((numSlide + 1).toString()).padStart(2, '0');



    //let id = 0;

    /*or (let i = 0; i < countSlide.length; i++) {
        if (countSlide[i] === activeSlide) {
            document.getElementById('numSlide').innerHTML = ((i+1).toString()).padStart(2, '0');
            console.log(i+1);
            break;
        }
    }*/
});