import { getMovies } from "./getMovies.js";

var slideContainer = document.querySelector(".slide_container");

const movies = await getMovies();

for (var i = 0; i < movies.length; i++) {
    const colorThief = new ColorThief();

    let imageURL = `https://image.tmdb.org/t/p/w400/${movies[i]["poster_path"]}`;
    let title = movies[i]["original_title"];
    let overview = movies[i]["overview"];
    let iteration = i;

    let googleProxyURL =
        "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = googleProxyURL + encodeURIComponent(imageURL);

    img.addEventListener("load", function () {
        const color = colorThief.getColor(img);
        slideContainer.innerHTML += `<div class="slide slide_${iteration}"> <img src="${imageURL}" alt="" /> <div class="descriptif">
        <p class="title">${title}</p> <p class="description">${overview}</p></div>`;
        const slide = document.querySelector(`.slide_${iteration}`);
        slide.style.backgroundColor = `rgb(${color})`;
    });

    //const color = colorThief.getColor(img);
}
