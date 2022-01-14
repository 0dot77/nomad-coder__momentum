const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// const imgSite = document.querySelector(".screen-main .screen-main__img");

const imgSite = document.querySelector(".screen-main");
imgSite.style.backgroundImage = "url("+`img/${chosenImage}`+")";
imgSite.style.backgroundSize = "50% 50%";
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// bgImage.style.width = "100%";
// bgImage.style.height = "100%";


// imgSite.appendChild(bgImage);

console.dir(imgSite);