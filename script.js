//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn")
var allpages = document.querySelectorAll(".page");

//select all subtopic pages
console.log(allpages);

hideall();
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    //show the page
    onepage.style.display = "block";
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});

/*JS for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("nav ul");
function toggleMenus(){ /*open and close menu*/
if(menuItemsList.style.display=="block")
menuItemsList.style.display="none";
else menuItemsList.style.display="block";
}

document.addEventListener("DOMContentLoaded", function () {
    const windowHeight = window.innerHeight;

    function revealSectionOnScroll(sectionElement) {
        const sectionTop = sectionElement.getBoundingClientRect().top;
        const sectionBottom = sectionElement.getBoundingClientRect().bottom;
        const sectionHeight = sectionBottom - sectionTop;
        const sectionMidpoint = sectionTop + sectionHeight / 2;

        if (sectionMidpoint < windowHeight && sectionMidpoint > 0) {
            sectionElement.classList.add("fade-in-element");
            sectionElement.classList.remove("fade-out-element");
        } else {
            sectionElement.classList.remove("fade-in-element"); // Remove the class if not in the middle
            sectionElement.classList.add("fade-out-element");
        }
    }

    const sections = document.querySelectorAll(".hosui, .shinseiki, .bartlett, .bosc");
    sections.forEach((section) => {
        window.addEventListener("scroll", function () {
            revealSectionOnScroll(section);
        });
        revealSectionOnScroll(section);
    });
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}



  