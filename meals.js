const mealsDataLoad = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsData(data.meals));
}

const displayMealsData = meals => {
    const mealsContainer = document.getElementById('meals-container');

    mealsContainer.innerHTML = ``;

    meals.forEach(meal => {
        // console.log(meal);
        const mealsDiv = document.createElement('div')
        mealsDiv.classList.add('col')
        mealsDiv.innerHTML = `
        
        <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}...</p>
                    </div>
                </div>
        
        `;

        mealsContainer.appendChild(mealsDiv)

    });

}

const searchFood = () => {
    const searchingFiled = document.getElementById('input-filed');
    const searchText = searchingFiled.value;
    mealsDataLoad(searchText);

    searchingFiled.value = '';


}



mealsDataLoad('');