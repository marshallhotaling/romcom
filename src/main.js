// Create variables targetting the relevant DOM elements here 👇

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 0 ~~~~~~~~~~~~~~~~~~~~~~~~~

var randomCoverButton = document.querySelector(".random-cover-button")

var picture1 = document.querySelector(".cover-image");
var mainTitle = document.querySelector(".cover-title");
var D1 = document.querySelector(".tagline-1");
var D2 = document.querySelector(".tagline-2");

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 1 ~~~~~~~~~~~~~~~~~~~~~~~~~

var homeButton = document.querySelector(".home-button")
var makeACoverButton = document.querySelector(".make-new-button")
var saveButton = document.querySelector(".save-cover-button")

var savedCoversButton = document.querySelector(".view-saved-button")

var mainPage = document.querySelector(".home-view")
var formPage = document.querySelector(".form-view")
var savedCoversPage = document.querySelector(".saved-view")

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 2 ~~~~~~~~~~~~~~~~~~~~~~~~~

var userCoverPic = document.querySelector(".user-cover")
var userTitle = document.querySelector(".user-title")
var userD1 = document.querySelector(".user-desc1")
var userD2 = document.querySelector(".user-desc2")

var makeMyBookButton = document.querySelector(".create-new-book-button")

//~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~

var saveThis = document.querySelector(".save-cover-button")

var savedCoversSection = document.querySelector(".saved-covers-section")
=======

// var miniCoverCont = document.querySelector(".mini-cover");
// var miniCoverImg = document.querySelector("#mini-cover-img");
// var miniCoverTitle = document.querySelector("#mini-cover-title");
// var miniCoverTagline = document.querySelector("#mini-cover-tagline");
// var miniCoverPrice = document.querySelector("#mini-price-tag");
// var miniCoverOverlay = document.querySelector("#mini-overlay");

// We've provided a few variables below

// var savedCovers = [
//   createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];

var savedCovers = [];
var currentCover = createCover(picture1, mainTitle, D1, D2);

// Add your event listeners here 👇
randomCover.addEventListener('click', () => {
  console.log("here")
  picture.src = covers[Math.floor(Math.random() * covers.length)]
  mainTitle.innerText = titles[Math.floor(Math.random() * titles.length)]
  D1.innerText = descriptors[Math.floor(Math.random() * descriptors.length)]
  D2.innerText = descriptors[Math.floor(Math.random() * descriptors.length)]
  

});

makeACoverButton.addEventListener('click', showFormPage, console.log('1 <><'))
homeButton.addEventListener('click', showMainPage, console.log('3 <<<><'))
savedCoversButton.addEventListener('click', showSavedCovers, console.log('6 <<<<<<><'))



//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 0 ~~~~~~~~~~~~~~~~~~~~~~~~~

// document.addEventListener("DOMContentLoaded", randomCover(picture1, title, D1, D2))
randomCoverButton.addEventListener("click", randomCoverHandler, console.log("62 ><>"))

randomCoverButton.addEventListener('click', function () {
  console.log("here")
  picture1.src = covers[Math.floor(Math.random() * covers.length)]
  mainTitle.innerText = titles[Math.floor(Math.random() * titles.length)]
  D1.innerText = descriptors[Math.floor(Math.random() * descriptors.length)]
  D2.innerText = descriptors[Math.floor(Math.random() * descriptors.length)]
});

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 1 ~~~~~~~~~~~~~~~~~~~~~~~~~

makeACoverButton.addEventListener('click', showFormPage)
homeButton.addEventListener('click', showMainPage)
savedCoversButton.addEventListener('click', showSavedCovers)

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 2 ~~~~~~~~~~~~~~~~~~~~~~~~~

makeMyBookButton.addEventListener('click', createUserCover)




//~~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 3 ~~~~~~~~~~~~~~~~~~~~~~~~~
saveThis.addEventListener('click', saveACover)
savedCoversButton.addEventListener('click', displaySavedCovers);
savedCoversButton.addEventListener('click', addMiniCoverElement);



// Create your event handlers and other functions here 👇


// We've provided two functions to get you started

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 0 ~~~~~~~~~~~~~~~~~~~~~~~~~

function randomCoverHandler () {
  makeRandomCover();
  displayRandomCover();
};

function userCover () {};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2,
    from: "createCover => currentCover => saveCover => savedCovers"
  }
  return cover
}

function makeRandomCover () {
  randPic = covers.at(getRandomIndex(covers));
  randTitle = titles.at(getRandomIndex(titles));
  randD1 = descriptors.at(getRandomIndex(descriptors));
  randD2 = descriptors.at(getRandomIndex(descriptors));
  var randomCover = {
    id: Date.now(),
    coverImg: randPic,
    title: randTitle,
    tagline1: randD1,
    tagline2: randD2,
    from: "random func"
  }
  // console.log("129 ><>")
  return randomCover
};

