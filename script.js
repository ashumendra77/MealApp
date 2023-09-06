// it create a favourites meal array if its not exist in local storage
// if (localStorage.getItem("favouritesMeal") == null) {
//     localStorage.setItem("favouritesMeal", JSON.stringify([]));
// }


// select search button

let searchButton = document.getElementsByClassName('search').values;
console.log(searchButton);

function fetchApi() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            let displayData = "";
            data.meals.map(values => {
                console.log(values.strMeal);
                displayData += `<div class="card" style="width: 18rem;">
            <img src=${values.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${values.strMeal.substr(0, 20)}...</h5>
                <p class="card-text">${values.strInstructions.substr(0, 50)}...</p>
              <a href= "detailMeal.html" class="btn btn-outline-dark" onclick="storeData(${values.idMeal})">More Details</a>

                <a href="#" class="btn btn-primary">Add</a>
            </div>
        </div>`
            })
// style="border-radius:50%
            let check = document.getElementById('main-body').innerHTML = displayData;
            console.log(check);
        }
        ).catch(function (err) {
            console.log(err);
        })
}

fetchApi();

function storeData(id) {
    const data = id;
    localStorage.setItem('MealId', id);
  }


// Show Meal details 

// function showMealDetail(id) {
//     // console.log(id)
//     // storeData(id)
//     let displayDetails = "";

//     fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
//         .then(res => res.json())
//         .then((data) => {
//             console.log(data);
//             console.log(data.meals[0].idMeal);
//             displayDetails += `<div id="meal-details" class="mb-5">
//             <img class="d-image"
//             src=${data.meals[0].strMealThumb}
//             alt="Veg Meal">
//         <h1 class="d-h">Veg Manchurion</h1>
//             </div>`;
//             document.getElementById('details').innerHTML = displayDetails;

//         });

   
//  }