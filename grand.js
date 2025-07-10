// local storage
let mainColors = localStorage.getItem("color-option");
if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);
  // remove active from all colors list
  document.querySelectorAll(".list-colors li").forEach((element) => {
    // remove class active
    element.classList.remove("active");
    // add class active When data-color ===local storage item
    if (element.dataset.color === mainColors)
      // add class active
      element.classList.add("active");
  });
}

document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  //toggle spin class on icon
  this.classList.toggle("fa-spin");
  //toggle open class on setting box
  document.querySelector(".setting-box").classList.toggle("open");
};

// switch color
const colorChange = document.querySelectorAll(".list-colors li");
// loop on list item
colorChange.forEach((li) => {
  // click on list item
  li.addEventListener("click", (e) => {
    // set color
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // set color in local storage
    localStorage.setItem("color-option", e.target.dataset.color);
    //class active
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      // remove class active
      element.classList.remove("active");
    });
    // add class active
    e.target.classList.add("active");
  });
});

// create popup with image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create overlay element
    let overlay = document.createElement("div");

    //add class to overlay
    overlay.className = "popup-overlay";

    // appaend overlay to the body
    document.body.appendChild(overlay);

    // create the popup box
    let popupBox = document.createElement("div");

    // add class to the popup box
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // create heading
      let imgHeading = document.createElement("h3");

      // create text for heading
      let imgText = document.createTextNode(img.alt);

      // append the text to  the heading
      imgHeading.appendChild(imgText);

      // append the heading to the popup Box
      popupBox.appendChild(imgHeading);
    }

    // create the image
    let popupImage = document.createElement("img");

    // set image source
    popupImage.src = img.src;

    // add image to popup bax
    popupBox.appendChild(popupImage);

    // append the popup box to body
    document.body.appendChild(popupBox);

    //craete the close span
    let closeButton = document.createElement("span");

    // create the colse button text
    let closeButtonText = document.createTextNode("X");

    // append text to close button
    closeButton.appendChild(closeButtonText);

    // add class to close button
    closeButton.className = "close-button";

    // add close button to the popup box
    popupBox.appendChild(closeButton);
  });
});
// close popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close-button") {
    // remove the current popup
    e.target.parentNode.remove();

    // remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});

// reset button
document.querySelector(".reset-options").onclick = function () {
  //localStorage.clear(); all data in local storage
  localStorage.removeItem("color-option");
  localStorage.removeItem("background_option");
  window.location.reload();
};
//togle menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLink = document.querySelector(".links");
toggleBtn.onclick = function (e) {
  e.stopPropagation();

  this.classList.toggle("menu-active");

  tLink.classList.toggle("open");
};
//click anywhere out the menu to colse it
document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLink) {
    //check if menu is open
    if (tLink.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");

      tLink.classList.toggle("open");
    }
  }
});

tLink.onclick = function (e) {
  e.stopPropagation();
};
