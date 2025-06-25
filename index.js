// Arrays for random parts
const openings = ["Today is your day", "Expect the unexpected", "Good vibes only"];
const subjects = ["you will meet someone new", "an opportunity will arise", "luck is on your side"];
const endings = ["trust it", "go for it", "stay focused"];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessage() {
  const message = `${getRandom(openings)} — ${getRandom(subjects)} — ${getRandom(endings)}.`;
  console.log(message);
}

generateMessage();