function displayRandomCover () {
  var randomCover = makeRandomCover();
  picture1.src = randomCover.coverImg;
  mainTitle.innerText = randomCover.title;
  D1.innerText = randomCover.tagline1;
  D2.innerText = randomCover.tagline2;
};

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 1 ~~~~~~~~~~~~~~~~~~~~~~~~~

function showFormPage() {
  formPage.classList.remove('hidden');
  mainPage.classList.add('hidden');
  savedCoversPage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveButton.classList.add('hidden');

};

function showMainPage() {
  mainPage.classList.remove('hidden');
  formPage.classList.add('hidden');
  savedCoversPage.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveButton.classList.remove('hidden');
};

function showSavedCovers () {
  savedCoversPage.classList.remove('hidden');
  mainPage.classList.add('hidden');
  formPage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveButton.classList.add('hidden');
  savedCoversSection.innerText = savedCovers;
  // console.log('5 <<<<<><')
}

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 2 ~~~~~~~~~~~~~~~~~~~~~~~~~

function createUserCover (event) {
  event.preventDefault();
  picture1.src = userCoverPic.value;
  mainTitle.innerText = userTitle.value;
  D1.innerText = userD1.value;
  D2.innerText = userD2.value;
  showMainPage();
  covers.push(userCoverPic.value);
  titles.push(userTitle.value);
  descriptors.push(userD1.value);
  descriptors.push(userD2.value);
}


//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 3 ~~~~~~~~~~~~~~~~~~~~~~~~~

function saveACover () {
    var hasItem = false
    var coverToKeep = createCover(picture.src, mainTitle.innerHTML, D1.innerHTML, D2.innerHTML);

    for (i = 0; i < savedCovers.length; i++) {
        if (savedCovers[i].coverImg === coverToKeep.coverImg && savedCovers[i].mainTitle === coverToKeep.mainTitle && savedCovers[i].D1 === coverToKeep.D1 && savedCovers[i].D2 === coverToKeep.D2) {
            hasItem = true
        }
    }

    if (hasItem === false) {
        savedCovers.push(coverToKeep)
    }
    console.log('savedCovers', savedCovers)
}

// function saveACover () {
//   var coverToKeep = createCover(userCoverPic.value, userTitle.value, userD1.value, userD2.value);
//   for (i = 0; i < savedCovers.length; i++) {
//     if (coverToKeep === savedCovers[i] || coverToKeep.title === "") {
//       // console.log("1 <><", savedCovers);
//       return savedCovers;
//     } else if (coverToKeep !== savedCovers[i] || coverToKeep.title !== "") {
//       // console.log("2 <<><", savedCovers);
//       savedCovers.push(coverToKeep)
//     }
//   }
// }

function addMiniCoverElement () {
  savedCoversSection.innerHTML = "";
  savedCoversSection.innerHTML +=
    `<article class="mini-cover" id="mini-cover-container">
      <img class="mini-cover" src="${picture1.src}" id="mini-cover-img">
      <h2 class="cover-title" id="mini-cover-title">${mainTitle.innerText}</h2>
      <h3 class="tagline" id="mini-cover-tagline">A tale of <span class="tagline-1">${D1.innerText}</span> and
       <span class="tagline-2">${D2.innerText}</span></h3>
      <img class="price-tag" id="mini-price-tag" src="./assets/price.png">
      <img class="overlay" id="mini-overlay" src="./assets/overlay.png">
    </article>`;
    // savedCovers.push(miniCover);
  // console.log("177 <><", savedCovers)
};

function displaySavedCovers () {
  console.log("empty func ><>")
}

// function displaySavedCovers () {
//   savedCoversSection.innerHTML = "";
//   for (var i = 0; i < savedCovers.length; i++) {
//     var cover = savedCovers[i];
//     var miniCoverContainer = document.createElement("div");
//       miniCoverContainer.className = "mini-cover";

//     var miniCoverImg = document.createElement("img");
//       miniCoverImg.className = ".mini-cover img";
//       miniCoverImg.setAttribute("id", "cover-image");
//       // miniCoverImg.getElementById("cover-image").style = miniCoverContainer.style;
//       miniCoverImg.src = picture.src;
//       miniCoverContainer.appendChild(miniCoverImg);
    
//     var miniCoverTitle = document.createElement("h2");
//       miniCoverTitle.className = ".cover-title";
//       miniCoverTitle.innerText = `${mainTitle.innerText}`;
//       miniCoverContainer.appendChild(miniCoverTitle);

//     var miniCoverTags = document.createElement("h3");
//       miniCoverTags.className = ".tagline";
    
    
//     savedCoversSection.appendChild(miniCoverContainer);
//   }
// }