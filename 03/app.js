// lReseñas locales
const reviews = [
{
    id: 1,
    name: "Mariel Aislin Aldana Sierra",
    job: "Administrador de red",
    img:
    "https://asset-cdn.schoology.com/system/files/imagecache/profile_reg/pictures/picture-a775f2689ff79476abf5f0b1b089ef5c_6046314264472.jpg?1615212866",
    text:
    "Tego 21 años, soy una persona que le gusta dar lo mejor de sí en todas las actividades que realiza, me considero una buena líder. Tengo más de 6 años de experiencia profesional, desarrollando diferentes softwares, realizando mantenimiento a equipos de cómputo, así como instalación de cableado estructurado. Busco desarrollar mi carrera principalmente en el área de redes de computadoras.",
},
{
    id: 2,
    name: "Ariadna Pérez Hernández",
    job: "Técnico en Business Intelligence",
    img:
    "https://ariadnaphdez.github.io/CurriculumVitae/images/foto1.jpg",
    text:
    "Soy una Ingeniera en Sistemas Computacionales, buscadora incansable de nuevas habilidades que me permitan transmitir al mundo un poco de mi visión para resolver problemas. A lo largo de mi carrera he podido conocer diversas herramientas tecnológicas que facilitan la vida diaria y generan soluciones de grado comercial.",
},
{
    id: 3,
    name: "Carlos Alberto Cathi Huizache",
    job: "Project Manager",
    img:
    "https://catho14.github.io/Curriculum-Vitae/img/person.jpeg",
    text:
    "¡Hola!, Soy Carlos Alberto Cathi Huizache, ingeniero en sistemas computacionales. Estoy empezando en el mundo laboral de esta carrera, me encanta la fotografía y viajar en varios lugares. Tengo conocimientos en HTML, CSS y Bootstrap, siendo programador web. ",
},
{
    id: 4,
    name: "Johan Morales García",
    job: "Desarrollador web",
    img:
    "https://johan-mg.github.io/Curriculum/images/ME.jpg",
    text:
    "¡Hola! Soy Johan Morales Garcia, ingeniero en sistemas computacionales y desarrollador web. Estudiante de ingeniería del Tecnológico Nacional de México Campus Pachuca, Miembro de Innovacción y LaunchX",
},
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
const item = reviews[currentItem];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
const item = reviews[person];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
currentItem++;
if (currentItem > reviews.length - 1) {
currentItem = 0;
}
showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
currentItem--;
if (currentItem < 0) {
currentItem = reviews.length - 1;
}
showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
console.log("hello");

currentItem = Math.floor(Math.random() * reviews.length);
showPerson(currentItem);
});
