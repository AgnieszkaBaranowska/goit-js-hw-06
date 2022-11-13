// const buttonElement = document.querySelector("#counter");

// for (let buttonItem of counter)

let counterValue = 0;
const buttonElement = document.querySelectorAll("button");
const valueSpan = document.querySelector("#value");
const decrement = () => {
    counterValue--;
    console.log(counterValue);
    valueSpan.innerText = counterValue;
};
buttonElement[0].addEventListener("click", decrement);
const increment = () => {
    counterValue++;
    console.log(counterValue);
    valueSpan.innerText = counterValue;
};
buttonElement[1].addEventListener("click", increment);