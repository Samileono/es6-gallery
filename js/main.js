// const imgs = document.querySelectorAll('.imgs img');
// const current = document.querySelector('#current');
// const opacity = .5;

// // set first image opacity
// imgs[0].style.opacity = opacity;
// imgs.forEach(img => img.addEventListener('click', imgClick));

// function imgClick(e) {

//     imgs.forEach(img => (img.style.opacity = 1));
//     current.src = (e.target.src);
//     // adding the fade-in effect
//     current.classList.add('fade-in');

//     // removes the class after .5s
//     setTimeout(() => current.classList.remove('fade-in'), 5000);

//     e.target.style.opacity = opacity;
//     console.log(e.target.style.opacity);
// }


const imgs = document.querySelectorAll(".imgs img");
const current = document.querySelector("#current");
const opacity = .5;

imgs.forEach(img => img.addEventListener("click", imgClick));
imgs[0].style.opacity = opacity;
function imgClick(e) {
    imgs.forEach(img => {img.style.opacity = "1"});

    current.src = e.target.src;
    current.classList.add("fade-in");

    setTimeout(() => current.classList.remove("fade-in"), 500);
    e.target.style.opacity = opacity;
}