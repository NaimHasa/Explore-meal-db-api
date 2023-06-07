const mealsDataLoad = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => displayMealsData(data.categories));
}

const displayMealsData = meals => {
    const mealsContainer = document.getElementById('meals-container');

    meals.forEach(meal => {
        console.log(meal);
        const mealsDiv = document.createElement('div')
        mealsDiv.classList.add('col')
        mealsDiv.innerHTML = `
        
        <div class="card">
                    <img src="${meal.strCategoryThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strCategory}</h5>
                        <p class="card-text">${meal.strCategoryDescription}</p>
                    </div>
                </div>
        
        `;

        mealsContainer.appendChild(mealsDiv)

    });

}

mealsDataLoad();