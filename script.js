let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  
  // Part 1
let mainTitle = document.getElementById('main-title')
console.log(mainTitle)
  // Part 2
const bodyElement = document.body;
bodyElement.style.backgroundColor = "#32425e";
  // Part 3
const favThings = document.getElementById('favorite-things');
const removeLastFavThing = favThings.lastElementChild;
  if (removeLastFavThing) {
    favThings.removeChild(removeLastFavThing);
  }
bodyElement.style.color = "lightgrey";
  // Part 4
const twoRemFontSize = document.querySelectorAll('.special-title');
twoRemFontSize.forEach((quote) => {
  quote.style.fontSize = "2rem";
});
  // Part 5
  // Gain access to the Past Races list
const pastRaces = document.getElementById('past-races');
  // Find where "Chicago" is in the list
const destoryChicago = Array.from(pastRaces.children).findIndex(li => li.textContent === "Chicago");
  //Remove Chicago once found...Like completely. It doesn't exist on the map anymore
  if (destoryChicago !== -1) {
    pastRaces.removeChild(pastRaces.children[destoryChicago]);
  }
  // Part 6
const addEngland = document.createElement('li');
addEngland.textContent = 'England';
pastRaces.appendChild(addEngland);
  // Part 7
  // Select the div you want to insert the new div inside of
const domAdventures = document.querySelector('.main');
  // Create the new div
const newAdventure = document.createElement('div');
  // Give this new div a class name so the css can be applied to it
newAdventure.classList.add('blog-post');
newAdventure.classList.add('purple');
  // Create the new h1 that will be in the div
const newCity = document.createElement('h1');
  // Create the new h1
newCity.textContent = 'England';
  // Create the new p tag
const newDomQuote = document.createElement('p');
  // New p tag quote thats going to go into the blog-post
newDomQuote.textContent = "You've got the best crew in the world standing right in front of you, give them a reason to stay";
  // Call all of the new variables so they appear on the page
domAdventures.appendChild(newAdventure);
newAdventure.appendChild(newCity);
newAdventure.appendChild(newDomQuote);
  // Part 8
const getNewQuote = document.querySelector('#quote-title');
getNewQuote.addEventListener('click', randomQuote)

  // Part 9
  // Select all the blog post elements
const hover = document.querySelectorAll('.blog-post');
  // The event handlers for purple and red
const mouseOut = (event) => {
  event.target.classList.toggle('purple');
};
const mouseEnter = (event) => {
  event.target.classList.toggle('red');
};
  // Go through the list of blog post elements and add the event handlers
hover.forEach((hover) => {
  hover.addEventListener('mouseout', mouseOut);
  hover.addEventListener('mouseenter', mouseEnter);
});
});
