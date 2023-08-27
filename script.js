  function fetchApi() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then(res =>  res.json())
    .then((data)=> {
        console.log(data);
       let displayData = "";
        data.meals.map(values=>{
            console.log(values.strMeal);
            displayData += `<div class="card" style="width: 18rem;">
            <img src=${values.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${values.strMeal.substr(1,20)}...</h5>
                <p class="card-text">${values.strInstructions.substr(1,60)}...</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <a href="#" class="btn btn-primary">Add</a>
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

// let btton = document.getElementsByClassName("btn");


// btton.addEven
fetchApi();