var tempo = 50;
var cron;

var hor = 0;
var min = 0;
var seg = 0;


function iniciar() {
    cron = setInterval(() => { timer(); }, tempo);
}


function pausar() {
    clearInterval(cron);
}

function parar() {
    clearInterval(cron);
    document.getElementById('contador').innerText = '0:0:0';
    hor = 0;
    min = 0;
    seg = 0;
}

function timer() {
    seg++;
    if (seg == 60) {
        seg = 0;
        min++;
        if (min == 60) {
            min = 0;
            hor++;
        }
    }
    document.getElementById('contador').innerText = hor + ':' + min + ':' + seg;
}