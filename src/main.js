// Create variables targetting the relevant DOM elements here 👇

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 0 ~~~~~~~~~~~~~~~~~~~~~~~~~

var randomCover = document.querySelector(".random-cover-button")

var picture = document.querySelector(".cover-image")
var mainTitle = document.querySelector(".cover-title")
var D1 = document.querySelector(".tagline-1")
var D2 = document.querySelector(".tagline-2")

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


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 0 ~~~~~~~~~~~~~~~~~~~~~~~~~

randomCover.addEventListener('click', () => {
  console.log("here")
  picture.src = covers[Math.floor(Math.random() * covers.length)]
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
saveThis.addEventListener('click')
var savedCovers = []




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
    tagline2: descriptor2
  }
  return cover
}

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 1 ~~~~~~~~~~~~~~~~~~~~~~~~~

function showFormPage() {
  formPage.classList.remove('hidden');
  mainPage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomCover.classList.add('hidden');
  saveButton.classList.add('hidden');
  // console.log('2 <<><')
};

function showMainPage() {
  mainPage.classList.remove('hidden');
  formPage.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomCover.classList.remove('hidden');
  saveButton.classList.remove('hidden');
  // console.log('4 <<<<><')
};

function showSavedCovers () {
  savedCoversPage.classList.remove('hidden');
  mainPage.classList.add('hidden');
  formPage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomCover.classList.add('hidden');
  saveButton.classList.add('hidden');
  // console.log('5 <<<<<><')
}

//~~~~~~~~~~~~~~~~~~~~~~~~~ ITERATION 2 ~~~~~~~~~~~~~~~~~~~~~~~~~

function createUserCover (event) {
  event.preventDefault();
  // createCover(userCoverPic.value, userTitle.value, userD1.value, userD2.value);
  picture.src = userCoverPic.value;
  mainTitle.innerText = userTitle.value;
  D1.innerText = userD1.value;
  D2.innerText = userD2.value;
  showMainPage();
  covers.push(userCoverPic.value);
  titles.push(userTitle.value);
  descriptors.push(userD1.value);
  descriptors.push(userD2.value);
  // console.log('1 <><', covers);
  // console.log('2 <<><', titles);
  // console.log('3 <<<><', descriptors);
  // console.log('4 <<<<><', userCoverPic.value);
  // console.log('5 <<<<<><', createCover(userCoverPic.value, userTitle.value, userD1.value, userD2.value))
}