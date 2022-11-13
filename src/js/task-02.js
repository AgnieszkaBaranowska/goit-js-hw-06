const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsElement = document.querySelector("#ingredients");

for (let ingredientsItem of ingredients){
  let liList = document.createElement("li");
  let liListContent = document.createTextNode(ingredientsItem);
  liList.appendChild(liListContent);
  liList.classList.add("item");
  ingredientsElement.appendChild(liList);
}




