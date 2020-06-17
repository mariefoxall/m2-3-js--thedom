// Add your code here!

// const body = document.querySelector("body");
// const main = document.createElement("main");
// body.appendChild(main);

const main = document.querySelector("main");
const title = document.createElement("h1");
title.innerText = "The best How I Met Your Mother episode (according to fans)";
main.appendChild(title);

const intro = document.createElement("p");
intro.innerText =
  "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
main.appendChild(intro);

const subheading = document.createElement("h2");
subheading.innerText = "The Slap Bet (Season 2, Episode 9)";
main.appendChild(subheading);

const imdb = document.createElement("p");
imdb.innerText = "IMDB Rating: 9.5";
main.appendChild(imdb);

const robinimg = document.createElement("img");
robinimg.setAttribute("src", "images/robin-sparkles.jpg");
robinimg.setAttribute("alt", "Robin Sparkles");
main.appendChild(robinimg);

const synopsis1 = document.createElement("p");
synopsis1.innerText =
  "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
main.appendChild(synopsis1);

const synopsis2 = document.createElement("p");
synopsis2.innerText =
  "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
main.appendChild(synopsis2);

const source = document.createElement("a");
source.setAttribute(
  "href",
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
);
source.innerText = "Source";
main.appendChild(source);

const head = document.querySelector("head");
const styles = document.createElement("link");
styles.setAttribute("href", "styles.css");
styles.setAttribute("rel", "stylesheet");
head.appendChild(styles);
