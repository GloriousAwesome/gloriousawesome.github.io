let wejfhbehjdabvkjdznvkdbvjmwb = 7 + ( 1 / 3 ); //21.1 in base3

const button9008 = document.getElementById("greenGlassDoor"); // theme button

const savedTheme = localStorage.getItem("siteTheme"); // saved theme

if (savedTheme === "green") {
    document.body.classList.add("green-theme");
    button9008.innerText = "enter the ciTy of Oz";
}

button9008.addEventListener("click", function() {
    // what happens when the button9008 is clicked
    //feast.on(beans);

    document.body.classList.toggle("green-theme");

    if (document.body.classList.contains("green-theme")) {
        localStorage.setItem("siteTheme", "green");
        button9008.innerText = "explodeAllColor(excepttheothercolors☆*: .｡. o(≧▽≦)o .｡.:*☆)";
    } else {
        localStorage.setItem("siteTheme", "non-green");
        button9008.innerText = "go back to great Ness <-- character from Earthbound";
    }

});