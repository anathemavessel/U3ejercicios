const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'June¿io',
    'Julio',
    'Augosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Deciembre',
];
const weekdays = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// se index desde 0;
const futureDate = new Date(2022, 9, 30, 14,00,00);
console.log("fut: "+futureDate+"act: "+new Date());


// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `La carrera será el día ${weekday}, ${date} ${month} ${year} a las ${hours}:${minutes}hrs.`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
    const today = new Date().getTime();
    const t = futureTime - today; // en milisegundos
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) {
          return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Lo siento, ¡La carrera ya se realizó!</h4>`;
    }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
