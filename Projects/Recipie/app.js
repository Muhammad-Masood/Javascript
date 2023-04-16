// IIFE Imidiately Invoked Functions Expressions
(async function (){
    const response = await fetch("./recipies.json");
    const recipies = await response.json();

    const inputElem = document.getElementById("searchInput");
    const searchBut = document.getElementById("searchBtn");


    function search() {
        const query = inputElem.value.toLowerCase(); //to get value of search box
            const results = recipies.filter(function(recipie){ //filtering the whole array of recipies tp get the specific recipies (arrays) of our need
                return (recipie.title.toLowerCase().includes(query) || recipie.ingredients.join(" ").toLowerCase().includes(query));//ingredients ki array ko merge krk aik string banadengy using join
            });
            displaySearchResults(results);
    }
    searchBut.addEventListener("click",search) //search button search function ko trigger krega

    const listElem = document.getElementById("recipe-list");
    function displaySearchResults(results){
        listElem.innerHTML = "";
        results.forEach(function(recipe) {
            const li = document.createElement("li");
            const listItem = `
            <li>
            <div id = "title">${recipe.title} </div>
            <div id = "description">${recipe.description}</div>
            </li>
            `;
            li.innerHTML = listItem;
            li.addEventListener("click",function() {
                loadRecipieDetails(recipe);
            });
            listElem.appendChild(li);
        });
    }

    const reciepDetails = document.getElementById("recipeDetailsContainer");
    function loadRecipieDetails(recipe){
        reciepDetails.innerHTML = `
        <h2 class = "title">${recipe.title} </h2>
        <h3> Ingredients:</h3>
        <ul>${recipe.ingredients.map(function(ingredient){
            return "<li>" + ingredient+ "</li>"
        }).join("")}</ul>
        <h3>Instructions:</h3>
        <div>${recipe.instructions}</div>
        `
    }
}) ();  //Ye function banty hi khudi call hojyga