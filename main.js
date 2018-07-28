var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var yellow = document.getElementById('yellow');

function redExtend() {
    red.classList.toggle('extend');
    green.classList.toggle('hidden');
    blue.classList.toggle('hidden');
    yellow.classList.toggle('hidden');
}
function greenExtend() {
    red.classList.toggle('hidden');
    green.classList.toggle('extend');
    blue.classList.toggle('hidden');
    yellow.classList.toggle('hidden');
}
function blueExtend() {
    red.classList.toggle('hidden');
    green.classList.toggle('hidden');
    blue.classList.toggle('extend');
    yellow.classList.toggle('hidden');
}
function yellowExtend() {
    red.classList.toggle('hidden');
    green.classList.toggle('hidden');
    blue.classList.toggle('hidden');
    yellow.classList.toggle('extend');
}
