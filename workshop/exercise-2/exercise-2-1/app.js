// Preset values

const head = document.querySelector("head");
const styles = document.createElement("link");
styles.setAttribute("href", "/workshop/exercise-2/assets/styles.css");
styles.setAttribute("rel", "stylesheet");
head.appendChild(styles);

const FROGS = 3;
const main = document.querySelector("main");
const track = document.querySelector(".track");

let racers = [];

for (i = 0; i < FROGS; i++) {
  racers.push(frogStable[i]);
  racers[i].progress = 0;
}

console.log(racers);

for (i = 0; i < FROGS; i++) {
  let lane = document.createElement("li");
  track.appendChild(lane);
  //   let frogNum = document.createElement("span");
  //   lane.appendChild(frogNum);
  //   frogNum.innerText = `${i + 1}`;
  lane.innerHTML = `<span>Lane ${i + 1}</span>`;
  lane.setAttribute("id", `lane-${i + 1}`);
  //   lane.setAttribute("class", "frog");
  //   lane.style.background = `${racers[i].color}`;
  //   lane.innerText = `Frog name: ${racers[i].name}\nNumber: ${racers[i].number}\nProgress: ${racers[i].progress}`;
  let frogRacer = document.createElement("span");
  lane.appendChild(frogRacer);
  frogRacer.innerText = `${racers[i].name} ${racers[i].number} ${racers[i].progress}`;
  frogRacer.setAttribute("class", "frog");
  frogRacer.style.background = `${racers[i].color}`;
  console.log(lane);
}

// racers.forEach(function (currentFrog, index) {
//   let frogLane = document.getelementbyId(`lane-${index + 1}`);
//   let frogRacer = document.createElement("span");
//   frogLane.appendChild(frogRacer);
//   frogRacer.innerText = `${currentFrog.name} ${currentFrog.number} ${currentFrog.progress}`;
//   frogRacer.setAttribute("class", "frog");
// });

// const racingFrog = function (frog) {
//   frog.progress = frog.progress + Math.random() * 100;
// };

// if (frog.progress < 100) {
//   const progressHop = setInterval(racingFrog(), Math.random() * 6000);
// } else {
//   clearInterval(progressHop);
// }
