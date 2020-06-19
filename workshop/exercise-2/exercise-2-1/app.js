// Preset values

const head = document.querySelector("head");
const styles = document.createElement("link");
styles.setAttribute("href", "/workshop/exercise-2/assets/styles.css");
styles.setAttribute("rel", "stylesheet");
head.appendChild(styles);

const FROGS = 3;
const main = document.querySelector("main");
const track = document.querySelector(".track");

const body = document.querySelector("body");
const winner = document.createElement("div");
winner.setAttribute("class", "winner");
body.appendChild(winner);

let racers = [];

// while (racers.length < FROGS) {
//   const randomPick = Math.floor(Math.random() * 6);
//   racers.push(frogStable[randomPick]);
//   racers[randomPick].progress = 0;
// }

console.log(racers);

for (i = 0; i < FROGS; i++) {
  let lane = document.createElement("li");
  track.appendChild(lane);
  lane.innerHTML = `<span>Lane ${i + 1}</span>`;
  lane.setAttribute("id", `lane-${i + 1}`);
  console.log(lane);
}

for (i = 0; i < FROGS; i++) {
  let currentFrog = frogStable[i];
  const frogRacer = document.createElement("span");
  frogRacer.innerText = `${currentFrog.name}\n${currentFrog.number}`;
  frogRacer.setAttribute("class", "frog");
  // frogRacer.style.background = `${currentFrog.color}`;
  frogRacer.progress = 0;
  document.getElementById(`lane-${i + 1}`).appendChild(frogRacer);
  racers.push(frogRacer);
}

let frogjump = function (racer) {
  console.log("Racer: ", racer);
  racer.progress += Math.random() * 10 + 3;
  racer.style.left = racer.progress + "%";

  // if (racer.progress >= 100) {
  //   console.log(racer.name + " has won");
  //   clearInterval(progressHop);
  //   racer.style.left = "100%";
  //   winner.innerText = `and the winner is... ${racer.name}!!!`;
  //   winner.classList.toggle("appear");
  // }
};

let progressHop = setInterval(function () {
  racers.forEach((racer) => {
    frogjump(racer);
    if (racer.progress >= 100) {
      console.log(racer.name + " has won");
      clearInterval(progressHop);
      racer.style.left = "100%";
      // winner.innerText = `and the winner is... ${racer.name}!!!`;
      // winner.classList.toggle("appear");
    }
  });
}, 1000);

// let racingFrog = function(currentFrog){
//   let progress = currentFrog.progress;
//   const trackWidth = track.offsetWidth;

//   }
