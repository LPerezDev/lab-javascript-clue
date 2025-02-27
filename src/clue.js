// ITERATION 1

// Suspects Array
const mrGreen = {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green'
  };

const drOrchid = { 
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
};

const profPlum = {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple',
};

const missScarlet = {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red',
};

const mrsPeacock = {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
};

const mrMustard = {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
};

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
// Rooms Array

const roomsArray = [
{name: 'Dining Room'},
{name: 'Conservatory'},
{name: 'Kitchen'},
{name: 'Study'},
{name: 'Library'},
{name: 'Billiard Room'},
{name: 'Lounge'},
{name: 'Ballroom'},
{name: 'Hall'},
{name: 'Spa'},
{name: 'Living Room'},
{name: 'Observatory'},
{name: 'Theater'},
{name: 'Guest House'},
{name: 'Patio'}
];

// Weapons Array

let rope= {name: 'rope', weight: 10}
let knife = {name: 'knife', weight: 8}
let candlestick = {name: 'candlestick', weight: 2}
let dumbbell = {name: 'dumbbell', weight: 30}
let poison = {name: 'poison', weight: 2}
let axe = {name: 'axe', weight: 15}
let bat = {name: 'bat', weight: 13}
let trophy = {name: 'trophy', weight: 25}
let pistol = {name: 'pistol', weight: 20}

const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

// ITERATION 2

function selectRandom(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
return array[randomIndex];
}


function pickMystery() {
  let randomSuspect = selectRandom(suspectsArray);
  let randomWeapon = selectRandom(weaponsArray);
  let randomRoom = selectRandom(roomsArray);

  let solution = { 
    suspect: randomSuspect, 
    weapon: randomWeapon, 
    room: randomRoom
  }
  return solution;
}


// ITERATION 3

function revealMystery(envelope) {
return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

/* The way I thought of passing these tests is I thought we required the function pickMystery() to invoke a random selection of answers, 
then turning that answer from the object it prints into a string.

*/

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
