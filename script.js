/*==================================================
  SURVEY.COM PREMIUM DASHBOARD
  script.js
  PART 3A-1
  App Initialization • Hamburger Menu • Sidebar
==================================================*/

"use strict";

/*==============================
  APP
==============================*/

const app = {

    name: "Survey.com",

    version: "1.0.0"

};

console.log(app.name + " Dashboard Loaded");

/*==============================
  SELECTORS
==============================*/

const menuBtn = document.getElementById("menu-btn");

const sidebar = document.getElementById("sidebar");

const body = document.body;

const menuLinks = document.querySelectorAll(".sidebar-menu a");

/*==============================
  CREATE OVERLAY
==============================*/

const overlay = document.createElement("div");

overlay.className = "sidebar-overlay";

body.appendChild(overlay);

/*==============================
  OPEN SIDEBAR
==============================*/

function openSidebar(){

    sidebar.classList.add("active");

    overlay.classList.add("show");

    body.classList.add("menu-open");

}

/*==============================
  CLOSE SIDEBAR
==============================*/

function closeSidebar(){

    sidebar.classList.remove("active");

    overlay.classList.remove("show");

    body.classList.remove("menu-open");

}

/*==============================
  TOGGLE SIDEBAR
==============================*/

function toggleSidebar(){

    sidebar.classList.toggle("active");

    overlay.classList.toggle("show");

    body.classList.toggle("menu-open");

}

/*==============================
  HAMBURGER BUTTON
==============================*/

if(menuBtn){

    menuBtn.addEventListener("click",toggleSidebar);

}

/*==============================
  OVERLAY CLICK
==============================*/

overlay.addEventListener("click",closeSidebar);

/*==============================
  ESC KEY
==============================*/

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        closeSidebar();

    }

});

/*==============================
  ACTIVE MENU
==============================*/

menuLinks.forEach(link=>{

    link.addEventListener("click",function(){

        menuLinks.forEach(item=>{

            item.classList.remove("active");

        });

        this.classList.add("active");

        if(window.innerWidth<992){

            closeSidebar();

        }

    });

});

/*==============================
  WINDOW RESIZE
==============================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth>=992){

        overlay.classList.remove("show");

        body.classList.remove("menu-open");

    }

});

/*==============================
  PAGE LOADER
==============================*/

window.addEventListener("load",()=>{

    body.classList.add("loaded");

});

/*==============================
  SCROLL HEADER
==============================*/

const header = document.querySelector(".top-header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

/*==============================
  END PART 3A-1
==============================*//*==================================================
  SURVEY.COM PREMIUM DASHBOARD
  script.js
  PART 3A-2
  Dark Mode • Smooth Scroll • Back To Top
==================================================*/

"use strict";

/*==============================
  DARK MODE
==============================*/

const darkModeToggle = document.getElementById("darkModeToggle");

/* Load saved theme */

const savedTheme = localStorage.getItem("survey-theme");

if(savedTheme==="dark"){

    document.body.classList.add("dark-theme");

}

/* Toggle Theme */

if(darkModeToggle){

darkModeToggle.addEventListener("click",function(e){

e.preventDefault();

document.body.classList.toggle("dark-theme");

if(document.body.classList.contains("dark-theme")){

localStorage.setItem("survey-theme","dark");

}else{

localStorage.setItem("survey-theme","light");

}

});

}

/*==============================
  SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*==============================
  BACK TO TOP
==============================*/

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(!backToTop) return;

if(window.scrollY>300){

backToTop.style.display="flex";

}else{

backToTop.style.display="none";

}

});

if(backToTop){

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==============================
  ACTIVE SECTION
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".sidebar-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.offsetHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

const href=link.getAttribute("href");

if(href==="#" + current){

link.classList.add("active");

}

});

});

/*==============================
  PAGE FADE-IN
==============================*/

window.addEventListener("load",()=>{

document.body.classList.add("fade-in");

});

/*==============================
  TOOLTIP EFFECT
==============================*/

document.querySelectorAll("[data-tooltip]").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.classList.add("show-tooltip");

});

item.addEventListener("mouseleave",()=>{

item.classList.remove("show-tooltip");

});

});

/*==============================
  END PART 3A-2
==============================*//*==================================================
  SURVEY.COM PREMIUM DASHBOARD
  script.js
  PART 3A-3
  Welcome Bonus • Dashboard Counters • Notifications
==================================================*/

"use strict";

/*==============================
  USER DATA
==============================*/

let user = {

    username: "Morde",

    level: "Gold",

    welcomeBonus: 150,

    balance: 150,

    earnings: 0,

    surveyPoints: 150,

    referralEarnings: 0,

    completed: 0,

    available: 25,

    notifications: 4

};

/*==============================
  ELEMENTS
==============================*/

const balanceElement =
document.getElementById("availableBalance");

const earningsElement =
document.getElementById("totalEarnings");

const pointsElement =
document.getElementById("surveyPoints");

const referralElement =
document.getElementById("referralEarnings");

const completedElement =
document.getElementById("completedSurveys");

const availableElement =
document.getElementById("availableSurveys");

/*==============================
  UPDATE DASHBOARD
==============================*/

function updateDashboard(){

if(balanceElement)
balanceElement.innerHTML =
"KSh " + user.balance.toFixed(2);

if(earningsElement)
earningsElement.innerHTML =
"KSh " + user.earnings.toFixed(2);

if(pointsElement)
pointsElement.innerHTML =
user.surveyPoints;

if(referralElement)
referralElement.innerHTML =
"KSh " + user.referralEarnings.toFixed(2);

if(completedElement)
completedElement.innerHTML =
user.completed;

if(availableElement)
availableElement.innerHTML =
user.available;

}

