const Pokedex = document.getElementById("Pokedex");

const fetchPokemon = () => {
  const promises = [];
  for (let id = 10090; id <= 10090; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10073; id <= 10073; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10071; id <= 10072; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10065; id <= 10065; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10064; id <= 10064; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10066; id <= 10066; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10070; id <= 10070; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10087; id <= 10087; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10067; id <= 10067; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10074; id <= 10074; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10089; id <= 10089; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10076; id <= 10076; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10079; id <= 10079; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10088; id <= 10088; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10068; id <= 10069; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10075; id <= 10075; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10077; id <= 10078; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10033; id <= 10060; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10062; id <= 10063; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  Promise.all(promises).then((results) => {
    const Pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites["front_default"],
      back_image: data.sprites["back_default"],
      imageshiny: data.sprites["front_shiny"],
      type: data.types.map((type) => type.type.name).join(", "),
    }));
    displayPokemon(Pokemon);
  });
};

const displayPokemon = (Pokemon) => {
  console.log(Pokemon);
  const pokemonHTMLString = Pokemon.map(
    (pokemon) => `
      <li class="card" onclick="selectPokemon(${pokemon.id})">
      <br  />  
      <img class="card-image" src="${pokemon.image}" />
        <h2 class="card-title"> ${pokemon.name}</h2>
        <p class="card-subtitle">Type: ${pokemon.type}</p>
      </li>
      `
  ).join("");
  Pokedex.innerHTML = pokemonHTMLString;
};

const selectPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  displayPopup(pokemon);
};

const displayPopup = (pokemon) => {
  const type = pokemon.types.map((type) => type.type.name).join(", ");
  const image = pokemon.sprites["front_default"];
  const imageshiny = pokemon.sprites["front_shiny"];

  const htmlString = `
  <div class="popup">
    <div class="card">
        <button id="CloseBtn" onclick="closePopup()">Close</button>
        <img class="card-image" src="${image}" /> 
        <img class="shiny-image" src="${imageshiny}"  />
        <h2 class="card-title"> ${pokemon.name}</h2>
        <p class="card-subtitle">Type: ${type}</p>
        <p>Height: ${pokemon.height}0cm | Weight: ${pokemon.weight}00g </p>  
    </div>
  </div> 
  `;

  Pokedex.innerHTML = htmlString + Pokedex.innerHTML;
};

const closePopup = () => {
  const popup = document.querySelector(".popup");
  popup.parentElement.removeChild(popup);
};

fetchPokemon();
