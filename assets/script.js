const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Création des compteurs et variable*/
let nbreSlide = slides.length
let divActive = 0
let sourceImage = document.querySelector(".banner-img")
let sourceTagline = document.querySelector("#banner p")

/* Création des 4 points */
let i = 0
while (i < nbreSlide) {
	let divDot = document.createElement("div")
	let divDots = document.querySelector("div .dots")
	divDots.appendChild(divDot)
	divDot.classList.add("dot")
    i++
}

/* Ajout de la class="dot_selected" */
let listeDivs = document.querySelectorAll(".dots div")
listeDivs[0].classList.add("dot_selected")

/* Ajout de la flèche gauche */
let btFlecheGauche = document.querySelector("#banner .arrow_left");
btFlecheGauche.addEventListener("click", () => {
	if (divActive === 0) {
		divActive = nbreSlide-1
		listeDivs[0].classList.remove("dot_selected")
		listeDivs[divActive].classList.add("dot_selected")
		sourceImage.src = `./assets/images/slideshow/`+slides[divActive].image
		sourceTagline.innerHTML = slides[divActive].tagLine
	} else {
		divActive-- 
		listeDivs[divActive+1].classList.remove("dot_selected")
		listeDivs[divActive].classList.add("dot_selected")
		sourceImage.src = `./assets/images/slideshow/`+slides[divActive].image
		sourceTagline.innerHTML = slides[divActive].tagLine
	}
});

/* Ajout de la flèche droite */
let btFlecheDroite = document.querySelector("#banner .arrow_right");
btFlecheDroite.addEventListener("click", () => {
	if (divActive === nbreSlide-1) {
		divActive = 0
		listeDivs[divActive+nbreSlide-1].classList.remove("dot_selected")
		listeDivs[divActive].classList.add("dot_selected")
		sourceImage.src = `./assets/images/slideshow/`+slides[divActive].image
		sourceTagline.innerHTML = slides[divActive].tagLine
	} else {
		divActive++
		listeDivs[divActive-1].classList.remove("dot_selected")
		listeDivs[divActive].classList.add("dot_selected")
		sourceImage.src = `./assets/images/slideshow/`+slides[divActive].image
		sourceTagline.innerHTML = slides[divActive].tagLine
	}
});