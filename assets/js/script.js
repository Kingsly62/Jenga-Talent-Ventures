'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// CONTACT-US

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


// F.A.Q
const accordion = document.querySelectorAll(".accordion"),
  accordionToggle = document.querySelectorAll(".accordion__header"),
  accordionContent = document.querySelectorAll(".accordion__content"),
  accordionIcon = document.querySelectorAll("#accordion-icon");

for (let i = 0; i < accordionToggle.length; i++) {
  accordionToggle[i].addEventListener("click", () => {
    if (
      parseInt(accordionContent[i].style.height) !=
      accordionContent[i].scrollHeight
    ) {
      accordionContent[i].style.height =
        accordionContent[i].scrollHeight + "px";
      accordionIcon[i].classList.replace("ri-add-line", "ri-subtract-fill");
    } else {
      accordionContent[i].style.height = "0px";
      accordionIcon[i].classList.replace("ri-subtract-fill", "ri-add-line");
    }

    for (let j = 0; j < accordionContent.length; j++) {
      if (j !== i) {
        accordionContent[j].style.height = "0px";
        accordionIcon[j].classList.replace("ri-subtract-fill", "ri-add-line");
      }
    }
  });
}
