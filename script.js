let timer = 3;
let score = 0;
let newHitval = 0;
function getBubble() {
    let clutter = "";
    for (let i = 0; i <= 191; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector('.pbottom').innerHTML = clutter;
}
function newhit() {
    newHitval = Math.floor(Math.random() * 10);
    document.querySelector('#newHit').innerHTML = newHitval;
}

function checkall() {
    document.querySelector('#btm').addEventListener('click', function (e) {
        let clickednum = Number(e.target.textContent);
        if (newHitval === clickednum) {
            score += 10;
            document.querySelector('#scoreval').innerHTML = score;
            getBubble()
            newhit()
        }
        else {
        getBubble()
        }
    })
}
function runtimer() {
    let time = setInterval(() => {
        if(timer > 0){
        timer--
        document.querySelector('#time').innerHTML = timer;
    }
    else{
        clearInterval(time)
        document.querySelector('#btm').innerHTML = `<h1>"Game Over! Your final score is " ${score}</h1>`
        document.querySelector('#btm').addEventListener('click', function (e) {
            document.querySelector('#btm').innerHTML = `<h1>"Game Over! Your final score is " ${score}</h1>`
        })
    }
}, 1000);
}

getBubble()
newhit()
runtimer();
checkall()