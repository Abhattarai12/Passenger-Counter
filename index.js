let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let logEl = document.getElementById("log-el")
let count = 0
let entryno = 1;
let plogs = "";
let resetcounter = 0;
let rcou = 0;
let line = 0;
function increment() {
    count += 1
    countEl.textContent = count
};

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    plogs += countStr;
};

function reset(){  
    count = 0;   
    countEl.textContent =  count;
    saveEl.textContent = `Previous entries: `;
    resetcounter += 1;
    plogs += "\n";
    console.log(resetcounter)
};

function log() {
    if (rcou != resetcounter) {
        entryno += 1;
        rcou += 1;
        logEl.textContent = ` Entry no.${entryno}: ${plogs.split("\n")[rcou]}`;
        console.log(plogs);
    } else {
        logEl.textContent = `\n Entry no.${entryno}: ${plogs.split("\n")[rcou]}`
    }
};