const text = [
  `Que si nubla y diluvia de nuevo, que soples pestañas del dedo, con los dedos cuenten los segundos y cuánto separan el rayo del trueno, que cuentes todas las estrellas y pongas tu firma por el firmamento, a fin de ponerle tu nombre a este mundo, pues es del color con el que quieras verlo, que sepas que toda luz lleva sujeta una silueta, que leas lo más bonito del mundo aunque se escriba con mala letra, que no son los ojos, es la mirada, que no es la mirada, es cómo me miras, que no es como miras, es cómo te callas y dices aunque no lo digas.`,
  `Un músico sensible con un tema memorable, nadie nunca es responsable hasta que llega la victoria, yo era invencible y me volviste invisible, ante tus ojos tan terribles tatuados en mi memoria, a mí me viene bien cantar bajo la luna, mientras nadas tú, desnuda en la laguna, es que eres una, gema en las piedras, pero a veces eres hiedra venenosa, se complica ya la cosa, porque quiero que me quieras.`,
  `Mi peso disminuye casa vez que estamos juntos, con la punta del meñique me has cambiado todo el rumbo, hemos espantado laberintos y fantasmas, cuando me distraigo me sonríes y me das más, dame un abrazo que nos crece un par de alas, y así nos rebotan malas vibras como balas, yo ya estoy cansado de esta vida si ando solo, sígueme tumbemos penas jugando bolos.`,
  `Yo no sé si lo he sentido si lo he vivido, algún amigo me ha dicho que nunca lo ha conocido, que es una pinche locura me dijeron en el paso, bajo árboles de nogal mientras contemplaba el ocaso, que es maravilloso si estas con esa persona, sientes que todo es perfecto que nada falta ni sobra, aunque nadie tiene claro realmente cómo funciona, porque es un enigma y de repente el corazón te roba. `,
  `Daría todo por esa persona escuché decir, sé que lo amo y no voy a dejarlo aunque me haga sufrir, de verdad en ese momento fue que más me confundí, si el amor es sufrimiento y también te pueden mentir por qué persistir, embocarlo con demencia si no se ponen de acuerdo la razón y la conciencia, yo de verdad tengo muy poca experiencia, también dicen que es un arte que no lo mide la ciencia.`,
  `Me dijeron que se esconde, por sentir miedo del hombre, y de saber de lo que son capaces en su nombre, aunque muchos lo describen como un poder muy enorme, hay quien después de tenerlo igual se sienten inconformes, no hay médico ni curandero, cupidos o consejeros, Psicólogos, psiquiatra cineastas y raperos, que puedan interpretarlo en todo este mundo entero, de una forma en que sea fiel a lo que ellos mismo sintieron.`,
  `Ella que era la más seca que viste por aquí, cara de asco, bajo un mar de pecas que afloran desde abril, aguas mil, te juro que la viste pasar y pasear en medio de Madrid. Él que siempre andaba dando saltos y se ahogaba, en los charcos de la plaza dos de mayo y marceaba, no era un decir, te juro que no le vi venir y huir de este polvorín.`,
  `Él ya le avisó de su tendencia inestable, a desinflarse en las primeras y de atarse las cuerdas, ella respondió que, si le faltaba el aire, probara con las locas, que esas no te sujetan. Ella respondió que era inexpugnable, hiriente con la gente que quería estar cerca, él le comentó que no había que preocuparse, ya que no quería estar cerca, sino dentro y plantarse`,
  `Previa fatalidad, peligro de proximidad, todos, amigos y amigas, les intentaron avisar, que no era tan mala ni él tan bobo, solo la mujer cactus y el hombre globo, y es que hay veces que no entiendo cuando me dices, amor, que si quiero, que si tengo; si me das o tengo yo, esto es solo un mal ejemplo, una vaga recreación, cuando dos polos opuestos sienten más que una atracción, es amor.`,
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  // A click on a form submit button – initiates its submission to the server.

  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
