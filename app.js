//Loader js

//Get the overlay div
const overlay = document.getElementById('overlay');

//Add eventlistener for loader
window.addEventListener('load', function() {
    overlay.style.display = "none";
});


//Slide down nav Js
window.addEventListener('scroll', scrollFunction);

//Scroll Function
function scrollFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        document.querySelector(".head").style.position = "fixed";
        document.querySelector(".head").style.left = "0";
        document.querySelector(".head").style.top = "0"
    } else {
        document.querySelector(".head").style.position = "";
    }
}


//Snackbar functionality

const getMail = document.getElementById('mail');
const ele = document.getElementById('snackbar');

getMail.addEventListener('mouseenter', snackbarShow);

function snackbarShow() {
    
    ele.className = "show";

    setTimeout(remove, 4000);
}

//remove Show class
function remove(){
    ele.className = ele.className.replace('show', '');
}


//MultiStep form

const form1 = document.getElementById("form-1");
const form2 = document.getElementById("form-2");
const form3 = document.getElementById("form-3");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");

const progress = document.getElementById("progress");

next1.addEventListener('click', function() {
    form1.style.left = "-1080px";
    form2.style.left = "120px";
    progress.style.width ="720px";
});

back1.addEventListener('click', function() {
    form1.style.left = "120px";
    form2.style.left = "1080px";
    progress.style.width ="360px";
});

next2.addEventListener('click', function() {
    form2.style.left = "-1080px";
    form3.style.left = "120px";
    progress.style.width ="1080px";
});

back2.addEventListener('click', function() {
    form2.style.left = "120px";
    form3.style.left = "1080px";
    progress.style.width ="720px";
});


//Accordians event handler

const acc = document.querySelectorAll(".accordion");


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
}
