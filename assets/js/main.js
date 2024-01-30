function createTime(segundos) {
  const data = new Date(segundos * 1000)
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;
iniciar.addEventListener('click', function (event) {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  startTime();
});
pausar.addEventListener('click', function (event) {
  relogio.classList.add('pausado');
  stopTime();
});
zerar.addEventListener('click', function (event) {
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
});
function startTime() {
  timer = setInterval(function () { segundos++; relogio.innerHTML = createTime(segundos); }, 1000);
}
function stopTime() {
  clearInterval(timer);
}