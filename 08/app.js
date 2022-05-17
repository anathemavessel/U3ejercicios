const menu = [
    {
        id: 1,
        title: "Daniel Ricciardo",
        category: "McLaren",
        price: 32,
        img: "https://cdn-1.motorsport.com/images/amp/2GznMNE0/s1000/daniel-ricciardo-mclaren-is-in.jpg",
        desc: `Daniel Joseph Ricciardo es un piloto de automovilismo australiano de ascendencia italiana que tiene doble nacionalidad.​ Ganó la Fórmula 3 Británica en el año 2009 y desde 2011 es piloto de Fórmula 1.`,
    },
    {
        id: 2,
        title: "Max Verstappen",
        category: "RedBull",
        price: 24,
        img: "https://depor.com/resizer/VrukfPgRTLRQxBD9hL4IQaGsowU=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EVCH5JDIFRDJFB4YBNQXPRZDXE.jpg",
        desc: `Max Emilian Verstappen es un piloto de automovilismo neerlandés nacido en Bélgica.​ Es hijo de Jos Verstappen, expiloto de F1 de nacionalidad neerlandesa, y de Sophie Kumpen, ​ también expiloto y karter de origen belga.`,
    },
    {
        id: 3,
        title: "Pierre Gasly",
        category: "AlphaTauri",
        price: 26,
        img: "https://i0.wp.com/www.formulanitro.com/wp-content/uploads/2021/08/Pierre-Gasly.jpg?fit=1000%2C563&ssl=1",
        desc: `Pierre Gasly es un piloto de automovilismo francés. Campeón de la Eurocopa Fórmula Renault 2.0 en 2013 y de GP2 Series en 2016. Debutó en Toro Rosso en la temporada 2017 de Fórmula 1.​​ Ese año también fue subcampeón de Super Fórmula Japonesa.`,
    },
    {
        id: 4,
        title: "Valtteri Bottas",
        category: "AlfaRomeo",
        price: 32,
        img: "https://phantom-marca.unidadeditorial.es/e182f3bb06b02e9767447638bb1d65ed/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/02/16462181912388.jpg",
        desc: `Valtteri Viktor Bottas es un piloto de automovilismo finlandés.​ Debutó en Fórmula 1 en 2013 con el equipo Williams, donde se mantuvo hasta 2016. Entre 2017 y 2021 compitió para Mercedes, donde obtuvo un total de 10 victorias y sus mejores resultados en el campeonato, que son dos subcampeonatos en 2019 y 2020. `,
    },
    {
        id: 5,
        title: "Lando Norris",
        category: "McLaren",
        price: 22,
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/third-placed-lando-norris-of-great-britain-and-mclaren-news-photo-1650823649.jpg?crop=1.00xw:0.753xh;0,0.0339xh&resize=480:*",
        desc: `Lando Norris es un piloto de automovilismo británico que también posee la nacionalidad belga.​ Fue campeón de Fórmula 3 Europea en 2017 y subcampeón de FIA Fórmula 2 en 2018. ​​ Desde 2019 es piloto de la escudería McLaren de Fórmula 1.`,
    },
    {
        id: 6,
        title: "Sergio Pérez",
        category: "RedBull",
        price: 32,
        img: "https://cdn.forbes.com.mx/2022/03/Checo-Perez-temporada-2022.jpg",
        desc: `Sergio Michel Pérez Mendoza también conocido como Checo, es un piloto de automovilismo mexicano.​ Inició su carrera en monoplazas en 2004. Tres años más tarde fue campeón de Fórmula 3 Británica. Debutó en GP2 Series en 2009 y al año siguiente fue subcampeón. `,
    },
    {
        id: 7,
        title: "Yuki Tsunoda",
        category: "AlphaTauri",
        price: 21,
        img: "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/02/14/64083505-si202202140088news-scaled.jpg",
        desc: `Yuki Tsunoda es un piloto de automovilismo japonés. En 2018 ganó el Campeonato de Japón de Fórmula 4 y fue tercero en Fórmula 2 en 2020. Desde 2021 corre en la Fórmula 1 con AlphaTauri.`,
    },
    {
        id: 8,
        title: "Sebastian Vettel",
        category: "AstonMartin",
        price: 34,
        img: "https://phantom-marca.unidadeditorial.es/2722a7c77e094f43822ed063b660386e/resize/1320/f/jpg/assets/multimedia/imagenes/2021/03/03/16147930025367.jpg",
        desc: `Sebastian Vettel es un piloto alemán de automovilismo. Llegó formando parte del Equipo Júnior de Red Bull desde los 11 años. Ha ganado cuatro títulos mundiales de Fórmula 1 con el equipo Red Bull en 2010, 2011, 2012 y 2013, más tres subcampeonatos en 2009, 2017 y 2018 estos dos últimos con el equipo Ferrari. `,
    },
    {
        id: 9,
        title: "Carlos Sainz Jr.",
        category: "Ferrari",
        price: 27,
        img: "https://le10static.com/img/cache/article/576x324/0000/0019/199948.jpeg",
        desc: `Carlos Sainz Vázquez de Castro​, más conocido como Carlos Sainz Jr. o simplemente Carlos Sainz, es un piloto de automovilismo español. En 2014 ganó el campeonato de Formula Renault 3.5 Series y debutó en Fórmula 1 al año siguiente con Toro Rosso. Desde 2021 es piloto de la Scuderia Ferrari.`,
    },
    {
        id: 10,
        title: "Alex Albon",
        category: "Williams",
        price: 26,
        img: "https://www.eleconomista.com.mx/__export/1631160113911/sites/eleconomista/img/2021/09/08/alex_albon_especial.jpg_1269359182.jpg",
        desc: `Alexander Albon Ansusinha, más conocido como Alex Albon, es un piloto de automovilismo tailandés nacido en el Reino Unido. En 2021 participó en el DTM con AF Corse tras dos años en la Fórmula 1 como piloto de Toro Rosso y Red Bull Racing. A partir de la temporada 2022 es piloto de la escudería Williams Racing.`,
    },
];
// Parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// Todos los elementos
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
        <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price} años</h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
        </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
    .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
        ${category}
        </button>`;
    })
    .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);
            if (menuItem.category === category) {
                return menuItem;
            }
            });
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}
