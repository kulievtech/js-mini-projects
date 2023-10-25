"use strict";

// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function (event) {
    event.preventDefault();

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// Implementing Smooth Scrolling for Learn More Button

btnScrollTo.addEventListener("click", function (e) {
    const s1coords = section1.getBoundingClientRect();

    // console.log(s1coords);

    // Scrolling

    // window.scrollTo(
    //     s1coords.left + pageXOffset,
    //     s1coords.top + window.pageYOffset
    // );

    // window.scrollTo({
    //     left: s1coords.left + pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: "smooth"
    // });

    section1.scrollIntoView({ behavior: "smooth" });
});

// Page Navigation

// document.querySelectorAll(".nav__link").forEach(function (el) {
//     el.addEventListener("click", function (e) {
//         e.preventDefault();

//         const id = this.getAttribute("href");

//         document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
    // Matching Strategy

    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");

        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});

// Tabbed Component

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");

    // Guard Clause
    if (!clicked) return;

    // Remove active classes

    tabs.forEach((t) => t.classList.remove("operations__tab--active"));

    tabsContent.forEach((c) =>
        c.classList.remove("operations__content--active")
    );

    // Active tab

    clicked.classList.add("operations__tab--active");

    // Active content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
});

// Lectures

// Selecting Elements

// console.log(document.documentElement); // selects all the HTML
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(".header"); // selects the very first class that starts with header

// const allSections = document.querySelectorAll(".section"); // selects all the classes that that are name section

// console.log(allSections); // NodeList of 4 sections

// document.getElementById("section-1"); // selects element by id.

// const allButtons = document.getElementsByTagName("button"); // Selects all the buttons by tag name not class.

// console.log(allButtons); // HTML collection of 9;

// console.log(document.getElementsByClassName("btn"));

// Creating and inserting elements

// .insertAdjacentHTML         Easy way

// const message = document.createElement("div"); // created div element
// message.classList.add("cookie-message");
// message.textContent =
//     "We use cookies for improved functionality and analytics.";
// message.innerHTML =
//     'We use cookies for improved functionality and analytics. <button class="btn btn-close-cookie"> Got it!</button>';

// header.prepend(message); // adds as the first child of header

// header.append(message); // adds as the last child of header

// header.append(message.cloneNode(true));  // we have have now at the top and bottom

// header.before(message); // adds the message before the header element as a sibling.
// header.after(message); // adds the message after the header element as a sibling.

// Delete Elements

// document
//     .querySelector(".btn-close-cookie")
//     .addEventListener("click", function () {
//         message.remove();
//     });

// Styles

// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(message.style.height); // does not work because it is not inline css
// console.log(message.style.backgroundColor); // rgb(55, 56, 61)   works because inline css

// console.log(getComputedStyle(message).color); // we can access it now    rgb(187, 187, 187)
// console.log(getComputedStyle(message).height); // we can access it now   50px

// message.style.height =
//     Number.parseFloat(getComputedStyle(message).height, 10) + 50 + "px";

// accessing and changing css variable
// document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes

// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt); // Bankist logo
// console.log(logo.src); // http://127.0.0.1:5500/Advanced-DOM-Banskit/img/logo.png
// console.log(logo.className); // nav__logo

// logo.alt = "Beautiful minimalist logo"; // changes the alt attribute

// console.log(logo.getAttribute("src")); // img/logo.png

// logo.setAttribute("company", "Bankist"); // adds attribute with name company = "Bankist"

// console.log(logo.src); // http://127.0.0.1:5500/Advanced-DOM-Banskit/img/logo.png
// console.log(logo.getAttribute("src")); // img/logo.png

// const navLink = document.querySelector(".nav__link--btn");

// console.log(navLink.href); // http://127.0.0.1:5500/Advanced-DOM-Banskit/#
// console.log(navLink.getAttribute("href")); // #

// Data Attributes

// console.log(logo.dataset.versionNumber); // 3.0

// Classes

// logo.classList.add("c");
// logo.classList.remove("c");
// logo.classList.toggle("c");
// logo.classList.contains("c");

// Don't use overwrites existing classes and only makes it use only 1 class.
// logo.className = "jonas";

// const h1 = document.querySelector("h1");

// Types of Events and Event Handlers

// const alertH1 = function (event) {
//     alert("addEventListener: Great! You are reading the Heading :D");

// h1.removeEventListener("mouseenter", alertH1); // removes the alert after running once
// };

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
// removes the alert after running once

// same as above. However, this is old school and not used anymore.

// h1.onmouseenter = function (event) {
//     alert("addEventListener: Great! You are reading the Heading :D");
// };

// Going downwards: child

// const h1 = document.querySelector("h1");

// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.children);

// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";

// Going upwards: parents

// console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways: siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//     if (el !== h1) el.style.transform = "scale(0.5)";
// });
