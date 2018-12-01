var score =0;
var seconde=30;
var temps;
var x=0;
var y=0;
var start = document.createElement("span");
start.innerHTML = 'START';
start.id = 'start';



document.getElementById('plateau').appendChild(start);

function pann() {

    var pan = document.createElement('audio');
    pan.src = "pan.mp3";
    pan.autoplay = "false";
    pan.id = 'pan';
    document.getElementById('plateau').appendChild(pan);

}


// le jeu commence des que jappuye sur start
document.getElementById("start").addEventListener("click", function () {

    start.style.display = "none";
    document.getElementById('titre').style.visibility = "hidden";
    document.getElementById('me').style.visibility = "hidden";
    temps =setTimeout(CaR,1000);

});

// joue un son au clic de souris
document.getElementById('plateau').addEventListener("click", function () {
    pann();


})

document.getElementById('chauvesouris').addEventListener("click", function () {

    if(document.getElementById('start').style.display == 'none'){
        score++;
    }

    document.getElementById('score').innerHTML= `score: ${score}`;

})

function CaR(){
    seconde--;
    document.getElementById('seconde').innerHTML = `seconde: ${seconde}`;
    setTimeout(CaR,1000);

}
if(seconde === 0) {
    seconde =0;
    document.getElementById('ecranScore').style.display = "block";
    document.getElementById('plateau').style.display = "none";
    clearTimeout(CaR);
}

function deplacersCS(){
    if((document.getElementById('start').style.display == 'none')){
    x++;
    y++;
    document.getElementById('chauvesouris').style.top = (Math.random()*600+y)+"px";
    document.getElementById('chauvesouris').style.left = (Math.random()*1600+x)+"px";
}
    setTimeout(deplacersCS,1000);
}
deplacersCS();