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
==============================*/
