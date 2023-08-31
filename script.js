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
                <p class="card-text">${values.strInstructions.substr(0, 60)}...</p>
                <button src="./detailMeal.html" type="button" class="btn btn-outline-light" onclick="showMealDetail()">More Details</button>
                <a href="#" class="btn btn-primary" style="border-radius:50%"> <i class="fa-solid fa-heart"></i></a>
            </div>
        </div>`
            })

            let check = document.querySelector('#main-body').innerHTML = displayData;
            console.log(check);
        }
        ).catch(function (err) {
            console.log(err);
        })
}

// onclick = "showMealDetail(52772)"

// btton.addEven
fetchApi();


// Show Meal details 

function showMealDetail() {
    // console.log(id)
    let displayDetails = "";

    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
        .then(res => res.json())
        .then((data) => {
            console.log(data);

            // data.meals.map(values=>{
            //     console.log(values.strMeal);
            console.log(data.meals[0].idMeal);
            displayDetails += `<div id="meal-details" class="mb-5">
            <img class="d-image"
            src=${data.meals[0].strMealThumb}
            alt="Veg Meal">
        <h1 class="d-h">Veg Manchurion</h1>
            </div>`;

        });
        document.querySelector("#details").innerHTML = displayDetails;

   
}

// showMealDetail();
 // .catch(function (err) {
    //     console.log(err);
    // })
    // console.log(displayDetails);
    //         // let details = 
    // console.log(details);


   
