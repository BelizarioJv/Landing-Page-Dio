const emojis = [
    "🐶",
    "🐶",
    "🐺",
    "🐺",
    "🐱",
    "🐱",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🦒",
    "🦒",
    "🦊",
    "🦊",
    "🦝",
    "🦝"
    ];

let openCards = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledEmojis = shuffle([...emojis]);

for(let i = 0;i < emojis.length ; i++ ){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffledEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box); 
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2){
        setTimeout(checkMatch,500);
    }

}

function checkMatch (){}