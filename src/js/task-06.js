const inputElement = document.querySelector("input");
const requiretNumberOfCharacters = inputElement.getAttribute("data-length");
const focusLost = () => {
    if (inputElement.value.length == requiretNumberOfCharacters){
        inputElement.setAttribute("class", "valid");
    }
    else {
        inputElement.setAttribute("class", "invalid");
    }
};
inputElement.addEventListener("blur", focusLost);













