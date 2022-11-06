const categories = document.querySelectorAll('.item');
let categoriesQuantity = `Number of Categories: ${categories.length}`;
console.log(categoriesQuantity);


for (let li of categories) {
    let name = li.querySelector('h2').innerHTML;
    let elementList = li.querySelector('ul');
    let elements = elementList.children.length;
    console.log(`Category: ${name}`);
    console.log(`Elements: ${elements}`);
  }
