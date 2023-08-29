  // it create a favourites meal array if its not exist in local storage
// if (localStorage.getItem("favouritesMeal") == null) {
//     localStorage.setItem("favouritesMeal", JSON.stringify([]));
// }


// select search button

let searchButton = document.getElementsByClassName('search').values;
console.log(searchButton);
  
  function fetchApi() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
    .then(res =>  res.json())
    .then((data)=> {
        console.log(data);
       let displayData = "";
        data.meals.map(values=>{
            console.log(values.strMeal);
            displayData += `<div class="card" style="width: 18rem;">
            <img src=${values.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${values.strMeal.substr(0,20)}...</h5>
                <p class="card-text">${values.strInstructions.substr(0,60)}...</p>
                <a href="./detailMeal.html" class="btn btn-primary">Read more</a>
                <a href="#" class="btn btn-primary" style="border-radius:50%"> <i class="fa-solid fa-heart"></i></a>
            </div>
        </div>`
        })
    
    let check = document.getElementById('main-body').innerHTML = displayData;
    console.log(check);
    }
    ).catch(function(err){
        console.log(err);
    })
}



// btton.addEven
fetchApi();