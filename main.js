let meal = document.createElement("p");
let cat = document.createElement("p");
let area = document.createElement("p");
let instructions = document.createElement("p");
let ingredients = document.createElement("ul");

document.querySelector("#food-btn").addEventListener("click", tellrecipe);

var section = document.querySelector("#text");

function tellrecipe() {
  let recipe = fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(function(display) {
      console.log(display);
      return display.json();
    })
    .then(function(data) {
      console.log(data);
      section.appendChild(meal);
      section.appendChild(cat);
      section.appendChild(area);
      section.appendChild(instructions);

      //document.body.innerText = data.meals[0].strMeal;
      meal.innerText = data.meals[0].strMeal;
      cat.innerText = data.meals[0].strCategory;
      area.innerText = data.meals[0].strArea;
      instructions.innerText = data.meals[0].strInstructions;
    });
}

// before fetch add a 'loading' boolean class to the animation.
// if loading then the animation will move across the page like a loading bar
// when fetch has completed change loading to = false

/*document.ul.appendChild(ing1);
document.ul.appendChild(ing2);
document.ul.appendChild(ing3);
document.ul.appendChild(ing4);
document.ul.appendChild(ing5);
document.ul.appendChild(ing6);
document.ul.appendChild(ing7);
document.ul.appendChild(ing8);
document.ul.appendChild(ing8);
document.ul.appendChild(ing10);
document.ul.appendChild(ing11);
document.ul.appendChild(ing12);
document.ul.appendChild(ing13);
document.ul.appendChild(ing14);
document.ul.appendChild(ing15);
document.ul.appendChild(ing16);
document.ul.appendChild(ing17);
document.ul.appendChild(ing18);
document.ul.appendChild(ing19);
document.ul.appendChild(ing20);*/
