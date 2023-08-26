  function fetchApi() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res =>  res.json())
    .then(data=> {console.log(data);}
    ).catch(function(err){
        console.log(err);
    })
}

// let btton = document.getElementsByClassName("btn");


// btton.addEven
fetchApi();