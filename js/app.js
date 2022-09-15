function go() {
	window.open(
		"https://www.smartr.me/api/public/profiles/gaganpreet.singh166/localized-resume",
		"_blank"
	);
}
function gotofylo() {
	window.open("https://gaganpreet-webdeveloper.github.io/Fylo/", "_blank");
}

function gotowebnotes() {
	window.open("https://webnotes179.netlify.app/", "_blank");
}

function gotoportfolio() {
	window.open("https://gaganpreet-webdeveloper.github.io/", "_blank");
}

var typed = new Typed(".auto-type", {
	strings: ["Developer...", "Student...", "Codder..."],
	typeSpeed: 150,
	backSpeed: 150,
	loop: true,
});

const P_img1 = document.getElementById("P_img1");
P_img1.addEventListener("mouseover", function mouseover(e) {
	e.target.style.border = "none";
	e.target.style.transform = "scale(1.1)";
	e.target.style.boxShadow = "5px 5px 20px #4fc9da";
	e.target.style.transitionDuration = "2s";
});
P_img1.addEventListener("mouseout", function mouseout(e) {
	e.target.style.transform = "none";
	e.target.style.boxShadow = "none";
	e.target.style.border = "1px solid #4fc9da";
	e.target.style.transitionDuration = "2s";
});
const P_img2 = document.getElementById("P_img2");
P_img2.addEventListener("mouseover", function mouseover(e) {
	e.target.style.border = "none";
	e.target.style.transform = "scale(1.1)";
	e.target.style.boxShadow = "5px 5px 25px rgba(238,78,52,200)";
	e.target.style.transitionDuration = "2s";
});
P_img2.addEventListener("mouseout", function mouseout(e) {
	e.target.style.transform = "none";
	e.target.style.boxShadow = "none";
	e.target.style.border = "1px solid rgba(238,78,52,200)";
	e.target.style.transitionDuration = "2s";
});
const P_img3 = document.getElementById("P_img3");
P_img3.addEventListener("mouseover", function mouseover(e) {
	e.target.style.border = "none";
	e.target.style.transform = "scale(1.02)";
	e.target.style.boxShadow = "5px 5px 20px #4fc9da";
	e.target.style.transitionDuration = "2s";
});
P_img3.addEventListener("mouseout", function mouseout(e) {
	e.target.style.transform = "none";
	e.target.style.boxShadow = "none";
	e.target.style.border = "1px solid #4fc9da";
	e.target.style.transitionDuration = "2s";
});

// project section start

const project1 = document.getElementById("p1");
project1.addEventListener();
