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

// while (racers.length < FROGS) {
//   const randomPick = Math.floor(Math.random() * 6);
//   racers.push(frogStable[randomPick]);
//   racers[randomPick].progress = 0;
// }

for (i = 0; i < FROGS; i++) {
  racers.push(frogStable[i]);
  racers[i].progress = 0;
}

console.log(racers);

for (i = 0; i < FROGS; i++) {
  let lane = document.createElement("li");
  track.appendChild(lane);
  lane.innerHTML = `<span>Lane ${i + 1}</span>`;
  lane.setAttribute("id", `lane-${i + 1}`);
  let frogRacer = document.createElement("span");
  lane.appendChild(frogRacer);
  frogRacer.innerText = `${racers[i].name} ${racers[i].number} ${racers[i].progress}`;
  frogRacer.setAttribute("class", "frog");
  //   let frogImgSpan = document.createElement("span");
  //   frogRacer.appendChild(frogImgSpan);
  //   let frogImg = document.createElement("img");
  //   frogImg.setAttribute("src", "workshopexercise-2assets\frog.png");
  //   frogImgSpan.appendChild(frogImg);
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

function racingFrog(item) {
  //   let frogLane = document.getelementbyId(`lane-${index + 1}`);

  let progressHop = setInterval(function () {
    if (item.progress < 1) {
      item.progress = item.progress + Math.random();
      const frogRacer = document.querySelector(".frog");
      frogRacer.style.left = `${item.progress * 100}%`;
    } else {
      clearInterval(progressHop);
    }
  }, Math.random() * 2000);
}

for (i = 0; i < FROGS; i++) {
  racingFrog(racers[i]);
}

// racers.forEach(racingFrog);
