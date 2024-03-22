let pokemonList = [
    {
        name: 'Bulbasour',
        height: 7,
        type: 'grass'
    },
    { 
        name: 'Charmander',
        height: 6,
        type: 'fire'
    },
    {
        name: 'Squirtle',
        height: 5,
        type: 'water'
    }
];
//creates database of pokemon for use in the following code

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ');

    if (pokemonList[i].height > 6) {
        document.write("Wow, that's big!")
    };

    document.write('<br>')

}
//lists the pokemon by name and height on the DOM, specifying pokemon with over height of 6 as "big" and adding a line break between each object