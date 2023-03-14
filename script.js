"use strict";

console.log("yo");

const hamburger = document.querySelector(".hamburger__container");
const menu = document.querySelector(".header__nav__hamburger");
const container = document.querySelector(".container");
const mobileNavigation = document.querySelector(".mobile__navigation");

hamburger.addEventListener("click", function (e) {
  e.preventDefault;
  menu.classList.toggle("hamburger__active");
  container.classList.toggle("container__menu__active");
  mobileNavigation.classList.toggle("mobile__nav");
  mobileNavigation.classList.toggle("mobile__navigation__hidden");
});
