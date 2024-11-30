// Масив з URL анімованих GIF спрайтів покемонів
const pokemonSprites = [
  'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
];

// Додавання нового покемона
document.getElementById('spawnButton').addEventListener('click', function () {
  const newPokemon = document.createElement('img');
  const randomPokemon = pokemonSprites[Math.floor(Math.random() * pokemonSprites.length)];
  newPokemon.classList.add('pokemon');
  newPokemon.src = randomPokemon;

  const pokemonArea = document.getElementById('pokemonArea');
  pokemonArea.appendChild(newPokemon);
});

// Зміна фону
document.getElementById('changeBackgroundButton').addEventListener('click', function () {
  const backgrounds = [
    'url("https://i.gifer.com/1FA.gif")',
    'url("https://i.gifer.com/7MQ3.gif")',
    'url("https://i.gifer.com/BALt.gif")',
  ];
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = randomBackground;
});

// Видалення останнього покемона
document.getElementById('deletePokemonButton').addEventListener('click', function () {
  const pokemonArea = document.getElementById('pokemonArea');
  const lastPokemon = pokemonArea.lastElementChild;
  if (lastPokemon) {
    pokemonArea.removeChild(lastPokemon);
  } else {
    alert('No Pokemon to delete!');
  }
});
