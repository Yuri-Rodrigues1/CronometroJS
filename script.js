var seg = 0;
var min = 0;
var hor = 0;
var intervalo;
var isRunning = false


function start() {
    if(isRunning === false){
        contador();
        intervalo = setInterval(contador,1000);
    }
    isRunning = true;
}
function pause() {
    clearInterval(intervalo);
    isRunning = false
}
function stop() {
    clearInterval(intervalo);
    hor=0;
    seg=0;
    min=0;
    document.getElementById('relogio').innerText='00:00:00';
    isRunning = false;
}

function doisDigitos(digito){
    if(digito < 10) {
        return('0'+digito);
    }else{
        return(digito);
    }
}
function contador() {
    seg++
    if(seg == 60) {
        min++
        seg = 0;
        if(min == 60){
            min = 0;
            hor++;
        }
    }
    document.getElementById('relogio').innerText=doisDigitos(hor)+':'+doisDigitos(min)+':'+doisDigitos(seg);
}