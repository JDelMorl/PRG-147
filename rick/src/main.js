// let clickers = 0;

// Add all the Ricks!
// for (let i = 0; i < clickers; i++) {

//     const img = new Image();
//     img.src = "res/images/rick.png";
//     img.style.position = "absolute";


//     img.style.left = `${Math.random() * 500}px`;
//     img.style.top = `${Math.random() * 300}px`;


//     document.querySelector("#board").appendChild(img);
//     sync(img, pos);
// }

//this function takes two arguments: the object name and the pos data structure


// function sync(dom, pos) {

//     dom.style.left = `${pos.x}px`; //pos.x is a custom data structure  defined in the addClicker function
//     dom.style.top = `${pos.y}px`;
// }
// function addClicker() {
//     const pos = {
//         x: Math.random() * 500,
//         y: Math.random() * 300
//     };

//     const img = new Image();  //creating a new image element in the DOM
//     img.src = "res/images/rick.png";
//     img.style.position = "absolute";

//     document.querySelector("#board").appendChild(img);
//     sync(img, pos);  //position the img object on inside the coordinate system in CSS using left and top
// }
// while (clickers < 3) { 
//     addClicker()
//     clickers++
// }

let clickers = 15;
let startTime = Date.now();

// position element in the DOM
function sync(dom, pos) {
    dom.style.left = `${pos.x}px`;
    dom.style.top = `${pos.y}px`;
}

function addClicker() {
    const pos = {
        x: Math.random() * 500,
        y: Math.random() * 300
    };
    const img = new Image();
    img.src = "res/images/rick.png";
    img.style.position = "absolute";
    img.addEventListener("click", removeClicker, false);

    document.querySelector("#board").appendChild(img);
    sync(img, pos);
}

function removeClicker(e) {
    e.target.parentNode.removeChild(e.target);
    clickers--;
    checkGameOver();
}

function checkGameOver() {

    if (clickers === 0) {
        const taken = Math.round((Date.now() - startTime) / 1000);
        alert(`De-rick-ed in ${taken} seconds!`);
    }
}

// Add all the Ricks!

for (let i = 0; i < clickers; i++) {
    addClicker();
}
// I dont seem to know how to actively change the number 
document.getElementById("rick_counter").innerHTML =
    "Current ricks on Screen: " + clickers;