// it create a favourites meal array if its not exist in local storage
if (localStorage.getItem("favouritesMeal") == null) {
    localStorage.setItem("favouritesMeal", JSON.stringify([]));
}


// taking values from  search button

// let searchButton = document.getElementById('searchInput').value;
// console.log(searchButton);

function checkMeal() {
    let searchButton = document.getElementById('searchInput').value;
    console.log(searchButton);
    if (!searchButton) {
        document.getElementById('main-body').innerHTML = `<h2 style="text-align:center; margin:auto">Not found! Please search your Meal...</h2>`
    } else { fetchApi() }

}



function fetchApi() {
    let searchButton = document.getElementById('searchInput').value;
    console.log(searchButton);
    let arr = JSON.parse(localStorage.getItem("favouritesMeal"));
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
    fetch(`${url + searchButton}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            let displayData = "";
            if (data.meals) {
                data.meals.map(values => {
                    console.log(values.strMeal);
                    let isFav = false;
                    for (let index = 0; index < arr?.length; index++) {
                        if (arr[index] == values.idMeal) {
                            isFav = true;
                        }
                    }
                    console.log(values.strMeal);

                    if (isFav) {
                        displayData += `<div class="card" style="width: 18rem;">
            <img src=${values.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${values.strMeal.substr(0, 20)}...</h5>
                <p class="card-text">${values.strInstructions.substr(0, 50)}...</p>
              <a href= "detailMeal.html" class="btn btn-outline-dark" onclick="storeData(${values.idMeal})">More Details</a>

                <a href="#" class="btn btn-primary" style="background-color: #ff0000;" onclick="addRemoveToFavList(${values.idMeal})" >Remove</a>
            </div>
        </div>`

                    } else {
                        displayData += `<div class="card" style="width: 18rem;">
                    <img src=${values.strMealThumb} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${values.strMeal.substr(0, 20)}...</h5>
                        <p class="card-text">${values.strInstructions.substr(0, 50)}...</p>
                      <a href= "detailMeal.html" class="btn btn-outline-dark" onclick="storeData(${values.idMeal})">More Details</a>
        
                        <a href="#" class="btn btn-primary" style="background-color: blue;" onclick="addRemoveToFavList(${values.idMeal})" >Add</a>
                    </div>
                </div>`;
                    }

                });
            } else {
                displayData += `
                <div class="page-wrap d-flex flex-row align-items-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-12 text-center">
                                <span class="display-1 d-block">404</span>
                                <div class="mb-4 lead">
                                    The meal you are looking for was not found.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }
            let check = document.getElementById('main-body').innerHTML = displayData;
            console.log(check);
            console.log(searchButton)
        }).catch(function (err) {
            console.log(err);
        })
}

// fetchApi();

function storeData(id) {
    const data = id;
    localStorage.setItem('MealId', id);
}


//show fav list
async function showFavMealList() {
    let arr = JSON.parse(localStorage.getItem("favouritesMeal"));
    let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
    let html = "";
    if (arr.length == 0) {
        html += `
            <div class="page-wrap d-flex flex-row align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            <span class="display-1 d-block">404</span>
                            <div class="mb-4 lead">
                                No meal added in your favourites list.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
    } else {
        for (let index = 0; index < arr.length; index++) {
            await fetch(url + arr[index]).then(res => res.json()).then((data) => {
                html += `
                <div id="card" class="card mb-3" style="width: 20rem;">
                    <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.meals[0].strMeal}</h5>
                        <div class="d-flex justify-content-between mt-5">
                        <a href= "detailMeal.html" class="btn btn-outline-dark" onclick="storeData(${data.meals[0].idMeal})">More Details</a>
        
                        <a href="#" class="btn btn-primary" style="background-color: blue;" onclick="addRemoveToFavList(${data.meals[0].idMeal})" >Remove</a>
                        </div>
                    </div>
                </div>
                `;
            });
        }
    }
    document.getElementById("favourites-body").innerHTML = html;
}



function addRemoveToFavList(id) {
    let arr = JSON.parse(localStorage.getItem("favouritesMeal"));
    let contain = false;
    for (let index = 0; index < arr?.length; index++) {
        if (id == arr[index]) {
            contain = true;
        }
    }
    if (contain) {
        let number = arr.indexOf(id);
        arr.splice(number, 1);
        alert("Meal removed from favourites list");
    } else {
        arr.push(id);
        alert("Meal added to favourites list");
    }
    localStorage.setItem("favouritesMeal", JSON.stringify(arr));
    fetchApi();
    showFavMealList();
}