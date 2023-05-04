const judul = document.getElementById('judul');

const fontFamilies = [
  'Merriweather',
  'Darumadrop One',
  'Foldit'
];

let idx = 0;
const changeFont = function() {
  judul.style.fontFamily = fontFamilies[idx];
  idx = (idx+1) % fontFamilies.length;
}

setInterval(changeFont, 1000);




const s = document.getElementById('S').innerText;
let t = "";
for(let i = 0; i < s.length; i++){
  t += `<span class="letter-${i+1}">${s[i]}</span>`;
}


document.getElementById('T').innerHTML = t;

const defaultSize = 12;
const enlarge = function(className) {
  const letter = document.getElementsByClassName(className)[0];
  if (letter.style.fontSize) {
    let currentSize = parseInt(letter.style.fontSize.slice(0, -2));
    if (currentSize < 36) currentSize += 1;
    letter.style.fontSize = `${currentSize}px`;
  }
  else {
    letter.style.fontSize = `${defaultSize}px`;
  }
}

const T = document.getElementById('T');
for(let i = 0; i < T.children.length; i++){
  const letter = T.children[i];
  setInterval(enlarge, 1000 + i*100, `letter-${i+1}`);
}