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
        
        <div onClick ="displayMealDeteli(${meal.idMeal})" class="card" >
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
const displayMealDeteli = (idMeal) => {

    // console.log('get detelis', idMeal)

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => detelisDisplay(data.meals[0]));

}

const detelisDisplay = (detelisInfo) => {
    // console.log(detelisInfo);

    const detelisContainer = document.getElementById('detelis-container');
    detelisContainer.innerHTML = '';
    const mealDetelis = document.createElement('div');
    mealDetelis.classList.add('card');
    mealDetelis.innerHTML = `
    
    <div class="col-md-4">
      <img src="${detelisInfo.strMealThumb
        }" class="img-fluid rounded-start" alt="...">
    </div>
     <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${detelisInfo.strMeal}</h5>
        <p class="card-text">${detelisInfo.strInstructions.slice(0, 200)}</p>
       
      </div>
    
    `;

    detelisContainer.appendChild(mealDetelis);

}



mealsDataLoad('');