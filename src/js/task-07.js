const slider = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

const changeSize = () => {
    if (slider.value == textSize) {
        textSize.text = "font-size-control";
    }
    else {
        textSize.text = ".font-size-control + px"
    }
}

slider.addEventListener("input", changeSize);