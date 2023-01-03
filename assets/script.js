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
];
const dots = document.getElementById("dots");
for (let i = 0; i < slides.length; i++) {
	dots.innerHTML += "<li class='dot'></li>";
	const dot = document.createElement("li");
      dot.classList.add("dot");
}
const dot = document.getElementsByClassName('dot');
let i = 0;
dot[i].classList.add("dot_selected");
function sliderImg(i) {
	document.querySelector("#banner > img").src=`./assets/images/slideshow/${slides[i].image}`;
	document.querySelector("#banner > p").innerHTML = slides[i].tagLine;
	if (dot[i]) {
		dot[i].classList.add("dot_selected");
	}
}
document.getElementById("arrow_left").addEventListener('click', function() {
	if(i > 0) {
		dot[i].classList.remove("dot_selected");
		i--;
		sliderImg(i);
	}
	else {
		dot[i].classList.remove("dot_selected");
		i = slides.length -1;
		sliderImg(i);
	}
});
document.getElementById("arrow_right").addEventListener('click', function() {
	if(i < (slides.length -1)) {
		dot[i].classList.remove("dot_selected");
		i++;
		sliderImg(i);
	}
	else {
		dot[i].classList.remove("dot_selected");
		i = 0;
		sliderImg(i);

	}
});


