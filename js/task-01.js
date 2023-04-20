const numbersOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numbersOfCategories.length}`);

numbersOfCategories.forEach(evt => {
    console.log(`Category:${evt.firstElementChild.textContent}`)
    console.log(`Elements:${evt.lastElementChild.querySelectorAll('li').length}`)
});