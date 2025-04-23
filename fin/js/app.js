// axios.get('https://dragonball-api.com/api/characters?name=piccolo')
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })

const form = document.querySelector('form');
const inputText = document.querySelector('input[type=text]');
const personajeContenedor = document.querySelector('.personaje');

form.addEventListener('submit', async e => {
    e.preventDefault();
    // console.log(inputText.value);
    const res = await axios.get(`https://dragonball-api.com/api/characters?name=${inputText.value}`);
    const personaje = res.data[0];
    // console.log(personaje);
    const plantilla = `
            <div class="personaje__box">
                <img src="${personaje.image}" alt="">
            </div>
            <div class="datos">
                <div>
                    <strong>Nombre: </strong> ${personaje.name}
                </div>
                <div>
                    <strong>Base Ki: </strong> ${personaje.ki}
                </div>
                <div>
                    <strong>Total Ki: </strong> ${personaje.maxKi}
                </div>
                <div>
                    <strong>Raza: </strong> ${personaje.race}
                </div>
            </div>
    `;
    // console.log(plantilla)
    personajeContenedor.innerHTML = plantilla;
    personajeContenedor.classList.add('mostrar');
})