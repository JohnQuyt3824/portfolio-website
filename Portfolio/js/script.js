/* ==========================================
   PORTFOLIO WEBSITE - SCRIPT.JS
   Author: Le Bao Quan
========================================== */

// ======================
// Sticky Header
// ======================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

    }

});

// ======================
// Scroll Animation
// ======================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

const hiddenElements = document.querySelectorAll(

".hero,.about,.project,.project-card,.hobby,.hobby-card,.blog,.blog-item,.contact,.skill-card"

);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ======================
// Contact Form
// ======================

const forms = document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    });

});

// ======================
// Download Resume Button
// ======================

const downloadBtns = document.querySelectorAll(".btn");

downloadBtns.forEach(btn=>{

    if(btn.textContent.includes("Download")){

        btn.addEventListener("click",function(e){

            e.preventDefault();

            alert("Resume will be available soon.");

        });

    }

});

// ======================
// Back To Top Button
// ======================

const topBtn = document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ======================
// Active Navigation
// ======================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.classList.remove("active");

    if(link.getAttribute("href")===currentPage){

        link.classList.add("active");

    }

});

// ======================
// Smooth Scroll
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ======================
// Image Hover Effect
// ======================

const images=document.querySelectorAll("img");

images.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.03)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

// ======================
// Typing Effect
// ======================

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

const text=heroTitle.innerText;

heroTitle.innerHTML="";

let i=0;

function typing(){

    if(i<text.length){

        heroTitle.innerHTML+=text.charAt(i);

        i++;

        setTimeout(typing,70);

    }

}

typing();

}

// ======================
// Card Hover Shadow
// ======================

const cards=document.querySelectorAll(

".project-card,.hobby-card,.blog-item,.skill-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 12px 25px rgba(0,0,0,.18)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

});

});

// ======================
// Dark Mode
// ======================

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.style.position="fixed";

darkBtn.style.bottom="90px";

darkBtn.style.right="25px";

darkBtn.style.width="50px";

darkBtn.style.height="50px";

darkBtn.style.borderRadius="50%";

darkBtn.style.border="none";

darkBtn.style.cursor="pointer";

darkBtn.style.background="#111";

darkBtn.style.color="#fff";

darkBtn.style.fontSize="20px";

darkBtn.style.zIndex="999";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

darkBtn.innerHTML="☀";

}

else{

darkBtn.innerHTML="🌙";

}

});

// ======================
// Footer Year
// ======================

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Le Bao Quan. All Rights Reserved.";

}

// ======================
// Console
// ======================

console.log("Portfolio Website Loaded Successfully!");