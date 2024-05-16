// Create variables targetting the relevant DOM elements here 👇
var randomCover = document.querySelector(".random-cover-button")
var makeACoverButton = document.querySelector(".make-new-button")
var picture = document.querySelector(".cover-image")
var mainPage = document.querySelector(".home-view")
var formPage = document.querySelector(".form-view")
var savedCoversPage = document.querySelector(".saved-view")
var mainTitle = document.querySelector(".cover-title")
var D1 = document.querySelector(".tagline-1")
var D2 = document.querySelector(".tagline-2")
var homeButton = document.querySelector(".home-button")
var saveButton = document.querySelector(".save-cover-button")
var savedCoversButton = document.querySelector(".view-saved-button")
// var  = document.querySelector(".")

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

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




// Create your event handlers and other functions here 👇


// We've provided two functions to get you started
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

function showFormPage() {
  formPage.classList.remove('hidden');
  mainPage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomCover.classList.add('hidden');
  saveButton.classList.add('hidden');
  console.log('2 <<><')
};

function showMainPage() {
  mainPage.classList.remove('hidden');
  formPage.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomCover.classList.remove('hidden');
  saveButton.classList.remove('hidden');
  console.log('4 <<<<><')
};

function showSavedCovers () {
  savedCoversPage.classList.remove('hidden');
  mainPage.classList.add('hidden');
  formPage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomCover.classList.add('hidden');
  saveButton.classList.add('hidden');
  console.log('5 <<<<<><')
}