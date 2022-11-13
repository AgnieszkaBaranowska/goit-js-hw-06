const inputItem = document.querySelector("input");
const outputItem = document.querySelector("#name-output");
const inputElement = () => {
    if (inputItem.value === "") {
        outputItem.innerText = "Annonymous";
    }
    else {
        outputItem.innerText = inputItem.value;
    }
};
inputItem.addEventListener("input", inputElement);