updateDashboard();

/*==============================
  WELCOME BONUS
==============================*/

if(!localStorage.getItem("welcomeBonus")){

setTimeout(function(){

alert(
"🎉 Welcome to Survey.com!\n\nYou have received your Welcome Bonus of KSh 150."
);

localStorage.setItem(
"welcomeBonus",
"claimed"
);

},1500);

}

/*==============================
  COUNTER ANIMATION
==============================*/

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target =
+counter.getAttribute("data-target");

const current =
+counter.innerText;

const increment =
Math.ceil(target/100);

if(current<target){

counter.innerText=current+increment;

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});

/*==============================
  NOTIFICATIONS
==============================*/

const messages=[

"🆕 New Technology survey available!",

"💰 Complete a survey and earn up to KSh 250.",

"🎁 Daily bonus is ready to claim.",

"⭐ Invite friends and earn referral rewards.",

"📊 Your dashboard has been updated."

];

function showNotification(message){

const box=document.createElement("div");

box.className="notification";

box.innerHTML=message;

document.body.appendChild(box);

setTimeout(()=>{

box.classList.add("show");

},100);

setTimeout(()=>{

box.classList.remove("show");

setTimeout(()=>{

box.remove();

},500);

},5000);

}

let noticeIndex=0;

setInterval(()=>{

showNotification(messages[noticeIndex]);

noticeIndex++;

if(noticeIndex>=messages.length){

noticeIndex=0;

}

},30000);

/*==============================
  CURRENT DATE
==============================*/

const todayElement=
document.getElementById("todayDate");

if(todayElement){

const today=new Date();

todayElement.innerHTML=
today.toDateString();

}

/*==============================
  GREETING
==============================*/

const greeting=
document.getElementById("greeting");

if(greeting){

const hour=new Date().getHours();

if(hour<12){

greeting.innerHTML=
"☀️ Good Morning";

}else if(hour<18){

greeting.innerHTML=
"🌤 Good Afternoon";

}else{

greeting.innerHTML=
"🌙 Good Evening";

}

}

/*==============================
  END PART 3A-3
==================================================*//*==================================================
  SURVEY.COM PREMIUM DASHBOARD
  script.js
  PART 3B
  Survey Search • Categories • Countdown Timers
==================================================*/

"use strict";

/*==============================
  SURVEY SEARCH
==============================*/

const searchInput =
document.getElementById("surveySearch");

const surveyCards =
document.querySelectorAll(".survey-card");


if(searchInput){

searchInput.addEventListener("input",function(){

const value =
this.value.toLowerCase();


surveyCards.forEach(card=>{

const text =
card.innerText.toLowerCase();


if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});


});

}


/*==============================
  CATEGORY FILTER
==============================*/

const categoryButtons =
document.querySelectorAll(".category");


categoryButtons.forEach(button=>{


button.addEventListener("click",()=>{


categoryButtons.forEach(btn=>{

btn.classList.remove("active");

});


button.classList.add("active");


const category =
button.innerText.toLowerCase()
.replace(/[^\w\s]/gi,"")
.trim();


surveyCards.forEach(card=>{


const content =
card.innerText.toLowerCase();


if(category==="all"){

card.style.display="block";

}

else if(content.includes(category)){

card.style.display="block";

}

else{

card.style.display="none";

}


});


});


});


/*==============================
  SURVEY COUNTDOWN TIMER
==============================*/


const timers =
document.querySelectorAll(".timer");


timers.forEach(timer=>{


let time =
timer.innerText.split(":");


let hours =
parseInt(time[0]);


let minutes =
parseInt(time[1]);


let seconds =
parseInt(time[2]);



const countdown=setInterval(()=>{


if(seconds>0){

seconds--;

}

else if(minutes>0){

minutes--;

seconds=59;

}

else if(hours>0){

hours--;

minutes=59;

seconds=59;

}

else{


clearInterval(countdown);


timer.innerHTML="EXPIRED";


const card =
timer.closest(".survey-card");


if(card){


const button =
card.querySelector(".btn-primary");


if(button){

button.disabled=true;

button.innerHTML=
"Survey Expired";


button.classList.add(
"disabled"
);


}


}


return;

}



timer.innerHTML=

String(hours).padStart(2,"0")
+":"
+
String(minutes).padStart(2,"0")
+":"
+
String(seconds).padStart(2,"0");



},1000);



});



/*==============================
  SORT SURVEYS
==============================*/


const sortSelect =
document.querySelector(".filter-box select");


if(sortSelect){


sortSelect.addEventListener("change",()=>{


const container =
document.querySelector(".survey-grid");


const cards =
Array.from(
container.children
);


let option =
sortSelect.value;



if(option==="Highest Reward"){


cards.sort((a,b)=>{


let rewardA =
parseInt(
a.querySelector(".reward")
.innerText.replace(/\D/g,"")
);


let rewardB =
parseInt(
b.querySelector(".reward")
.innerText.replace(/\D/g,"")
);


return rewardB-rewardA;


});


}



cards.forEach(card=>{

container.appendChild(card);

});


});


}



/*==============================
  START SURVEY BUTTON
==============================*/


const startButtons =
document.querySelectorAll(".survey-card .btn-primary");



startButtons.forEach(button=>{


button.addEventListener("click",()=>{


const card =
button.closest(".survey-card");


const title =
card.querySelector("h3").innerText;


alert(

"📝 Starting Survey:\n\n"
+
title
+
"\n\nAnswer questions honestly to receive your reward."

);


});


});



/*==============================
  END PART 3B
==================================================*/
