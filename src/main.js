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

// We've provided a few variables below

var savedCovers = [];
var currentCover = createCover(picture1, mainTitle, D1, D2);

// Add your event listeners here 👇

makeACoverButton.addEventListener('click', showFormPage, console.log('1 <><'))
homeButton.addEventListener('click', showMainPage, console.log('3 <<<><'))
savedCoversButton.addEventListener('click', showSavedCovers, console.log('6 <<<<<<><'))

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 0 ~~~~~~~~~~~~~~~~~~~~~~~~~

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
saveThis.addEventListener('click', saveACover);

// Create your event handlers and other functions here 👇


// We've provided two functions to get you started

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 0 ~~~~~~~~~~~~~~~~~~~~~~~~~

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
  }
  return cover
}

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
}

function showSavedCovers () {
  savedCoversPage.classList.remove('hidden');
  mainPage.classList.add('hidden');
  formPage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveButton.classList.add('hidden');
  savedCoversSection.innerHTML = "";

  for(let i = 0; i < savedCovers.length; ++i) {
      savedCoversSection.innerHTML += displayItem(savedCovers[i].coverImg, savedCovers[i].title, savedCovers[i].tagline1, savedCovers[i].tagline2, i)
  }
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
  var coverToKeep = createCover(picture1.src, mainTitle.innerHTML, D1.innerHTML, D2.innerHTML);

  for (i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].coverImg === coverToKeep.coverImg && savedCovers[i].mainTitle === coverToKeep.mainTitle && savedCovers[i].D1 === coverToKeep.D1 && savedCovers[i].D2 === coverToKeep.D2) {
          hasItem = true
      }
  }

  if (hasItem === false) {
      savedCovers.push(coverToKeep)
  }
}

function displayItem(coverImg, title, tag1, tag2, i) {
  return `<article class="mini-cover" id="mini-cover-container" ondblclick="deleteItem(${i})">
    <img class="mini-cover" src="${coverImg}" id="mini-cover-img">
    <h2 class="cover-title" id="mini-cover-title">${title}</h2>
    <h3 class="tagline" id="mini-cover-tagline">A tale of <span class="tagline-1">${tag1}</span> and
     <span class="tagline-2">${tag2}</span></h3>
    <img class="price-tag" id="mini-price-tag" src="./assets/price.png">
    <img class="overlay" id="mini-overlay" src="./assets/overlay.png">
  </article>`
}

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 4 ~~~~~~~~~~~~~~~~~~~~~~~~~

function deleteItem(index) {
  console.log('index', index)
  savedCovers.splice(index, 1)
  savedCoversSection.innerHTML = "";
  for(let i = 0; i < savedCovers.length; ++i) {
      savedCoversSection.innerHTML += displayItem(savedCovers[i].coverImg, savedCovers[i].title, savedCovers[i].tagline1, savedCovers[i].tagline2, i)
  }
}