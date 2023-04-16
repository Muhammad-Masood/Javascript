(async function(){

    const response = await fetch("./data.json");
    const movies = await response.json();

    const year = document.getElementById("year");
    const genre = document.getElementById("genre");
    const language = document.getElementById("language");
    const recBut = document.getElementById("rcmd")

    function recommend(){   
        const gQuery = genre.value.toLowerCase();
        const lQuery = language.value.toLowerCase();
        const yQuery = year.value.toString();
        const results = movies.filter(function(movie){
           return(movie.release_date.includes(yQuery) 
           && movie.original_language.toLowerCase().includes(lQuery)
           && (Array.isArray(movie.genres) ? movie.genres.join(" ").toLowerCase() : movie.genres.toLowerCase()).includes(gQuery))
        });
        console.log(results);
        displayRcmd(results);
    }
    recBut.addEventListener("click",recommend);

    const movieList = document.getElementById("_movieList");
    function displayRcmd(results){
        movieList.innerHTML="";
        results.forEach(function(movie){
            const li = document.createElement('li');
            const movieItem = `
            <li>
            ${movie.title} &nbsp &nbsp ${movie.release_date}
            </li>
            `
            li.innerHTML = movieItem;
            movieList.appendChild(li);
        });
    }

}) ();