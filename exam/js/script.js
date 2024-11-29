// --------------typed js---------------

var typed = new Typed(".auto-type", {
    strings: ["Designer" , "Larry Daniels","Developer" ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true,
    cursorChar: "|",
})

// --------------counter and progress---------------


let section_about = document.querySelector(".about");
let progs = document.querySelectorAll(".all-about .progress .progress-bar");
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".row");
let started = false; 

window.onscroll = function () {
    // Progress Bars Animation
    if (window.scrollY >= section_about.offsetTop-200) {
        progs.forEach((div) => {
            div.style.width = div.dataset.width;
        });
    }

    // Counter Animation
    if (window.scrollY >= section.offsetTop+2430 && !started) {
        nums.forEach((num) => startCount(num));
        started = true;
    }
};

function startCount(el) {
    let goal = parseInt(el.dataset.goal, 10);
    let count = 0;
    let increment = Math.ceil(goal / 100); 
    let counting = setInterval(() => {
        count += increment;
        if (count >= goal) {
            el.textContent = goal; 
            clearInterval(counting);
        } else {
            el.textContent = count; 
        }
    }, 50); 
}

//----------owl------------------
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
//--------------------navbar------------------


//--------------------loading------------------

// window.addEventListener('scroll', () => {
//     const nav = document.getElementById('navbar');
//     if (window.scrollY > 700) { 
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
// });

// window.addEventListener("load", () => {
//     const loader = document.querySelector(".loader") ;
//     loader.classList.add("loader-hidden");
//     loader.addEventListener( "transitionend",() => {
//         document.body.removeChild("loader");
//     }

//     )
// }
// )
// Debounce function to improve scroll performance


//--------------------loading------------------
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");

    // Hide the loader after 500ms or when the content is ready
    setTimeout(() => {
        loader.classList.add("loader-hidden");

        // Remove loader after fade-out transition ends
        loader.addEventListener("transitionend", () => {
            loader.remove(); // Removes the loader element from the DOM
        });
    }, 500); // Adjust this delay as needed
});



