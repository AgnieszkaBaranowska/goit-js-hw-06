const categories = document.querySelectorAll('.item');
let categoriesQuantity = `Number of Categories: ${categories.length}`;
console.log(categoriesQuantity);


for (let i of categories) {
    let name = i.querySelector('h2').innerHTML;
    let elementList = i.querySelector('ul');
    let elements = elementList.children.length;
    console.log(`Category: ${name}`);
    console.log(`Elements: ${elements}`);
  }
