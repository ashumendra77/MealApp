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
              <button  type="button" class="btn btn-outline-light" onclick="showMealDetails(${values.idMeal})">More Details</button>

                <a href="#" class="btn btn-primary" style="border-radius:50%"> <i class="fa-solid fa-heart"></i></a>
            </div>
        </div>`
            })

            let check = document.getElementById('main-body').innerHTML = displayData;
            console.log(check);
        }
        ).catch(function (err) {
            console.log(err);
        })
}

// onclick = "showMealDetail(52772)"
//               <button  type="button" class="btn btn-outline-light" onclick="showMealDetail()">More Details</button>

// btton.addEven
fetchApi();


function showMealDetails(id) {
    let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
    let html = "";
     fetch(url).then(res => res.json()).then((data) => {
        console.log(data.meals[0].idMeal);
        html +=  `
        <div id="meal-details" class="mb-5">
          <div id="meal-header" class="d-flex justify-content-around flex-wrap">
            <div id="meal-thumbail">
              <img class="mb-2" src="${data.meals[0].strMealThumb}" alt="" srcset="">
            </div>
            <div id="details">
              <h3>${data.meals[0].strMeal}</h3>
              <h6>Category : ${data.meals[0].strCategory}</h6>
              <h6>Area : ${data.meals[0].strArea}</h6>
            </div>
          </div>
          <div id="meal-instruction" class="mt-3">
            <h5 class="text-center">Instruction :</h5>
            <p>${data.meals[0].strInstructions}</p>
          </div>
          <div class="text-center">
            <a href="${data.meals[0].strYoutube}" target="_blank" class="btn btn-outline-light mt-3">Watch Video</a>
            <a href="${data.meals[0].strSource}" target="_blank" class="btn btn-outline-light mt-3">Read Article</a>
          </div>
        </div>
      `;
    });
    const detail = document.getElementById("main-body").innerHTML = html;
    console.log(detail);
}


// Show Meal details 

// function showMealDetail(id) {
//     // console.log(id)
//     let displayDetails = "";

//     fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +id)
//         .then(res => res.json())
//         .then((data) => {
//             console.log(data);

//             // data.meals.map(values=>{
//             //     console.log(values.strMeal);
//             console.log(data.meals[0].idMeal);
//             displayDetails += `<div id="meal-details" class="mb-5">
//             <img class="d-image"
//             src=${data.meals[0].strMealThumb}
//             alt="Veg Meal">
//         <h1 class="d-h">Veg Manchurion</h1>
//             </div>`;
//             document.getElementById('details').innerHTML = displayDetails;

//         });

   
// }

// showMealDetail();
 // .catch(function (err) {
    //     console.log(err);
    // })
    // console.log(displayDetails);
    //         // let details = 
    // console.log(details);


   
